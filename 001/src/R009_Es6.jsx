import React from "react";

class R009_Es6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const jsString1 = "자바스크립트";
    const jsString2 = "입니다\n다음 줄입니다.";
    console.log(jsString1 + " 문자열" + jsString2 + "~");

    const Es6String1 = "ES6";
    const Es6String2 = "입니다";

    console.log(`${Es6String1} 문자열${Es6String2}!!
    ____다음 줄입니다.`)

    const longString = "ES6에 추가된 String 함수들입니다.";
    console.log("startWith : "+longString.startsWith("ES6에 추가"));
    console.log("endWith : "+longString.endsWith("함수들입니다."));
    console.log("includes : "+longString.includes("추가된 String"));
  }

  render() {
    return (
      <h2>[THIS IS ES6 STRING]</h2>
    )
  }
}


export default R009_Es6;