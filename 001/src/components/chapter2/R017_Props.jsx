import React from "react";

class R017_Props extends React.Component {
  render() {
    let props_value = this.props.props_val;
    props_value += " from App.jsx";
    return <div>{props_value}</div>;
  }
}


export default R017_Props;