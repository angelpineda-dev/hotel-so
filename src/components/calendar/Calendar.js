import { useEffect, useRef, useState } from "react";
import { useDatePicker } from "../../hooks/datepicker";
import CalendarMonth from "./CalendarMonth";

const Calendar = () => {
  const { firstMonth, secondMonth, date, getInputDate } = useDatePicker();
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState("");

  const refInputStart = useRef();
  const refInputEnd = useRef();

  const handleFocus = (e) => {
    refInputStart.current.classList.remove("selected");
    refInputEnd.current.classList.remove("selected");

    e.target.classList.add("selected");
  };

  const handleDate = (year, month, day) => {
    let date = getInputDate(year, month, day);

    if (refInputStart.current.classList.contains("selected")) {
      setStartDate(date);
      refInputStart.current.classList.remove("selected");
      refInputEnd.current.classList.add("selected");
    } else if (refInputEnd.current.classList.contains("selected")) {
      setEndDate(date);

      refInputEnd.current.classList.remove("selected");
    }
  };

  return (
    <article className="calendar">
      <header className="calendar__header">
        <div onClick={handleFocus} ref={refInputStart}>
          <label htmlFor="startDate">Fecha de entrada</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div onClick={handleFocus} ref={refInputEnd}>
          <label htmlFor="endDate">Fecha de entrada</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </header>
      <section className="calendar__container">
        <nav className="calendar__container-nav">
          <button className="calendar__container-nav-btn ">Prev</button>
          <h2 className="calendar__container-nav-title">{firstMonth.year}</h2>
          <button className="calendar__container-nav-btn ">Next</button>
        </nav>
        <article className="calendar__container-body">
          <CalendarMonth data={firstMonth} handleDate={handleDate} />
          <CalendarMonth data={secondMonth} handleDate={handleDate} />
        </article>
      </section>
    </article>
  );
};

export default Calendar;
