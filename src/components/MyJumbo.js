import React, {Fragment} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';


export default function MyJumbo() {


  return (
    <Fragment >
      <Jumbotron>
        <h1 style={{textAlign: "center"}}>Manual ESPP calculator</h1>
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