import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
//import { Button } from 'react-bootstrap';  //Less Ideal
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyHeader() {
    return (
        <Navbar bg="light" variant="light" fixed="top" id="myHeader" expand="lg">
            <Navbar.Brand style={{"margin-right":"3rem"}}href="#home">blap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Col style={{"display":"inline-block"}}> */}
                    <Nav.Link style={{"padding-right":"25px"}} href="#learn">Learn More</Nav.Link>
                    <Nav.Link style={{"padding-right":"25px"}} href="#features">Features</Nav.Link>
                    <Nav.Link style={{"padding-right":"25px"}} href="#pricing">Pricing</Nav.Link>
                    <Nav.Link style={{"padding-right":"25px"}} href="#testimonials">Testimonials</Nav.Link>
                    {/* </Col> */}
                </Nav>
                <div>
                <Button style={{ 'margin-right':'18px' }} variant="primary">Sign up</Button>
                </div>  
                <Form inline>
                    <Form.Group>
                        <div>
                            {/* <Form.Label>username/email</Form.Label> */}
                            {/* <Form.Text style={{'font-size':'60%'}} >username/email</Form.Text> */}
                            <Form.Control style={{ 'font-size': '.75rem' }} type="text" placeholder="username/email" className="mr-sm-2" />
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div>
                            {/* <Form.Label>password</Form.Label> */}
                            {/* <Form.Text style={{'font-size':'60%'}} >password</Form.Text> */}

                            <Form.Control style={{ 'font-size': '.75rem' }} type="text" placeholder="password" className="mr-sm-2" />
                        </div>
                    </Form.Group>
                    <Button style={{ 'font-size': '.75rem' }} variant="outline-info">Log In</Button>
                </Form>


                {/* <Button id='learnMore' background-color="grey">BS Button</Button>
            <button id='createAccount'>create account</button> */}
            </Navbar.Collapse>
        </Navbar>
    );
}


// //works
//  export default function MyHeader() {
//     return(<div id='myHeader'> sup </div>);
// }


// const MyHeader = () =>  {
//     return(<div id='myHeader'> sup </div>);
// }

// export default MyHeader



// // src/id.js

// import React from 'react'

// function Title() {
//     return (
//         <div>
//             <h1>SFPOPOS</h1>
//         </div>
//     )
// }
