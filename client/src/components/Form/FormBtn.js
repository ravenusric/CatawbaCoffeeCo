import React from "react";

export const FormBtn = props => (
  <button {...props} onClick="handleFormSubmit" style={{ float: "middle", marginBottom: 10 }}>
    {props.children}
  </button>
);
