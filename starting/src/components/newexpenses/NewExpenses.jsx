import React from "react";
import '../css/NewExpenses.css'
import ExpenseForm from "./ExpenseForm";


const NewExpenses = (props) => {

  const onSaveExpenseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
    </div>
  );
}

export default NewExpenses;