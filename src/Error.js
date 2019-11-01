import React from "react";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div>&nbsp;</div>;
  }
  // if touched, and...
  if (message) {
    return <div className="error">{message}</div>;
  }
  // if no message, then...
  return <div className="noError">all good</div>;
};

export default Error;
