import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const saveExpenseDatHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData ={saveExpenseDatHandler} />
    </div>
  );
};

export default NewExpense;
