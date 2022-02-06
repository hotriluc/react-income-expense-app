import CalendarItem from './CalendarItem';
import './ExpenseItem.scss'

function ExpenseItem(props) {

    return (
    <div className="expense-item">
        <CalendarItem date={props.date}></CalendarItem>
        <div className="expense-item__description">
            <h2>{props.title ?? 'no title'}</h2>
            <div className="expense-item__price">{props.amount ?? '0'}</div>
        </div>
    </div>);
}

export default ExpenseItem