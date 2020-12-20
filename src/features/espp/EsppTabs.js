import React, { useState, useEffect, useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import EsppTab from "./EsppTab";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function EsppTabs(props) {
  const currentYear = moment().format("YYYY");
  const [key, setKey] = useState(currentYear);

  const esppState = useSelector((state) => state.espp);

  return (
    <Card style={{"border-radius":".5rem", "box-shadow": "0 2px 4px 0 rgba(0,0,0,.05)"}}>
        

    <Tab.Container
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
        <Card.Header>
          <Nav variant="tabs" style={{ "border-bottom": "0px" }}>
            {props.mapentries.map((entry) => (
              <Nav.Item>
                <Nav.Link eventKey={entry[0]}>{entry[0]}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          </Card.Header>

          <Card.Body>
          <Tab.Content animation>
            {EsppTab({ myProps: props })}
          </Tab.Content>
          </Card.Body>
    </Tab.Container>
    </Card>

  );
}