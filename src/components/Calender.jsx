import React, { useState } from 'react';
import './CSS/Calender.css'
const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const days = [];

  for (let x = firstDayIndex; x > 0; x--) {
    days.push(<div key={`prev-${x}`} className="empty"></div>);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <div key={i} className="day">
        {i}
      </div>
    );
  }

  for (let y = lastDayIndex; y < 6; y++) {
    days.push(<div key={`next-${y}`} className="empty"></div>);
  }

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>{'<'}</button>
        <h1>
          {months[date.getMonth()]} {date.getFullYear()}
        </h1>
        <button onClick={nextMonth}>{'>'}</button>
      </div>
      <div className="weekdays">
        {weekdays.map(day => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="days">{days}</div>
    </div>
  );
};

export default Calendar;
