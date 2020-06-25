import React from "react";

const DeleteAllOptions = ({ removeAllItems }) => {
  return (
    <div>
      <div className="subContainer">
        <button type="submit" className="buttonStyle" onClick={removeAllItems}>
          Remove All Items
        </button>
      </div>
    </div>
  );
};

export default DeleteAllOptions;
