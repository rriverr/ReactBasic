import React from "react";

import "./styles.css";
// don't change the Component name "App"
export default function App() {
  const onClickButton = () => {
    console.log("Stored!");
  }

  return <button onClick={onClickButton}>Bookmark</button>;
}
