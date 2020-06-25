import React from "react"; 
import DataList from "./dataList";

const ReadOptions = ({
  data,
  editItem,
  removeSingleItem,
  isEdit
}) => {
  
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
         
          <div>
            <ol>
              {data.map((value, index) => (
                <li key={index}>
                  <DataList value={value} index={index} editItem={editItem} removeSingleItem={removeSingleItem} isEdit={isEdit}/>
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
