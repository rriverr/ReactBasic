import React from "react";

class R015_Map extends React.Component {
  componentDidMount() {
    const Map_Arr = [3, 2, 8, 8];
    const Map_newArr = Map_Arr.map((x) => x);
    console.log("1. Map_newArr : [" + Map_newArr + "]");

    const Map_mulitiArr = Map_Arr.map((x) => x * 2);
    console.log("2. Map_mulitiArr : [" + Map_mulitiArr + "]");

    const ObjArray = [
      { key: "react", value: "200" },
      { key: "리액트", value: "TwoHundred" },
    ];
    const Map_ObjArr = ObjArray.map((obj, index) => {
      console.log(index + 3 + ". obj : " + JSON.stringify(obj));
      const Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });
    console.log("5. Map_objArr : " + JSON.stringify(Map_ObjArr));
  }

  render() {
    return <h2>[THIS IS Map]</h2>;
  }
}

export default R015_Map;
