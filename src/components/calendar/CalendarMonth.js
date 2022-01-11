const CalendarMonth = ({ data, handleDate, currentDate }) => {
  let { month, monthName, year, numberDays, weekIndex } = data;

  return (
    <section className="calendar__container-body-month">
      <h3 className="calendar__container-body-month-title">{monthName}</h3>
      <ul className="calendar__container-body-month-weekdays grid-r1-c7">
        <li>D</li>
        <li>L</li>
        <li>M</li>
        <li>M</li>
        <li>J</li>
        <li>V</li>
        <li>S</li>
      </ul>
      <ul
        className="calendar__container-body-month-days grid-r6-c7"
        data-week-index={weekIndex}
      >
        {numberDays.map((day) => {
          if (month === currentDate.month && day === currentDate.today) {
            return (
              <li key={day}>
                <button
                  onClick={(e) => handleDate(e, year, month, day)}
                  className="today"
                >
                  {day}
                </button>
              </li>
            );
          }

          if (month === currentDate.month && day < currentDate.today) {
            return (
              <li key={`${month}-${day}`}>
                <button
                  onClick={(e) => handleDate(e, year, month, day)}
                  className="day-disabled"
                >
                  {day}
                </button>
              </li>
            );
          }

          return (
            <li key={day}>
              <button onClick={(e) => handleDate(e, year, month, day)}>
                {day}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CalendarMonth;
