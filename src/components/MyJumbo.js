import React, {Fragment} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';


export default function MyJumbo() {


  return (
    <Fragment >
      <Jumbotron style={{"margin-top":"65px", "padding": "1rem", "border": "2px solid rgba(0,0,0,.125", "border-radius":".5rem", "background-color":"#FFFFFF", "font-family": "sans-serif"}}>


        <h2 style={{textAlign: "center"}}>Manual ESPP calculator</h2>
        <h5 style={{textAlign: "center"}}>
        RTSO1 tax for ESPP now automatically calculated using Morgan Stanley export file when logged in.
        </h5>
        <p style={{textAlign: "center"}}> This is a manual tool for any one who doesn't want to use the main site.</p>
        {/* <p> */}
          {/* <Button variant="primary">Go to CGT dashboard</Button> */}
        {/* </p> */}
      </Jumbotron>
    </Fragment>
  );
}