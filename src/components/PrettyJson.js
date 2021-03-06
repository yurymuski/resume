import React from "react";

import PrettyJsonObject from "./PrettyJsonObject";

import "./PrettyJson.css";

// TODO extract PrettyJsonArray
// or use react-json-view or smth like that
export default ({ array }) => (
  <ul className="pretty-json">
    <li>[</li>
    <li>
      <ul className="row">
        {Array.isArray(array) &&
          array.map((item, index) => (
            <PrettyJsonObject key={index} object={item} />
          ))}
      </ul>
    </li>
    <li>]</li>
  </ul>
);
