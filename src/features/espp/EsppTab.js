import React, { useState, useEffect, useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

import EsppDepositRow2 from "./EsppDepositRow2flux";

// export default function EsppTab({ key, espprowdata, bloop, ...props }) {
export default function EsppTab({ myProps, ...props }) {
  const EsppTabPane = function (props) {
    const [totalLiab, setTotalLiab] = useState(0);
    const [totalAmountGain, setTotalAmountGain] = useState(0);
    //outer
    const calcTotalLiab = (esppState, props) => {
      const filteredRows = esppState.filter((currentRow) =>
        moment(currentRow.date).isSame(moment(props.rows[0].date), "year")
      );

      const { tempTotalLiab, tempTotalAmountGain } = filteredRows.reduce(
        (
          { tempTotalLiab, tempTotalAmountGain },
          { totalLiab, amountGain }
        ) => ({
          tempTotalLiab: tempTotalLiab + totalLiab,
          tempTotalAmountGain: tempTotalAmountGain + amountGain,
        }),
        { tempTotalLiab: 0, tempTotalAmountGain: 0 }
      );

      setTotalLiab(tempTotalLiab);
      setTotalAmountGain(tempTotalAmountGain);
    };

    const esppState = useSelector((state) => state.espp);

    const updateTotalLiab = useEffect(() => {
      calcTotalLiab(esppState, props);
    }, [esppState]);

    return (
      <Tab.Pane eventKey={props.key}>
        <Table
          style={{
            display: "block",
            overflow: "auto",
            "font-family": "sans-serif",
            "font-weight": "250",
            "margin-bottom": "-15px",
          }}
        >
          <thead>
            {myProps.headers.map((heading, index) => (
              <th
                style={{
                  "min-width": "85px",
                  border: "none",
                  "font-family": "sans-serif",
                  color: "#7c858e",
                  "font-weight": "540",
                }}
                key={index}
              >
                {heading}
              </th>
            ))}
          </thead>

          {props.rows.map((row) => (
            <EsppDepositRow2 row={row} key={row.date} />
          ))}
        </Table>

        <hr class="rounded" />

        <Card
          style={{
            "border-radius": ".5rem",
            "box-shadow": "0 2px 4px 0 rgba(0,0,0,.05)",
            "margin-top": "-23px",
          }}
        >
          <Card.Header as="h4">For Form 11</Card.Header>
          <Card.Body>
            <Card.Title as="h6">Total chargeable amount</Card.Title>
            <Card.Text>{totalAmountGain.toFixed(2)}</Card.Text>
            <Card.Title as="h6">
              Relevant Tax on a Share Option (RTSO) paid
            </Card.Title>
            <Card.Text>{totalLiab.toFixed(2)}</Card.Text>
            <footer className="blockquote-footer">
              Numbers summed on a <cite>per year</cite> basis
            </footer>
          </Card.Body>
        </Card>
      </Tab.Pane>
    );
  };
  return (
    <Fragment>
      {myProps.mapentries.map((entry) =>
        EsppTabPane({ key: entry[0], rows: entry[1] })
      )}
    </Fragment>
  );
}
