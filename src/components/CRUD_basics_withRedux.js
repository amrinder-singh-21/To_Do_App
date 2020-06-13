import React from "react";
import { useState } from "react";
import { dataEntry, removeData, editData } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";

function CRUD_basics_withRedux() {

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
  const buttonClick = () => {
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

  //customized button style
  const button = {
    width: "40%",
  };

  return (
    <div>
      <div className="subContainer">
        <h2>Type in a new Name below:</h2>

        <input type="text" value={input} onChange={handleChange}></input>
        <br></br>
        <button type="button" onClick={buttonClick} disabled={!input}>
          Submit
        </button>
      </div>
      <div className="subContainer">
        <h2> Name Entries:- </h2>
        <hr></hr>
        <div>
        { data.length == 0 ? "no data Found. You may type in the text box given above ":""}
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
               
                  <b><span style={{fontSize:"1.5em solid"}}>{value} </span></b>
                  <br></br>
                  <button
                    type="submit"
                    onClick={() => removeItem(value)}
                    style={button}
                  >
                    delete
                  </button>
                  <button
                    type="submit"
                    onClick={() => editItem(value, index)}
                    style={button}
                  >
                    Edit
                  </button><hr></hr>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CRUD_basics_withRedux;
