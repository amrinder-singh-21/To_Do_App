import React from "react";
import { useState } from "react";
import { dataEntry, removeData, editData, removeAll } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";

function To_Do_App() {
  const [input, setInput] = useState("");
  const [index, setIndex] = useState("");
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  //Adding Items
  const formSubmit = (e) => {
    e.preventDefault();
    data.push(input);
    dispatch(dataEntry(data));
    setInput("");
  };

  //Deleting items
  const removeItem = (value) => {
    setIsEdit(false);
    const newData = data.filter((values) => {
      return values !== value;
    });
    dispatch(removeData(newData));
  };

  //Updating Items
  const editItem = (value, index) => {
    setIsEdit(true);
    setIndex(index);
    setValue(value);
  };

  const saveItem = (value, index) => {
    setIsEdit(false);
    data[index] = value;
    dispatch(editData(data));
  };

  //Remove all items
  const removeAllItems = () => {
    const remove = [];
    dispatch(removeAll(remove));
  };

  //toDo
  const toDo = () => {
    if (data.length == 0) {
      alert("you have nothing to do in the List");
    } else alert(`you have total ${data.length} tasks.\nBut Please do '${data[Math.floor(Math.random() * data.length)]}' first.`);
  };

  //customized button style
  const button = {
    width: "40%",
    height : "30px"
  };

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
        <div className="buttons">
       
        <button type="submit" className="buttonStyle" onClick={toDo}>
          What-To-Do
        </button>
        <button type="submit" className="buttonStyle"  onClick={removeAllItems}>
        Remove All Items
      </button>
        </div>
      </div>
      <div className="subContainer">
        <h2> Entries:- </h2>
        <hr></hr>
        <div>
          {data.length == 0
            ? <div>no data Found. <br></br><br></br>You may type in the text box given above to start</div>
            : ""}
          {isEdit && (
            <div>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              ></input>
              <button type="submit" onClick={() => saveItem(value, index)}>
                save
              </button>
            </div>
          )}
          <div>
            <ol>
              {data.map((value, index) => (
                <li key={index}>
                  <b>
                    <span style={{ fontSize: "1.5em solid" }}>{value} </span>
                  </b>
                  <br></br>
                  <button
                    type="submit"
                    onClick={() => removeItem(value)}
                    style={button}
                  >
                    Delete
                  </button>
                  <button
                    type="submit"
                    onClick={() => editItem(value, index)}
                    style={button}
                  >
                    Edit
                  </button>
                  <hr></hr>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default To_Do_App;
