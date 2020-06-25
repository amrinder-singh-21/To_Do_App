import React from "react";

const CreateOptions = ({ input, handleChange, formSubmit }) => {
  return (
    <div>
      <div className="subContainer">
        <h2>Type a new Entry below:</h2>
        <form onSubmit={formSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            minLength="5"
            required
          ></input>
          <br></br>
          <button type="submit">Click here to make entry</button>
        </form>
        <div className="buttons"></div>
      </div>
    </div>
  );
};

export default CreateOptions;
