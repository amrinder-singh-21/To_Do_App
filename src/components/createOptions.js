import React from "react";

const CreateOptions = ({ input, isEdit, saveItem, handleChange, formSubmit }) => {
  const style={
    backgroundColor:"rgba(255,0,0,0.5)"
  }
  return (
    <div>
      <div className="subContainer">
        <h2>Type a new Entry below:</h2>
        <form onSubmit={isEdit? saveItem : formSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            minLength="5"
            required
          ></input>
          <br></br>
          <button type="submit" style={isEdit ? style : null}>{isEdit ? "Save changes" : "Click here to make entry"}</button>
        </form>
        <div className="buttons"></div>
      </div>
    </div>
  );
};

export default CreateOptions;
