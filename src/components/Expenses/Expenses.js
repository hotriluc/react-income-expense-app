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

    return (
        <Card className='expenses'>
            <p>{filteredYear}</p>
            <ExpensesFilter selected={filteredYear} onYearFilterChange={yearFilterChangeHandler} />
            {props.items.map( expense =>
                <ExpenseItem
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />
            )}
        </Card>
    )
}

export default Expenses;