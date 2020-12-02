import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment'
import {connect} from 'react-redux'


export default function EsppDepositRow2(props) {

    const [units, setUnits] = useState(0);
    const [taxRate, setTaxRate] = useState(52);
    const [totalChargeableAmount, setTotalChargeableAmount] = useState(0);
    const [totalLiab, setTotalLiab] = useState(0);

    const handleUnitsChange = (event) => (
        setUnits(event.target.value) //no ()=> as not working with previou value, just replacing with new value
    )
    const handleTaxRateChange = (event) => (
        setTaxRate(event.target.value)
    )

    // const updateTotalLiab =  useEffect(() => {
    //     setTotalLiab(   ( (props.row.fmvEUR - props.row.acquiredPriceEUR) * (taxRate / 100)) * units  )
    //     },[units, taxRate]);


        // const updateTotalChargeable =  useEffect(() => {
        //     console.log("ref returned")
        //     const theRefReturned = props.updateOuterState(props.index, totalLiab)
        //     console.log("ref returned eND")
        //     console.log("propalopadoo -7087089-798")
        //     // console.dir(props.myStateRef.current.find((currObj) => currObj.id === props.index-1))
        //     console.dir(theRefReturned[0].totalLiability)
        //     console.log("propalopadoo -")
        //     const tempyPrev = props.index > 0 ? theRefReturned[props.index-1].totalLiability : theRefReturned[props.index].totalLiability
        //     // const prevLiab = props.myStateRef.current.find((currObj) => currObj.id === props.index-1);

        //     setTotalChargeableAmount( totalLiab + tempyPrev )
        // // setTotalChargeableAmount( totalLiab + props.myStateRef  )
        // },[totalLiab]);


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

    const calcTotalChargeableAmount = (props) =>{
        console.log("props !_!_!_!_")
        console.dir(props)
        return 6
    }
    const totalLiabilityRef = useRef()
    console.log("BOOM BITCHES")
    return (
        <tr>
            <td>{props.index}</td>
            <td>{moment(props.row.date).format("YYYY-MM-DD")}</td>  date
            <td>{props.row.acquiredPriceEUR}</td>
            <td>{props.row.fmvUSD}</td>
            <td>{props.row.fmvEUR}</td>
            <td ><input value={units} onChange={handleUnitsChange}></input></td>
            <td><TaxRateSelect onChange={handleTaxRateChange} /></td>

            {/* total liablilty */}
            <td id="totalLiability" ref={totalLiabilityRef}>{totalLiab}</td>
            {/* <td id="totalLiability" ref={totalLiabilityRef}>{((props.row.fmvEUR - props.row.acquiredPriceEUR) * (taxRate / 100)) * units}</td> */}
            {/* total amount of gain  */}
            <td id="amountGain">{(props.row.fmvEUR - props.row.acquiredPriceEUR) * units}</td>
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

