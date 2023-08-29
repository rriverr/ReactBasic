import React from "react";
import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [status, setStatus] = React.useState(false);
  const DeleteBtnHandler = () => {
    setStatus(true);
  };
  const ProceedBtnHandler = () => {
    setStatus(false);
  };
  let warn = null;
  if (status) {
    warn = (
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={ProceedBtnHandler}>Proceed</button>
      </div>
    );
  }
  return (
    <div>
      {warn}
      <button onClick={DeleteBtnHandler}>Delete</button>
    </div>
  );
}
