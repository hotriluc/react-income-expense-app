
function CalendarItem(props) {
    console.log(props)
    const month = props.date?.toLocaleString('en-GB', {month: 'long'}) ?? '1';
    const day = props.date?.toLocaleString('en-GB', {day: '2-digit'}) ?? 'default';
    const year = props.date?.getFullYear() ?? 'defaultYear'

    return (
    <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
    </div>
    )
}

export default CalendarItem;