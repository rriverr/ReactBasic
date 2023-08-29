import React from "react";

import Todo from "./components/Todo";
import "./styles.css";

const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

// don't change the Component name "App"
export default function App() {
  return (
    <ul>
      {DUMMY_TODOS.map((item, i) => {
        return <Todo key={i} item={item}/>;
      })}
    </ul>
  );
}
