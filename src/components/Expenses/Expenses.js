import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.scss'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022')

    const yearFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter( (expense) => expense.date.getFullYear() === parseInt(filteredYear))

   
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onYearFilterChange={yearFilterChangeHandler} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;