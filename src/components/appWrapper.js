import React from "react";
import To_Do_App from "./to_Do_App";

const AppWrapper = () => {
  return (
    <div>
      <h4>
        Assignment by:- <code>Recraft Relic</code>
      </h4>
      <h3>
        Done by:- <code>Amrinder Singh</code>
      </h3>
      <hr></hr>
      <div className="container">
        <To_Do_App></To_Do_App>
      </div>
    </div>
  );
};

export default AppWrapper;
