import React, { useState, useEffect, useRef, Fragment } from 'react';
import moment from 'moment'
// import {connect} from 'react-redux'
import { updateESPPRow } from "../../js/actions/index";
import EsppDepositRow2 from './EsppDepositRow2flux';


import { useSelector, useDispatch } from 'react-redux';
import { updateEsppRow, selectEspp } from './esppSlice';


// import styles from './Counter.module.css';




export default function EsppYearGroup(props) {
    const [outerTotalLiab, setOuterTotalLiab] = useState(0);
//outer
    const calcTotalChargeableAmount = (esppState, props) =>{
        debugger
        const filteredRows = esppState.filter((currentRow)=> moment(currentRow.date).isSame(moment(props.year),'year'))
        // const dresult = esppRowData.map((result.totalLiab)=> )

        const tempamountGain = filteredRows.reduce( (acc, currRow)=>{
            // currentRow.date != dateNotToInclude && moment(currentRow.date).format("YY").equals(moment(dateNotToInclude).format("YY"))
            return acc + currRow.totalLiab
        },0)
        // console.log("props !_!_!_!_")
        // console.dir(props)
        return tempamountGain
    }

    const esppState = useSelector((state) => state.espp)
    
    const updateTotalLiab =  useEffect(() => {
        // setTotalLiab(   (   (props.row.fmvEUR - props.row.acquiredPriceEUR) * (taxRate / 100)) * units  )

        debugger
        setOuterTotalLiab(calcTotalChargeableAmount(esppState, props))

        },[esppState]);
 
    
    return (

    <tbody>
            {/* <td RowSpan = {2}>{props.year}</td> */}
            <td>{props.year}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{}</td>
            <td>{outerTotalLiab}</td>
            <td>{"boop"}</td>
            {props.esppRowData && props.esppRowData.map((row, index) => (
                    // <EsppDepositRow row={row} index={index} updateOuterState = {updateOuterState} />
                    <EsppDepositRow2 key={row.date} row={row} index={index}/>
                    // <EsppDepositRow row={row} index={index}/>
                ))}
            {/* <td>{moment(props.row.date).format("YYYY-MM-DD")}</td> */}
    </tbody>
    )
}

