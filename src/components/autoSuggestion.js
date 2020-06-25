import React from "react";

const AutoSuggestion = ({ toDo }) => {
  return (
    <div>
      <div className="subContainer">
        <button type="submit" className="buttonStyle" onClick={toDo}>
          What-To-Do
        </button>
      </div>
    </div>
  );
};

export default AutoSuggestion;
