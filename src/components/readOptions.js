import React from "react"; 

const ReadOptions = ({
  data,
  values,
  valueHandler,
  index,
  isEdit,
  editItem,
  saveItem,
  removeSingleItem,
}) => {
  //customized button style
  const button = {
    width: "40%",
    height: "30px",
  };

  return (
    <div>
      <div className="subContainer">
        <h2> Entries:- </h2>
        <hr></hr>
        <div>
          {data.length == 0 ? (
            <div>
              no data Found. <br></br>
              <br></br>You may type in the text box given above to start
            </div>
          ) : (
            ""
          )}
          {isEdit && (
            <div>
              <input type="text" value={values} onChange={valueHandler}></input>
              <button
                type="submit"
                onClick={() => {
                  saveItem(values, index);
                }}
              >
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
};

export default ReadOptions;
