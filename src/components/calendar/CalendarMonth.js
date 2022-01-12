import { useEffect } from "react";
import { useState } from "react";

const CalendarMonth = ({ data, handleDate, currentDate, refMonth }) => {
  let { month, monthName, year, numberDays, weekIndex } = data;

  const [monthDays, setMonthDays] = useState([]);

  const occupiedDates = [
    {
      id: "a1",
      startDate: {
        day: 15,
        month: 0,
        yaer: 2022,
      },
      endDate: {
        day: 22,
        month: 0,
        year: 2022,
      },
    },
    {
      id: "a2",
      startDate: {
        day: 29,
        month: 0,
        yaer: 2022,
      },
      endDate: {
        day: 5,
        month: 1,
        year: 2022,
      },
    },
    {
      id: "a3",
      startDate: {
        day: 9,
        month: 1,
        yaer: 2022,
      },
      endDate: {
        day: 13,
        month: 1,
        year: 2022,
      },
    },
    {
      id: "a4",
      startDate: {
        day: 2,
        month: 4,
        yaer: 2022,
      },
      endDate: {
        day: 7,
        month: 4,
        year: 2022,
      },
    },
  ];

  useEffect(() => {
    const days = numberDays.map((day) => {
      for (let i = 0; i < occupiedDates.length; i++) {
        const { startDate, endDate } = occupiedDates[i];

        if (
          month === startDate.month &&
          month === endDate.month &&
          day >= startDate.day &&
          day <= endDate.day
        ) {
          return <button className="day-occupied">{day}</button>;
        } else if (
          month === startDate.month &&
          month < endDate.month &&
          day >= startDate.day
        ) {
          return <button className="day-occupied">{day}</button>;
        } else if (
          month > startDate.month &&
          month === endDate.month &&
          day <= endDate.day
        ) {
          return <button className="day-occupied">{day}</button>;
        }
      }

      // indicar que dia es hoy.
      if (month === currentDate.month && day === currentDate.today) {
        return <button className="day-today">{day}</button>;
      }

      // deshabilitar días pasados
      if (month === currentDate.month && day < currentDate.today) {
        return <button className="day-disabled">{day}</button>;
      }

      return (
        <button onClick={(e) => handleDate(e, year, month, day)}>{day}</button>
      );
    });

    setMonthDays(days);
  }, [numberDays]);

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
        ref={refMonth}
      >
        {monthDays.map((day, idx) => (
          <li key={`${month}-${idx}`}>{day}</li>
        ))}
      </ul>
    </section>
  );
};

export default CalendarMonth;

/* 
  {numberDays.map((day) => {
          // indicar que dia es hoy.
          if (month === currentDate.month && day === currentDate.today) {
            return (
              <li key={`${month}-${day}`}>
                <button
                  onClick={(e) => handleDate(e, year, month, day)}
                  className="today"
                >
                  {day}
                </button>
              </li>
            );
          }

          // deshabilitar días pasados
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

          const occupiedDays = occupiedDates.map(
            ({ id, startDate, endDate }) => {
              if (
                month === startDate.month &&
                day >= startDate.day &&
                month === endDate.month &&
                day <= endDate.day
              ) {
                return (
                  <li key={`${month}-${day}`}>
                    <button
                      className="day-occupied"
                      onClick={(e) => handleDate(e, year, month, day)}
                    >
                      {day}
                    </button>
                  </li>
                );
              }
            }
          );

          console.log(occupiedDays);

          // días normales.
          return (
            <li key={`${month}-${day}`}>
              <button onClick={(e) => handleDate(e, year, month, day)}>
                {day}
              </button>
            </li>
          );
        })}

*/
