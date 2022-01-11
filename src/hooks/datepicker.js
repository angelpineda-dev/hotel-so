import { useEffect, useState } from "react";

/* config */
const dateObj = new Date();
const oneDay = 60 * 60 * 24 * 1000;
const todayTimestamp =
  Date.now() -
  (Date.now() % oneDay) +
  new Date().getTimezoneOffset() * 60 * 1000;

const monthsMap = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const initialDate = {
  today: dateObj.getDate(todayTimestamp),
  monthName: monthsMap[dateObj.getMonth()],
  month: dateObj.getMonth(),
  year: dateObj.getFullYear(),
  weekIndex: new Date(dateObj.getFullYear(), dateObj.getMonth()).getDay(),
};

const initialMonth = {
  monthName: "",
  month: 0,
  year: 0,
  weekIndex: 0,
  numberDays: [],
};

function getInputDate(year, month, day) {
  month++;

  if (day < 10) {
    day = `0${day}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  return `${year}-${month}-${day}`;
}

function getNumberOfDays(month, year) {
  let days = 40 - new Date(year, month, 40).getDate();
  const numberDays = [];

  for (let day = 1; day <= days; day++) {
    numberDays.push(day);
  }

  return numberDays;
}

function getMonthFirstDay(month, year) {
  return new Date(year, month).getDay();
}

function getMonthData(month, year) {
  let weekIndex = getMonthFirstDay(month, year);
  let numberDays = getNumberOfDays(month, year);

  return {
    monthName: monthsMap[month],
    month,
    year,
    weekIndex,
    numberDays,
  };
}

function getNextMonth(month, year) {
  let nextMonth = month + 1;
  let nextYear = year;

  if (nextMonth > 11) {
    nextMonth = 0;
    nextYear += 1;
  }

  return getMonthData(nextMonth, nextYear);
}

function getPrevMonth(month, year) {
  let nextMonth = month - 1;
  let nextYear = year;

  if (nextMonth < 0) {
    nextMonth = 11;
    nextYear -= 1;
  }

  return getMonthData(nextMonth, nextYear);
}

export const useDatePicker = () => {
  /* states */
  const [currentDate] = useState(initialDate);
  const [firstMonth, setFirstMonth] = useState(initialMonth);
  const [secondMonth, setSecondMonth] = useState(initialMonth);
  const [date] = useState(
    getInputDate(currentDate.year, currentDate.month, currentDate.today)
  );

  function next() {
    let { ...data1 } = getNextMonth(firstMonth.month, firstMonth.year);

    setFirstMonth(data1);

    let { ...data2 } = getNextMonth(secondMonth.month, secondMonth.year);

    setSecondMonth(data2);
  }

  function prev() {
    let { ...data1 } = getPrevMonth(firstMonth.month, firstMonth.year);

    setFirstMonth(data1);

    let { ...data2 } = getPrevMonth(secondMonth.month, secondMonth.year);

    setSecondMonth(data2);
  }

  useEffect(() => {
    const { ...data } = getMonthData(currentDate.month, currentDate.year);

    setFirstMonth(data);

    const { ...data2 } = getNextMonth(currentDate.month, currentDate.year);

    setSecondMonth(data2);
  }, [currentDate]);

  return {
    date,
    currentDate,
    getInputDate,
    firstMonth,
    secondMonth,
    next,
    prev,
  };
};
