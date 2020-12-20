import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment'
import { updateESPPRow } from "../../js/actions/index";

import { useSelector, useDispatch } from 'react-redux';
import { updateEsppRow, selectEspp } from './esppSlice';

import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import fetch from 'node-fetch';

// const fs = require('fs')


// import styles from './Counter.module.css';


export default function EsppDepositRow2(props) {
debugger
    const [units, setUnits] = useState(0);
    const [taxRate, setTaxRate] = useState(52);
    const [amountGain, setAmountGain] = useState(0);
    const [totalLiab, setTotalLiab] = useState(0);
    const [daysToPay, setDaysToPay] = useState("--");


    const [totalChargeableAmount, setTotalChargeableAmount] = useState(0);

    // const count = useSelector(selectCount)
    const dispatch = useDispatch()

    // const groupedRows = useSelector(state => state.espp.value + 2)
    // const groupedRows = useSelector(
    //     // console.log(state),
    //     selectEspp.espp.reduce((acc, currRow) => {
    //     if (moment(currRow.date).format("YY") === moment(props.date).format("YY")) {
    //       acc.add(currRow);
    //     }
    //   }, [])
    
    // );
    // const groupedRows = useSelector((state) => {
    //     // console.log(state),
    //   state.espp.reduce((acc, currRow) => {
    //     if (moment(currRow.date).format("YY") === moment(props.date).format("YY")) {
    //     //   acc.add(currRow);
    //     }
    //   }, [])
    // });


    const calcTotalChargeableAmount = (dateNotToInclude, esppRowData, currentTotalLiab) =>{
        moment('2010-10-20').isSame('2010-01-01', 'year');  // true

        const filteredRows = esppRowData.filter((currentRow)=>  currentRow.date != dateNotToInclude && moment(currentRow.date).isSame(moment(dateNotToInclude),'year'))
        // const dresult = esppRowData.map((result.totalLiab)=> )

        const tempamountGain = filteredRows.reduce( (acc, currRow)=>{
            // currentRow.date != dateNotToInclude && moment(currentRow.date).format("YY").equals(moment(dateNotToInclude).format("YY"))
            return acc + currRow.totalLiab
        },currentTotalLiab)
        // console.log("props !_!_!_!_")
        // console.dir(props)
        return tempamountGain
    }

    //store.getState()

    //when units/tax rate changes 
            //update total liab
            //udate amount gain
            //update store : units, totalLiab, amountGain
            
            //when total liab / amount gain changes
                //either by ID, or,  by current year
                // get ID & ID-1 entries from store, or, go get rows with matching year from store
                    //sum totalLiab , sum amountGain


    const updateDaysToPay = useEffect( ()=>{
        let ddate = moment(props.row.date);
        let datePlus = ddate.add(28,"days");
        let now = moment();
        let daysLeft = datePlus.diff(now, 'days');

        setDaysToPay(daysLeft < -365 ? "--" : daysLeft)
    })



    const esppRowData = useSelector((state) => state.espp)
    
    const updateTotalLiab =  useEffect(() => {
        // props.updateOuterState(props.index, totalLiabilityRef.current.outerText)
        const blepamountgain = (props.row.fmvEUR - props.row.acquiredPriceEUR) * units
        setAmountGain( ()=> blepamountgain )
        // setTotalLiab(   (   (props.row.fmvEUR - props.row.acquiredPriceEUR) * (taxRate / 100)) * units  )
        setTotalLiab(   blepamountgain * (taxRate / 100)  )


        // setTotalChargeableAmount(calcTotalChargeableAmount(props.row.date,esppRowData, totalLiab))

        },[units, taxRate]);
        
    const dispatchAmountGainAndTotalLiab =  useEffect(() => {
        dispatch(updateEsppRow({date: props.row.date, units: units, amountGain: amountGain, totalLiab: totalLiab }))
        setTotalChargeableAmount(calcTotalChargeableAmount(props.row.date,esppRowData, totalLiab))


        },[totalLiab]);



    const handleUnitsChange = (event) => {

        setUnits(parseInt(event.target.value) || 0) //no ()=> as not working with previou value, just replacing with new value
        // setAmountGain(      (props.row.fmvEUR - props.row.acquiredPriceEUR) * units)
        // setTotalLiab(   (   (props.row.fmvEUR - props.row.acquiredPriceEUR) * (taxRate / 100)) * units  )
}

    const handleTaxRateChange = (event) => (
        setTaxRate(parseInt(event.target.value))
    )

    const TaxRateSelect = function (props) {
        return (
            <select name="taxRate" id="taxRate" value={taxRate} onChange={props.onChange}>
                {/* <option value="select">select</option> */}
                <option value="52">52%</option>
                <option value="48.5">48.5%</option>
                <option value="46">46%</option>
            </select>
        )
    }



    // async function modifyPdf(amountGain, totalLiab) {
    //     debugger
    //   const url = 'https://www.revenue.ie/en/additional-incomes/documents/form-rtso1.pdf'
    //   const existingPdfBytes = await fetch(url, {method: 'POST', mode: 'cors'}).then(res => res.arrayBuffer())
    
    //   const pdfDoc = await PDFDocument.load(existingPdfBytes)
    // //   const pdfDoc = await PDFDocument.load(fs.readFile('./form-rtso1.pdf'));

    //   const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    
    //   const pages = pdfDoc.getPages()
    //   const firstPage = pages[0]
    //   const { width, height } = firstPage.getSize()
    //   firstPage.drawText(totalLiab, {
    //     x: 5,
    //     y: height / 2 + 300,
    //     size: 50,
    //     font: helveticaFont,
    //     color: rgb(0.95, 0.1, 0.1),
    //     // rotate: degrees(-45),
    //   })
    //   firstPage.drawText(amountGain, {
    //     x: 500,
    //     y: height / 2 + 300,
    //     size: 50,
    //     font: helveticaFont,
    //     color: rgb(0.95, 0.1, 0.1),
    //     // rotate: degrees(-45),
    //   })
    
    //   const pdfBytes = await pdfDoc.save()
    // }


    const totalLiabilityRef = useRef()
    return (
        <tr>
            <td style={{"white-space": "nowrap"}}>{moment(props.row.date).format("YYYY-MM-DD")}</td>
            <td>{props.row.acquiredPriceUSD}</td>
            <td>{props.row.acquiredPriceEUR}</td>
            <td>{props.row.fmvUSD}</td>
            <td>{props.row.fmvEUR}</td>
            {/* <td ><input value={units} onChange={handleUnitsChange}></input></td> */}
            <td ><input style = {{"width":"100%"}} value={units} onChange={handleUnitsChange}></input></td>
            <td><TaxRateSelect onChange={handleTaxRateChange} /></td>

            {/* total liablilty */}
            <td id="totalLiability" ref={totalLiabilityRef}>{totalLiab.toFixed(2)}</td>
            {/* <td id="totalLiability" ref={totalLiabilityRef}>{((props.row.fmvEUR - props.row.acquiredPriceEUR) * (taxRate / 100)) * units}</td> */}
            {/* total amount of gain  */}
            {/* <td id="amountGain">{(props.row.fmvEUR - props.row.acquiredPriceEUR) * units}</td> */}
            <td id="amountGain">{amountGain.toFixed(2)}</td>
            <td style={{"white-space": "nowrap"}}>{moment(props.row.date).add(30, 'days').format("YYYY-MM-DD")}</td>
            {/* <td>{ moment().diff(moment(props.row.date),"days")}</td> */}
            {/* <td>{moment(props.row.date).diff(moment(), "days") >= 0 ? moment(props.row.date).diff(moment(), "days") : "x"}</td> */}
            <td>{daysToPay}</td>
            {/* <td>{props.index % 2 === 0 && "yep"}</td> */}
            {/* <td>{totalChargeableAmount}</td> */}
            {/* <td></td> */}
            {/* <td>{totalChargeableAmount}</td> */}
            {/* <button onClick = {modifyPdf(amountGain, totalLiab)}> Generate </button> */}
        </tr>
    )
}


//generic
    //number of periods per year, once number entered and "same each year?" is yes. 
        //popup x number of fields, date attributes
        //starting year - ending year
    //auto generate number of year rows, with year field populated and date populated

