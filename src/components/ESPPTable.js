import React, {useState, useRef, Fragment} from 'react';
import EsppDepositRow from './EsppDepositRow';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';

//WD specific and maintained.
//rows starting from 2018?  **component
//2 rows per year    **component

//date   //sale price$  //sale price€
//

//Share Deposit Dates       //Days until SDD
//!! Acquired Price $   !! Acquired Price €
//!! FMV Fair Market Value  $  /FMV €
//!! Units
//!! Tax Rate    46% | 48.5 | 52%"  drop down... conditionally select from income
//"ON RTSO1 form ""TOTAL LIABILITY"" RTSO to be paid withing 30 days of Vesting"	
//ON RTSO1 form "total amount of gain made on share option"
//RTSO to be paid by   //days left to pay

//FORM 11
//Enter total chargeable amount	
//Enter the amount of Relevant Tax on a Share Option (RTSO) paid

//income
//Gross Salary as of Share Deposit Date (ESPP end Period)	
//Total Gross Shares
//{Gross Income}

export default function EsppTable() {
  const esppDetails = [
    {
      date: "2017-11-30",
      acquiredPriceUSD: 83.63,
      acquiredPriceEUR: 70.29,
      fmvUSD: 103,
      fmvEUR: 86.57,
    },
    {
      date: "2018-05-31",
      acquiredPriceUSD: 85.44,
      acquiredPriceEUR: 73.07,
      fmvUSD: 130.96,
      fmvEUR: 112,
    },
    {
      date: "2018-11-30",
      acquiredPriceUSD: 107.34,
      acquiredPriceEUR: 94.83,
      fmvUSD: 164,
      fmvEUR: 144.89,
    },
    {
      date: "2019-05-31",
      acquiredPriceUSD: 142.63,
      acquiredPriceEUR: 127.37,
      fmvUSD: 204.12,
      fmvEUR: 182.28,
      units: 10,
    },
    {
      date: "2019-11-30",
      acquiredPriceUSD: 152.25,
      acquiredPriceEUR: 138,
      fmvUSD: 179.12,
      fmvEUR: 162.57,
      units: 10,
    },
    {
      date: "2020-05-31",
      acquiredPriceUSD: 146.14,
      acquiredPriceEUR: 131.45,
      fmvUSD: 183.43,
      fmvEUR: 164.99,
      units: 10,
    },
    {
      date: "2020-11-30",
      acquiredPriceUSD: 151.27,
      acquiredPriceEUR: 126.212,
      fmvUSD: 224.55,
      fmvEUR: 187.76,
      units: 10,
    },
  ];

  const headers = [
    "Share Deposit Date YYYY-MM-DD",
    "$ Acquired Price",
    "€ Acquired Price",
    "$ FMV",
    "€ FMV",
    "Units",
    "Tax Rate",
    "TOTAL LIABILITY",
    "total amount of gain made on share option",
    "RTSO to be paid by",
    "days left to pay",
    "FORM 11: Enter total chargeable amount",
    "FORM 11: Enter the amount of Relevant Tax on a Share Option (RTSO) paid",
  ];

  const TaxRateSelect = function () {
    return (
      <select name="taxRate" id="taxRate">
        <option value="52">52%</option>
        <option value="48.5">48.5%</option>
        <option value="46">46%</option>
      </select>
    );
  };

  // const [myState, setMystate] = useState([])
  const myRef = useRef([]);
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&      (*(*(*(*(    myRef");
  console.log(myRef);
  // [{id:1, value : 600}, {id:2, value: 100}, {id:3, value : 600}]

  const updateOuterState = (index, totalLiability) => {
    let myObj = [...myRef.current];
    // myobj = [{id:1, value : 600}, {id:2, value: 100}, {id:3, value : 600}]

    const row = myObj.find((currObj) => currObj.id === index);
    // const row = myObj.get(index);
    if (row) {
      row.totalLiability = totalLiability;
      console.log(` updated row baby = ${JSON.stringify(row)}`);
      console.log(` after baby -> myObj`);
      console.dir(myObj);
    } else {
      myObj.push({ id: index, totalLiability: totalLiability });
      //   console.log(` with new obj baby = ${JSON.stringify(myObj)}`)
      console.log(` else Obj new concat`);
      console.dir(myObj);
      // [{id:1, value : 600}, {id:2, value: 100}, {id:3, value : 600}, {}]
    }
    myRef.current = myObj;
    //[{id:1, value : 600}, {id:2, value: 100}, {id:3, value : 600}]
    // setMystate(myObj)
    return myObj;
  };

  // ()=>setCount(currentCount=> currentCount+1)

  // const rowby = esppDetails.map((row, index) => (
  //     <tr>
  //         <td>{index}</td>
  //         <td>{row.date}</td>
  //         <td>{row.acquiredPriceUSD}</td>
  //         <td>{row.acquiredPriceEUR}</td>
  //         <td>{row.fmvUSD}</td>
  //         <td>{row.fmvEUR}</td>
  //         <td>{row.units}</td>
  //         <TaxRateSelect/>
  //         {/* <td>{((row.fmvEUR-row.acquiredPriceEUR)*tax rate)*row.units)}</td> */}

  //     </tr>
  // ))

  return (
    <Fragment>
      <Jumbotron>
        <h1 style={{textAlign: "center"}}>Manual ESPP calculator</h1>
        <p style={{textAlign: "center"}}>
        This will be automated soon in with the main site, requiring you to just upload Morgan Staley export file. 
        </p>
        {/* <p> */}
          {/* <Button variant="primary">Go to CGT dashboard</Button> */}
        {/* </p> */}
      </Jumbotron>
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
          {esppDetails.map((row, index) => (
            // <EsppDepositRow row={row} index={index} updateOuterState = {updateOuterState} />
            <EsppDepositRow
              row={row}
              index={index}
              updateOuterState={updateOuterState}
              myStateRef={myRef}
            />
            // <EsppDepositRow row={row} index={index}/>
          ))}

          {/* {myRef[0]} */}

          {/* {rowby} */}
        </tbody>
      </Table>
    </Fragment>
  );
}