import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment'
// import {connect} from 'react-redux'
import { updateESPPRow } from "../../js/actions/index";

import { useSelector, useDispatch } from 'react-redux';
import { updateEsppRow, selectEspp } from './esppSlice';
// import styles from './Counter.module.css';




export default function EsppDepositRow2(props) {

    const [units, setUnits] = useState(0);
    const [taxRate, setTaxRate] = useState(52);
    const [amountGain, setAmountGain] = useState(0);
    const [totalLiab, setTotalLiab] = useState(0);

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
        const filteredRows = esppRowData.filter((currentRow)=>  currentRow.date != dateNotToInclude && (moment(currentRow.date).format("YY")).equals(moment(dateNotToInclude).format("YY"))
        )
        // const dresult = esppRowData.map((result.totalLiab)=> )

        const tempamountGain = filteredRows.reduce( (acc, currRow)=>{
            // currentRow.date != dateNotToInclude && moment(currentRow.date).format("YY").equals(moment(dateNotToInclude).format("YY"))
            acc += currRow.totalLiab
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


    // const updateDaysToPay = useEffect( ()=>{
    //     let ddate = moment(props.row.date);
    //     let datePlus = ddate.add(28,"days");
    //     let now = moment();
    //     let daysLeft = datePlus.diff(now, 'days');

    //     setDaysToPay(daysLeft >= 0 ? daysLeft : "--")
    // })
    const esppRowData = useSelector((state) => state.espp)
    
    const updateTotalLiab =  useEffect(() => {
        // props.updateOuterState(props.index, totalLiabilityRef.current.outerText)
        setAmountGain(      (props.row.fmvEUR - props.row.acquiredPriceEUR) * units)
        setTotalLiab(   (   (props.row.fmvEUR - props.row.acquiredPriceEUR) * (taxRate / 100)) * units  )
        // setTotalLiab(   amountGain * (taxRate / 100)  )

        dispatch(updateEsppRow({units: units, amountGain: amountGain, totalLiab: totalLiab }))

        setTotalChargeableAmount(calcTotalChargeableAmount(props.row.date,esppRowData, totalLiab))

        },[units, taxRate]);


    const handleUnitsChange = (event) => (
        setUnits(event.target.value) //no ()=> as not working with previou value, just replacing with new value
    )
    const handleTaxRateChange = (event) => (
        setTaxRate(event.target.value)
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


    const totalLiabilityRef = useRef()
    console.log("BOOM BITCHES")
    return (
        <tr>
            <td>{props.index}</td>
            <td>{moment(props.row.date).format("YYYY-MM-DD")}</td>
            <td>{props.row.acquiredPriceEUR}</td>
            <td>{props.row.fmvUSD}</td>
            <td>{props.row.fmvEUR}</td>
            {/* <td ><input value={units} onChange={handleUnitsChange}></input></td> */}
            <td ><input value={units} onChange={handleUnitsChange}></input></td>
            <td><TaxRateSelect onChange={handleTaxRateChange} /></td>

            {/* total liablilty */}
            <td id="totalLiability" ref={totalLiabilityRef}>{totalLiab}</td>
            {/* <td id="totalLiability" ref={totalLiabilityRef}>{((props.row.fmvEUR - props.row.acquiredPriceEUR) * (taxRate / 100)) * units}</td> */}
            {/* total amount of gain  */}
            {/* <td id="amountGain">{(props.row.fmvEUR - props.row.acquiredPriceEUR) * units}</td> */}
            <td id="amountGain">{}</td>
            <td>{moment(props.row.date).add(30, 'days').format("YYYY-MM-DD")}</td>
            {/* <td>{ moment().diff(moment(props.row.date),"days")}</td> */}
            <td>{moment(props.row.date).diff(moment(), "days") >= 0 ? moment(props.row.date).diff(moment(), "days") : "x"}</td>
            {/* <td>{props.index % 2 === 0 && "yep"}</td> */}
            {/* <td>{totalChargeableAmount}</td> */}
            <td>{props.index % 2 === 0 && totalChargeableAmount}</td>
        </tr>


        // <tr>
        //     <td>{props.index}</td>
        //     { Object.entries(props.row).map((thing,index) => (
        //         <td key={index}>{thing[1]}</td>
        //     ))}
        // </tr>


        // <Card>
        //     <Form inline onSubmit={handleSubmit}>
        //         <Form.Group>
        //             {/* <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style = {{"marginRight": "5px"}}>
        //             <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
        //         </svg>                 */}
        //             <Form.Label for="username">username</Form.Label>
        //             <Form.Control
        //                 id="username"
        //                 value={username}
        //                 required
        //                 style={usernameInvalidChar ? { 'border': '2px solid red', 'font-size': '.75rem' } : { 'font-size': '.75rem' }}
        //                 type="text"
        //                 placeholder="username/email"
        //                 className="mr-sm-2"
        //                 onChange={handleNameChange} />
        //         </Form.Group>
        //         <Form.Group>
        //             <Form.Label for="password">password</Form.Label>
        //             <Form.Control
        //                 id="password"
        //                 value={password}
        //                 required
        //                 style={passwordInValidChar ? { border: '2px solid red', 'font-size': '.75rem' } : { 'font-size': '.75rem' }}
        //                 type="text"
        //                 placeholder="password"
        //                 className="mr-sm-2"
        //                 onChange={handlePasswordChange} />
        //         </Form.Group>
        //         <Button
        //             disabled={isInvalidusername || isInvalidPassword}
        //             style={{ 'font-size': '.75rem' }}
        //             variant="outline-info">
        //             Log In </Button>
        //     </Form>
        // </Card>
    )
}


//generic
    //number of periods per year, once number entered and "same each year?" is yes. 
        //popup x number of fields, date attributes
        //starting year - ending year
    //auto generate number of year rows, with year field populated and date populated

