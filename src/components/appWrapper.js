import React from "react";
import CRUD_basics_withRedux from './CRUD_basics_withRedux' 

const AppWrapper = () => {
  return (
    <div>
      <h4>Assignment by:- <code>ToXSL Tech.</code></h4>
      <h3>
        Done by:- <code>Amrinder Singh</code>
      </h3>
      
      <hr></hr>
      <div className="container">
        <CRUD_basics_withRedux></CRUD_basics_withRedux>
        
      </div>
    </div>
  );
};

export default AppWrapper;
