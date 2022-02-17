import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.scss'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022')

    const yearFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter( (expense) => expense.date.getFullYear() === parseInt(filteredYear))

    let expensesContent = <p>No expenses found</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map( (expense) =>
        <ExpenseItem
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
        />)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onYearFilterChange={yearFilterChangeHandler} />
            {expensesContent}
        </Card>
    )
}

export default Expenses;