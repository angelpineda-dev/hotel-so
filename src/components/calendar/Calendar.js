import { useRef, useState, useEffect } from "react";
import { useDatePicker } from "../../hooks/useDatepicker";
import CalendarMonth from "./CalendarMonth";

const Calendar = () => {
  const {
    firstMonth,
    secondMonth,
    date,
    getInputDate,
    currentDate,
    next,
    prev,
  } = useDatePicker();
  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState("");

  const refInputStart = useRef();
  const refInputEnd = useRef();
  const refBtnPrev = useRef();
  const refContainer = useRef();
  const refFirstMonth = useRef();
  const refSecondMonth = useRef();

  useEffect(() => {
    if (firstMonth.month <= currentDate.month) {
      refBtnPrev.current.disabled = true;
    } else {
      refBtnPrev.current.disabled = false;
    }
  }, [firstMonth]);

  const handleFocus = (e) => {
    refContainer.current.classList.add("active");

    refInputStart.current.classList.remove("selected");
    refInputEnd.current.classList.remove("selected");

    e.target.classList.add("selected");
  };

  const handleDate = (e, year, month, day) => {
    let date = getInputDate(year, month, day);

    if (refInputStart.current.classList.contains("selected")) {
      let arrayLi = refFirstMonth.current.childNodes;

      arrayLi.forEach((li) => {
        if (li.firstChild.classList.contains("start-day")) {
          li.firstChild.classList.remove("start-day");
        }
      });

      e.target.classList.add("start-day");
      setStartDate(date);
      refInputStart.current.classList.remove("selected");
      refInputEnd.current.classList.add("selected");
    } else if (refInputEnd.current.classList.contains("selected")) {
      let arrayLi = refSecondMonth.current.childNodes;

      arrayLi.forEach((li) => {
        if (li.firstChild.classList.contains("end-day")) {
          li.firstChild.classList.remove("end-day");
        }
      });

      e.target.classList.add("end-day");
      setEndDate(date);

      refInputEnd.current.classList.remove("selected");
      /* TODO: Mostrar rango de días seleccionados entre el dia de inicio y fin */
    }
  };

  const handleCloseContainer = () => {
    refInputStart.current.classList.remove("selected");
    refInputEnd.current.classList.remove("selected");

    refContainer.current.classList.remove("active");
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
      <section className="calendar__container" ref={refContainer}>
        <nav className="calendar__container-nav">
          <button
            className="calendar__container-nav-btn "
            ref={refBtnPrev}
            onClick={prev}
          >
            Prev
          </button>
          <h2 className="calendar__container-nav-title">{firstMonth.year}</h2>
          <button className="calendar__container-nav-btn " onClick={next}>
            Next
          </button>
        </nav>
        <article className="calendar__container-body">
          <CalendarMonth
            data={firstMonth}
            handleDate={handleDate}
            currentDate={currentDate}
            refMonth={refFirstMonth}
          />
          <CalendarMonth
            data={secondMonth}
            handleDate={handleDate}
            currentDate={currentDate}
            refMonth={refSecondMonth}
          />
        </article>
        <button onClick={handleCloseContainer}>Aceptar</button>
      </section>
    </article>
  );
};

export default Calendar;
