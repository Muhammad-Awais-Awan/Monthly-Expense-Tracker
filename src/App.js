import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
function App() {
  const [expenses, setExpenses] = useState([]);
  const addExpenseHandler = (expense) => {
    // setExpenses([...expenses, expense]);// we can add this in that way but in this it depends on previous state so , it is not better way to do it
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
