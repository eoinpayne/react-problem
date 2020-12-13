import React, {useState, useRef} from 'react';
// import EsppDepositRow2 from './EsppDepositRow2';
// import EsppDepositRow2 from './EsppDepositRow2';
import EsppDepositRow2 from './EsppDepositRow2flux';
import EsppYearGroup from './EsppYearGroup';

import Table from 'react-bootstrap/Table';
import {connect, useSelector} from 'react-redux'
import moment from 'moment'

// const ESPPState = useSelector(state.esppRowData);


// const mapStateToProps = state => {
//     return { esppRowData: state.esppRowData };
//   };




// const EsppList = connect(mapStateToProps)(ConnectedEsppDepositRow);


export default function EsppTable2() {

    const headers = ["Share Deposit Date YYYY-MM-DD", "$ Acquired Price", "€ Acquired Price", "$ FMV", "€ FMV", "Units", "Tax Rate",
        "Total Liability", "Total Amount of Gain Made on Share Option", "RTSO to be paid by", "days left to pay",
        "FORM 11: Enter total chargeable amount", "FORM 11: Enter the amount of Relevant Tax on a Share Option (RTSO) paid"]

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

    //     const connectedEsppDepositRow = () => {
    //         console.log("^&^&^&^&^&")
    //         console.log(esppRowData)
    //         console.log("^&^&^&^&^& fin fin ")

    //         esppRowData && esppRowData.map((row) => {
    //             return(  //TODO: remove index setting here and do it in esppDepostRow directly from row.id Prop? 
    //             <EsppDepositRow2 row={row} index={row.id}/>
    //             )
    //             }
    // )} //map //connected 
    function groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
             const key = keyGetter(item);
             const collection = map.get(key);
             if (!collection) {
                 map.set(key, [item]);
             } else {
                 collection.push(item);
             }
        });
        return map;
    }
    const grouped = groupBy(esppRowData, row => moment(row.date).format("YYYY"));
    const keysGrouped = Array.from(grouped.keys())
    // const mapentries = Array.from(grouped.entries())
    const mapentries = Array.from(grouped.entries())


    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Year Group</th>
                    {/* <th>#</th> */}
                    {headers.map((heading, index) => (
                        <th key={index}>{heading}</th>
                    ))}
                </tr>
            </thead>

            {mapentries.map( entry => <EsppYearGroup key={entry[0]} year={entry[0]} esppRowData={entry[1]}/>)}
                {/* <EsppList/> */}
                {/* {connectedEsppDepositRow()} */}



        </Table>)
}