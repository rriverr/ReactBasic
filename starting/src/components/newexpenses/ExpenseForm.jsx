import React from "react";
import "../css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState();
  const [date, setDate] = React.useState();
  // const [userInput, setUserInput] = React.useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput({...userInput, title: e.target.value});

    // setUserInput((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setUserInput({ ...userInput, amount: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // setUserInput({ ...userInput, date: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, date: e.target.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new_expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-10"
            max="2022-12-31"
            value={date || ''}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => {props.setOpen(false)}}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
