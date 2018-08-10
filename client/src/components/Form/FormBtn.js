import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "middle", marginBottom: 10 }}>
    {props.children}
  </button>
);
