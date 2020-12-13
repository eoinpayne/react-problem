import React, {useState, useRef} from 'react';
// import EsppDepositRow2 from './EsppDepositRow2';
// import EsppDepositRow2 from './EsppDepositRow2';
import EsppDepositRow2 from './EsppDepositRow2flux';

import Table from 'react-bootstrap/Table';
import {connect, useSelector} from 'react-redux'

// const ESPPState = useSelector(state.esppRowData);


// const mapStateToProps = state => {
//     return { esppRowData: state.esppRowData };
//   };




// const EsppList = connect(mapStateToProps)(ConnectedEsppDepositRow);


export default function EsppTable2() {

    const headers = ["Share Deposit Date YYYY-MM-DD", "$ Acquired Price", "€ Acquired Price", "$ FMV", "€ FMV", "Units", "Tax Rate",
        "Total Liability", "Total Amount of Gain Made on Share Option", "RTSO to be paid by", "days left to pay",
        "FORM 11: Enter total chargeable amount", "FORM 11: Enter the amount of Relevant Tax on a Share Option (RTSO) paid"]

      
    const TaxRateSelect = function(){
        return(
            <select name="taxRate" id="taxRate">
            <option value="52">52%</option>
            <option value="48.5">48.5%</option>
            <option value="46">46%</option>
        </select>
        )}

        // console.log(useSelector("(state) => state.espp"))
        // console.log(useSelector((state) => state.espp))
        // console.log(useSelector("(state) => state"))
        // console.log(useSelector((state) => state))
        const esppRowData = useSelector((state) => state.espp)
        console.log(" 098045986045  esppRowData from TABLE")
        console.log(esppRowData)

        // const esppRowData = useSelector((state) => {
        //     // console.log(state),
        //   state.reduce((acc, currRow) => {
        //     if (moment(currRow.date).format("YY") === moment(props.date).format("YY")) {
        //       acc.add(currRow);
        //     }
        //   }, [])
        // });

        const connectedEsppDepositRow = () => {
            console.log("^&^&^&^&^&")
            console.log(esppRowData)
            console.log("^&^&^&^&^& fin fin ")

            esppRowData && esppRowData.map((row) => {
                return(  //TODO: remove index setting here and do it in esppDepostRow directly from row.id Prop? 
                <EsppDepositRow2 row={row} index={row.id}/>
                )
                }
   

    )} //map //connected 

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    {headers.map((heading, index) => (
                        <th key={index}>{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* <EsppList/> */}
                {/* {connectedEsppDepositRow()} */}
                {esppRowData && esppRowData.map((row, index) => (
                    // <EsppDepositRow row={row} index={index} updateOuterState = {updateOuterState} />
                    <EsppDepositRow2 row={row} index={index}/>
                    // <EsppDepositRow row={row} index={index}/>
                ))}
            </tbody>
        </Table>)
}