import React from 'react';
import './ExpenseDate.scss'

function ExpenseDate(props) {
    const month = props.date?.toLocaleString('en-GB', {month: 'long'}) ?? '1';
    const day = props.date?.toLocaleString('en-GB', {day: '2-digit'}) ?? 'default';
    const year = props.date?.getFullYear() ?? 'defaultYear'

    return (
    <div className="expense-date">
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
        
    </div>
    )
}

export default ExpenseDate;