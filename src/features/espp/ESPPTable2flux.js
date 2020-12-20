import React, { useState, useRef, Fragment } from "react";
import { connect, useSelector } from "react-redux";
import moment from "moment";

import EsppTabs from "./EsppTabs";

export default function EsppTable2() {
  const headers = [
    "Deposit Date",
    "$ Acquired Price",
    "€ Acquired Price",
    "$ FMV",
    "€ FMV",
    "Units",
    "Tax Rate",
    "Total Liability",
    "Amount of Gain Made on S.O",
    "RTSO to be paid by",
    "days left to pay",
  ];

  const esppRowData = useSelector((state) => state.espp);

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

  const grouped = groupBy(esppRowData, (row) =>
    moment(row.date).format("YYYY")
  );

  const mapentries = Array.from(grouped.entries());

  return <EsppTabs mapentries={mapentries} headers={headers} />;
}
