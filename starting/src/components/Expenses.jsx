import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./css/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./newexpenses/ExpenseFilter";

const Expenses = (props) => {
  // const expenses = props.data;
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const onFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No Expenses found.</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((item, i) => {
  //     return (
  //       <ExpenseItem
  //         key={item.title}
  //         id={item.id}
  //         title={item.title}
  //         amount={item.amount}
  //         date={item.date}
  //       />
  //     );
  //   });
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={onFilter} />
      {/* {expenses.map((item, i) => {
        if (item.date.getFullYear().toString() === filteredYear) {
          return (
            <ExpenseItem
              key={item.title}
              id={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        }
      })} */}
      {filteredExpenses.length === 0 && <p>No Expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((item, i) => {
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
      {/* <ExpenseItem
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        id={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        id={expenses[3].id}
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;
