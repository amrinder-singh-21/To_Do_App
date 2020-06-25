import React, { useState } from "react";
import ReadOptions from "./readOptions";
import DeleteAllOptions from "./deleteAllOptions";
import AutoSuggestion from "./autoSuggestion";
import CreateOptions from "./createOptions";

function FullApplication() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [index, setIndex] = useState("");
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  //Adding Data
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    data.push(input);
    setInput("");
  };

  //toDo
  const toDo = () => {
    setIsEdit(false);
    if (data.length == 0) {
      alert("you have nothing to do in the List");
    } else
      alert(
        `you have total ${data.length} tasks.\nBut Please do '${
          data[Math.floor(Math.random() * data.length)]
        }' first.`
      );
  };

  //Remove all items
  const removeAllItems = () => {
    setIsEdit(false);
    setData([]);
  };

  //Removing single item
  const removeSingleItem = (value) => {
    setIsEdit(false);
    const newData = data.filter((values) => {
      return values !== value;
    });
    setData(newData);
  };

  //Updating Items

  const editItem = (value, index) => {
    setIsEdit(true);
    setIndex(index);
    setValue(value);
    console.log("value", value, "index--", index);
  };
  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const saveItem = (value, index) => {
    setIsEdit(false);
    data[index] = value;
  };

  return (
    <div>
      <h3>
        Assignment by:- <code>Recraft Relic</code>
      </h3>
      <h3>
        Done by:- <code>Amrinder Singh</code>
      </h3>
      <div className="container">
        <div>
          <CreateOptions
            input={input}
            handleChange={handleChange}
            formSubmit={formSubmit}
          ></CreateOptions>
          <AutoSuggestion toDo={toDo}></AutoSuggestion>
          <DeleteAllOptions removeAllItems={removeAllItems}></DeleteAllOptions>
        </div>
        <div>
          <ReadOptions
            data={data}
            values={value}
            valueHandler={valueHandler}
            index={index}
            isEdit={isEdit}
            removeSingleItem={removeSingleItem}
            editItem={editItem}
            saveItem={saveItem}
          ></ReadOptions>
        </div>
      </div>
    </div>
  );
}

export default FullApplication;
