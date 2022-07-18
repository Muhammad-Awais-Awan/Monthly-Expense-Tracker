import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  // ------------------OR
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //OR
    // react schedule the state update, dont do it instantly and if your state update depends on previous state then use the lower way of setting state in one state approach.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    setIsClicked(false);
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };
  let renderForm = (
    <button
      onClick={() => {
        setIsClicked(true);
      }}
    >
      Add New Expense
    </button>
  );

  if (isClicked) {
    renderForm = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </form>
    );
  }

  return <div>{renderForm}</div>;
}
