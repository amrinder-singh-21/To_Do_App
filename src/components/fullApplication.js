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
    setData([...data,input])
    setInput("");
  };

  //toDo
  const toDo = () => {
    setIsEdit(false);
    setInput('')
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
    setInput('')
  };

  //Removing single item
  const removeSingleItem = (value) => {
    setIsEdit(false);
    setInput('')
    const newData = data.filter((values) => {
      return values !== value;
    });
    setData(newData);
  };

  //Updating Items

  const editItem = (value, index) => {
    setIsEdit(true);
    setIndex(index);
    //setValue(value);
    setInput(value);
    console.log("value", value, "index--", index);
  };
  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const saveItem = (e) => {
    e.preventDefault();
    data[index] = input;
    setIsEdit(false);
    setInput('')
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
            isEdit={isEdit}
            saveItem={saveItem}
            handleChange={handleChange}
            formSubmit={formSubmit}
          ></CreateOptions>
          <AutoSuggestion toDo={toDo}></AutoSuggestion>
          <DeleteAllOptions removeAllItems={removeAllItems}></DeleteAllOptions>
        </div>
        <div>
          <ReadOptions
            data={data}
            removeSingleItem={removeSingleItem}
            editItem={editItem}
            isEdit={isEdit}
          ></ReadOptions>
        </div>
      </div>
    </div>
  );
}

export default FullApplication;
