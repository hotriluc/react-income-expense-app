import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.scss'


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {...enteredExpenseData, id: Math.random().toString()}
        props.onAddExpenseData(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;