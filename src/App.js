import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
function App() {
  const Dummy_Expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 20000,
      date: new Date(2021, 3, 28),
    },
    {
      id: "e2",
      title: "House Insurance",
      amount: 30000,
      date: new Date(2021, 4, 28),
    },
    { id: "e3", title: "Jobs", amount: 40000, date: new Date(2021, 5, 28) },
    { id: "e4", title: "Grocery", amount: 10000, date: new Date(2021, 6, 28) },
  ];
  const [expenses, setExpenses] = useState(Dummy_Expenses);
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
