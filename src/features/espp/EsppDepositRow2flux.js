import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { updateEsppRow } from "./esppSlice";

import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from '@pdf-lib/fontkit'

import fetch from "node-fetch";
import download from "downloadjs";
// import TextSignature from "text-signature";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



export default function EsppDepositRow2(props) {
  var fs = require("fs");
  const [units, setUnits] = useState(0);
  const [taxRate, setTaxRate] = useState(52);
  const [amountGain, setAmountGain] = useState(0);
  const [totalLiab, setTotalLiab] = useState(0);
  const [daysToPay, setDaysToPay] = useState("--");

  const [totalChargeableAmount, setTotalChargeableAmount] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onSwitchAction = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const dispatch = useDispatch();

  const calcTotalChargeableAmount = (
    dateNotToInclude,
    esppRowData,
    currentTotalLiab
  ) => {
    moment("2010-10-20").isSame("2010-01-01", "year"); // true

    const filteredRows = esppRowData.filter(
      (currentRow) =>
        currentRow.date != dateNotToInclude &&
        moment(currentRow.date).isSame(moment(dateNotToInclude), "year")
    );

    const tempamountGain = filteredRows.reduce((acc, currRow) => {
      return acc + currRow.totalLiab;
    }, currentTotalLiab);
    return tempamountGain;
  };

  const updateDaysToPay = useEffect(() => {
    let ddate = moment(props.row.date);
    let datePlus = ddate.add(28, "days");
    let now = moment();
    let daysLeft = datePlus.diff(now, "days");
    setDaysToPay(daysLeft < -365 ? "--" : daysLeft);
  });

  const esppRowData = useSelector((state) => state.espp);
  const updateTotalLiab = useEffect(() => {
    const blepamountgain =
      (props.row.fmvEUR - props.row.acquiredPriceEUR) * units;
    setAmountGain(() => blepamountgain);
    setTotalLiab(blepamountgain * (taxRate / 100));
  }, [units, taxRate]);

  const dispatchAmountGainAndTotalLiab = useEffect(() => {
    dispatch(
      updateEsppRow({
        date: props.row.date,
        units: units,
        amountGain: amountGain,
        totalLiab: totalLiab,
      })
    );
    setTotalChargeableAmount(
      calcTotalChargeableAmount(props.row.date, esppRowData, totalLiab)
    );
  }, [totalLiab]);

  const handleUnitsChange = (event) => {
    setUnits(parseInt(event.target.value) || 0); //no ()=> as not working with previou value, just replacing with new value
    // setAmountGain(      (props.row.fmvEUR - props.row.acquiredPriceEUR) * units)
    // setTotalLiab(   (   (props.row.fmvEUR - props.row.acquiredPriceEUR) * (taxRate / 100)) * units  )
  };

  const handleTaxRateChange = (event) =>
    setTaxRate(parseInt(event.target.value));

  const TaxRateSelect = function (props) {
    return (
      <select
        name="taxRate"
        id="taxRate"
        value={taxRate}
        onChange={props.onChange}
      >
        {/* <option value="select">select</option> */}
        <option value="52">52%</option>
        <option value="48.5">48.5%</option>
        <option value="46">46%</option>
      </select>
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    let name = form.elements.formName.value;
    let address1 = form.elements.formAddress1.value;
    let address2 = form.elements.formAddress2.value;
    let address3 = form.elements.formAddress3.value;
    let ppsn = form.elements.formPPSN.value;
    let autoSig = isSwitchOn;

    //   let name = event.target.formName

    modifyPdf(name, address1, address2, address3, ppsn, autoSig);
    setShow(false);
  };

  async function modifyPdf(name, address1, address2, address3, ppsn, autoSig) {
    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    //   }
    // const sleep = (milliseconds) => {
    //   return new Promise((resolve) => setTimeout(resolve, milliseconds));
    // };

    const url = "/form-rtso1.pdf";
    //   "https://cors-anywhere.herokuapp.com/https://www.revenue.ie/en/additional-incomes/documents/form-rtso1.pdf";
    // const fontUrl = 'https://fonts.gstatic.com/s/homemadeapple/v11/Qw3EZQFXECDrI2q789EKQZJob0x6XHgOiJM6.woff2';
    const fontUrl = '/homemade-apple-v11-latin-regular.ttf';

    const existingPdfBytes = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }).then((res) => res.arrayBuffer());

    const fontBytes = await fetch(fontUrl).then(res => res.arrayBuffer());
  
    
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    
    pdfDoc.registerFontkit(fontkit)

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const appleFont = await pdfDoc.embedFont(fontBytes);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();



    // setTimeout(async function () {

      firstPage.drawText(`${name}`, {
        x: 33,
        y: height - 110,
        size: 13,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(`${address1}`, {
        x: 300,
        y: height - 105,
        size: 13,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(`${address2}`, {
        x: 300,
        y: height - 120,
        size: 13,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(`${address3}`, {
        x: 300,
        y: height - 137,
        size: 13,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(`${ppsn}`, {
        x: 152,
        y: height - 688,
        size: 15,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(`${props.row.date}`, {
        x: 152,
        y: height - 735,
        size: 15,
        font: helveticaFont,
        color: rgb(0, 0, 0),
        // rotate: degrees(-45),
      });
      firstPage.drawText(`${Math.round(amountGain)}`, {
        x: 185,
        y: height - 800,
        size: 20,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(`${Math.round(totalLiab)}`, {
        x: 455,
        y: height - 800,
        size: 20,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      });

//9
//17

      if (autoSig && name){
        const length = name.length 
        console.log(`length is ${length}`) 
        if(length <= 11){
          firstPage.drawText(name, {
            x: 420,
            y: height - 735,
            size: 23,
            font: appleFont,
            color: rgb(0, 0, 1),
            rotate: degrees(-4),
          });
        }
        else if(length <= 14){
          firstPage.drawText(name, {
            x: 407,
            y: height - 740,
            size: 22,
            font: appleFont,
            color: rgb(0, 0, 1),
            rotate: degrees(-3),
          });
        }

          else if(length <= 20){
            firstPage.drawText(name, {
              x: 393,
              y: height - 737,
              size: 18.5,
              font: appleFont,
              color: rgb(0, 0, 1),
              rotate: degrees(-2),
            });
          }
          else if(length <= 27){
            firstPage.drawText(name, {
              x: 392,
              y: height - 740,
              size: 14,
              font: appleFont,
              color: rgb(0, 0, 1),
              rotate: degrees(1),
            });
          }
            else{
              firstPage.drawText(name, {
                x: 392,
                y: height - 740,
                size: 11,
                font: appleFont,
                color: rgb(0, 0, 1),
                rotate: degrees(1),
              });
          }
        

      }

      // autoSig &&
      //   firstPage.drawText(name, {
      //     x: 400,
      //     y: height - 744,
      //     size: 16,
      //     font: appleFont,
      //     color: rgb(0, 0, 1),
      //     // color: Blue,
      //     // rotate: degrees(),
          

      //   });
      // autoSig &&
      //   firstPage.drawImage(sigImage, {
      //     x: 295,
      //     y: height - 940,
      //     size: 20,
      //     font: helveticaFont,
      //     color: rgb(0, 0, 0),
      //   });

      const pdfBytes = await pdfDoc.save();
      download(pdfBytes, `rtso1_${props.row.date}`, "application/pdf");
    // }, 2000);
  }

  const totalLiabilityRef = useRef();
  return (
    <tr>
      <td style={{ "white-space": "nowrap" }}>
        {moment(props.row.date).format("YYYY-MM-DD")}
      </td>
      <td>{props.row.acquiredPriceUSD}</td>
      <td>{props.row.acquiredPriceEUR}</td>
      <td>{props.row.fmvUSD}</td>
      <td>{props.row.fmvEUR}</td>
      <td>
        <input
          style={{ width: "100%" }}
          value={units}
          onChange={handleUnitsChange}
        ></input>
      </td>
      <td>
        <TaxRateSelect onChange={handleTaxRateChange} />
      </td>

      <td id="totalLiability" ref={totalLiabilityRef}>
        {totalLiab.toFixed(2)}
      </td>
      <td id="amountGain">{amountGain.toFixed(2)}</td>
      <td style={{ "white-space": "nowrap" }}>
        {moment(props.row.date).add(30, "days").format("YYYY-MM-DD")}
      </td>
      <td>{daysToPay}</td>
      <td>
        <Button
          style={{ margin: "0px", padding: "1px", maxWidth: "94px" }}
          variant="primary"
          size="sm"
          onClick={handleShow}
        >
          Generate RTSO1 form
        </Button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>RTSO1 Form generator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ textAlign: "center" }}>
            <i>All fields optional, only used to populate RTSO1 form pdf.</i>
            <br />
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="input" placeholder="Enter Name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formAddress1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control type="input" placeholder="Enter Address Line 1" />
            </Form.Group>
            <Form.Group controlId="formAddress2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control type="input" placeholder="Enter Address Line 2" />
            </Form.Group>
            <Form.Group controlId="formAddress3">
              <Form.Label>Address Line 3</Form.Label>
              <Form.Control type="input" placeholder="Enter Address Line 3" />
            </Form.Group>

            <Form.Group controlId="formPPSN">
              <Form.Label>PPSN</Form.Label>
              <Form.Control type="input" placeholder="Enter PPSN" />
            </Form.Group>

            <Form.Group controlId="formAutoSignature">
              <Form.Switch
                onChange={onSwitchAction}
                label="Automatically generate a Signature"
                checked={isSwitchOn}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </tr>
  );
}
