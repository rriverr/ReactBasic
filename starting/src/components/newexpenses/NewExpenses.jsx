import React from "react";
import "../css/NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const [open, setOpen] = React.useState(false);

  const onSaveExpenseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const btnHandler = () => {
    setOpen(true);
  };

  return (
    <div className="new-expense">
      {open ? (
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} setOpen={setOpen}/>
      ) : (
        <button onClick={btnHandler}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpenses;