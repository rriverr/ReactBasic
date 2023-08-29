import React from "react";
import "./css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = React.useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
