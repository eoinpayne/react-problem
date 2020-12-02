import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyHeaderBare() {
    return (
        <Navbar bg="light" variant="light" fixed="top" id="myHeader" expand="lg">
            <Navbar.Brand style={{"margin-right":"3rem"}}href="https://simplecgt.com">simplecgt.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
