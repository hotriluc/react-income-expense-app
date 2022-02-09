import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.scss'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('Updated')
    }

    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{title ?? 'no title'}</h2>
            <div className="expense-item__price">{props.amount ?? '0'}</div>
        </div>
        <button onClick={clickHandler}>button</button>
    </Card>);
}


export default ExpenseItem