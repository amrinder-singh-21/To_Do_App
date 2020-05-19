import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  asynFetchData,
  matchData,
  sortData,
  filterData,
} from "../redux/loops/actionLoop";

const Loops = () => {
  const [serch, setSerch] = useState("");
  const[cat, setCat]= useState("");
  const data = useSelector((state) => state.loop.data);
  const isInc = useSelector((state) => state.loop.isInc);
  const Datasorted = useSelector((state) => state.loop.sortedData);
  const Datafiltered = useSelector((state) => state.loop.filteredData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynFetchData());
  }, []);

  //console.log("data aftr", data);
  //console.log("type of data -", typeof data);

  //for of// loops through values of an iterable object
  const a = [{1:"12",22:"22"}]
         for(let values of a){
       //  console.log("values",values);
  }

 // for in // loops through properties of an object
 const b = {1:"12",22:"22"}
      for(let keys in b){
       //      console.log("keys",keys)
  }

    //object assigning
  const obj = [{ id: 56, name: "singh" }];
  const obj2 = Object.assign([...obj, ...data]);
 // console.log("object assign", obj2);

  const name = obj2.map((value) => value.name);
  // const checkData = () => {

  //     //setisInc(name.includes(serch));

  //         var isEvery = name.every(Serch => Serch === serch);
  //         console.log("isEvery",isEvery);

  //         var isSome = name.some(Serch => Serch === serch);
  //         console.log("isSome",isSome);

  //         console.log("isFind", name.find(Serch => Serch === serch ))
  // }
  //console.log("isInc", isInc);

  //prototyping of array
  // Array.prototype.ammy = function() {
  //     for (let i = 0; i < this.length; i++) {
  //       this[i] = this[i]+ "singh";
  //     }
  //   };
  //   name.ammy()
  //   console.log("amy",name )


//slicing string

  const container = {
    display: "flex",
    justifyContent: "space-between",
    width: "720px",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "rgba(240,240,230,1)",
    boxShadow: "0px  0px 3px 3px #888888 inset",
    padding: "10px",
  };
  const style = {
    width: "50%",
  };
  const innerDiv = {
    backgroundColor: "rgba(220,240,230,1)",
    padding: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
    marginBottom: "10px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0px  0px 3px 3px #888888",
  };

  return (
    <div style={container}>
      <div style={innerDiv}>
        <div id="div">
          <h3>Oject Assign (axios data + 1 object)</h3>
          <hr></hr>
          <ol>
            {obj2.map((value) => {
              return <li key={value.id}> {value.name}</li>;
            })}
          </ol>
        </div>
      </div>

      <div style={innerDiv}>
        <h3>Testing JS</h3>
        <hr></hr>
        <input
          type="text"
          placeholder="search..."
          value={serch}
          onChange={(e) => setSerch(e.target.value)}
          style={{ width: "95%" }}
        ></input>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={() => dispatch(matchData(name, serch))}
            style={style}
            disabled={!serch}
          >
            Is Match
          </button>
          <button onClick={() => dispatch(sortData(name))} style={style}>
            sort
          </button>
        </div>

        <h3>{isInc && "Match found"}</h3>
        {Datasorted != "" ? (
          <div>
            <h3>Sorted data</h3>
            <ol>
              {Datasorted.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ol>
          </div>
        ) : (
          ""
        )}
      </div>

      <div style={innerDiv}>
        <h3>Filter data</h3>
        <hr></hr>
        filter by post :
        <input
          type="radio"
          value={ cat }
          name="category"
          onChange={()=>setCat("post")}
          onClick={() => dispatch(filterData(data, cat))}
        ></input>
        <br></br>
        filter by need :
        <input
          type="radio"
          value={ cat }
          name="category"
          onChange={()=>setCat("need")}
          onClick={() => dispatch(filterData(data, cat))}
        ></input>
        {Datafiltered != "" ? (
          <div>
            <h3>Showing Data for <i>{cat}</i></h3>
            <ol>
              {Datafiltered.map((name, index) => (
                <li key={index}>{name.name}</li>
              ))}
            </ol>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Loops;
