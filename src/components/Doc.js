import { useState, useEffect } from "react";
import Axios from 'axios';
import * as Heading from "./H1.js";
import "./../styles/Doc.css";
import axios from "axios";

export default function Doc() {
  // let doc
  // fetch(`http://localhost:5500/api/docs/${window.location.pathname.replace(/\/docs\//, '')}`)
  //   .then(res => res.json())
  //   .then(data => {doc = data})

  // const fetchDocs = async () => {
  //   const res = await fetch(
  //     `http://localhost:5500/api/docs/${window.location.pathname.replace(
  //       /\/docs\//,
  //       ""
  //     )}`
  //   );
  //   let data
  //   await res.json().then(res => data = res);

  //   return data;
  // };

  Axios.get('http://localhost:5500/api/docs/Getting started').then(res => {
    console.log(res);
  })

  useEffect(() => {

    // const doc = fetchDocs();

    // document.title = `${doc.title} | Porridge.js Documentation`;
  }, []);

  return <div className="container"></div>;
}
