import React from "react";

import CakeContainer from "./cakeContainer";
import HooksCakeContainer from "./hooksCakeContainer";
import ConditionalRedux from "./conditionalRedux";
import Users from "./users";
import Loops from "../react/loops";

const App = () => {
  const container = {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "rgb(150,255,0,0.5)",
    justifyContent: "space-around",
    width: "80%",
    margin: "auto",
    padding: "10px",
    boxShadow: "0px  0px 3px 3px #888888 ",
  };

  const div = {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    margin: "10px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0px  0px 3px 3px #888888",
  };

  return (
    <div style={container}>
      <div style={div}>
        <Users></Users>
      </div>

      <div style={div}>
        <ConditionalRedux cake></ConditionalRedux>
        <ConditionalRedux></ConditionalRedux>
      </div>

      <div style={div}>
        <CakeContainer></CakeContainer>
      </div>

      <div style={div}>
        <HooksCakeContainer></HooksCakeContainer>
      </div>
      <Loops></Loops>
    </div>
  );
};

export default App;
