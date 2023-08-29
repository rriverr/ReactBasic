import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./css/ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = <p>No Expenses found.</p>;
  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expenses. </h2>;
  }
  return (
    <ul className="expenses-list">
      {props.data.map((item, i) => {
        return (
          <ExpenseItem
            key={item.title}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
