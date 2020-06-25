import React from "react";

const DataList = ({ value, index, editItem, removeSingleItem, isEdit }) => {
  //customized button style
  const button = {
    width: "40%",
    height: "30px",
  };

  return (
    <div>
      <b>
        <span style={{ fontSize: "1.5em solid" }}>{value} </span>
      </b>

      <br></br>
      <button
        type="submit"
        style={button}
        onClick={() => removeSingleItem(value)}
      >
        Delete
      </button>
      <button
        type="submit"
        style={button}
        onClick={() => editItem(value, index)}
      >
        {isEdit ? "being Edited" : "Edit"}
      </button>
    </div>
  );
};

export default DataList;
