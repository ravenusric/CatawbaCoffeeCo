import React from "react";

export const FormBtn = props => (
  <button {...props} onClick="handleFormSubmit" style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>
);
