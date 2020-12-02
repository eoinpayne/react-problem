import React, {useState, useRef} from 'react';
import EsppDepositRow2 from './EsppDepositRow2';
import Table from 'react-bootstrap/Table';
import {connect, useSelector} from 'react-redux'

// const ESPPState = useSelector(state.esppRowData);


// const mapStateToProps = state => {
//     return { esppRowData: state.esppRowData };
//   };




// const EsppList = connect(mapStateToProps)(ConnectedEsppDepositRow);


export default function EsppTable2() {

    const headers = ["Share Deposit Date YYYY-MM-DD", "$ Acquired Price", "€ Acquired Price", "$ FMV", "€ FMV", "Units", "Tax Rate",
        "TOTAL LIABILITY", "total amount of gain made on share option", "RTSO to be paid by", "days left to pay",
        "FORM 11: Enter total chargeable amount", "FORM 11: Enter the amount of Relevant Tax on a Share Option (RTSO) paid"]

      
    const TaxRateSelect = function(){
        return(
            <select name="taxRate" id="taxRate">
            <option value="52">52%</option>
            <option value="48.5">48.5%</option>
            <option value="46">46%</option>
        </select>
        )}

        const esppRowData = useSelector((state) => state.esppRowData)

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