import React from "react";
import "./App.css";
// import LifecycleEx from "./components/chapter1/R008_LifecycleEx";
// import Es6 from "./components/chapter1/R009_Es6";
// import SpreadOperator from "./components/chapter1/R011_SprSeadOperator";
// import ClassPrototype from "./components/chapter1/R012_ClassPrototype";
// import ForEach from "./components/chapter1/R014_ForEach";
// import Map from "./components/chapter1/R015_Map";
// import Jquery from "./components/chapter1/R016_Jquery";
// import Props from "./components/chapter2/R017_Props";
import PropsDatatype from "./components/chapter2/R018_PropsDatatype";

function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>HTML적용하기</p>
      {/* <LifecycleEx prop_value="FromApp.js" /> */}
      {/* <Es6 /> */}
      {/* <SpreadOperator/> */}
      {/* <ClassPrototype /> */}
      {/* <ForEach/> */}
      {/* <Map /> */}
      {/* <Jquery /> */}
      {/* <Props props_val="test text"/> */}
      <PropsDatatype
        String="react"
        Number={200}
        Boolean={1 == 1}
        Array={[0, 1, 8]}
        ObjectJson={{ react: "리액트", twohundred: "200" }}
        Function={console.log("FunctionProps : function!")}
      />
    </div>
  );
}

export default App;
