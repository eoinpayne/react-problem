// import React, { useState, useEffect, useRef } from "react";
// import moment from "moment";
// import { updateESPPRow } from "../../js/actions/index";

// import { useSelector, useDispatch } from "react-redux";
// import { updateEsppRow, selectEspp } from "./esppSlice";

// import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
// // import fs from 'fs';
// // import fs from 'fs';
// import fetch from "node-fetch";
// import download from "downloadjs";

// import Form from "react-bootstrap/Row";
// import Modal from "react-bootstrap/Row";

// export default function GenerateModal(props) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleSubmit = () => {
//     modifyPdf()
//     setShow(false);
//   }


//   async function modifyPdf() {
//     debugger;
//     const url =
//       "https://cors-anywhere.herokuapp.com/https://www.revenue.ie/en/additional-incomes/documents/form-rtso1.pdf";
//     const existingPdfBytes = await fetch(url, {
//       method: "GET", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     }).then((res) => res.arrayBuffer());

//     const pdfDoc = await PDFDocument.load(existingPdfBytes);
//     //   const pdfDoc = await PDFDocument.load(fs.readFileSync('./form-rtso1.pdf'))

//     const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//     const pages = pdfDoc.getPages();
//     const firstPage = pages[0];
//     const { width, height } = firstPage.getSize();
//     firstPage.drawText(`${totalLiab}`, {
//       x: 5,
//       y: height / 2 + 300,
//       size: 50,
//       font: helveticaFont,
//       color: rgb(0.95, 0.1, 0.1),
//       // rotate: degrees(-45),
//     });
//     firstPage.drawText(`${amountGain}`, {
//       x: 500,
//       y: height / 2 + 300,
//       size: 50,
//       font: helveticaFont,
//       color: rgb(0.95, 0.1, 0.1),
//       // rotate: degrees(-45),
//     });

//     const pdfBytes = await pdfDoc.save();
//     download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");
//     // fs.writeFileSync('./newPDF.pdf',await pdfDoc.save())
//   }


//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           All fields optional, only used to further populate RTSO1 form. No information saved.

//           <Form>
//             <Form.Group controlId="formName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="name" placeholder="Enter Name" />
//               <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//               </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="formAddress">
//               <Form.Label>Address</Form.Label>
//               <Form.Control placeholder="Enter Address" />
//             </Form.Group>

//             <Form.Group controlId="formPPSN">
//               <Form.Label>Address</Form.Label>
//               <Form.Control  placeholder="Enter PPSN" />
//             </Form.Group>
//             <Form.Group controlId="formPPSN">
//               <Form.Label>PPSN</Form.Label>
//               <Form.Control placeholder="Enter PPSN" />
//             </Form.Group>

//             <Form.Group controlId="formAutoSignature">
//               <Form.Check type="checkbox" label="Auto Signature" />
//             </Form.Group>
            
//             <Button variant="primary" type="submit" onClick={handleSubmit}>
//               Generate RTSO1
//             </Button>
//           </Form>

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
