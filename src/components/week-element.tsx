import React, { ReactNode } from "react";
import Week from "../model/week";
import DayElement from "./day-element";
import Day from "../model/day";

interface IWeekProps {
  week: Week;
}

const fillArrayWithEmptyDays = (length: number) => {
  const arr = new Array();
  for (let i = 0; i < length; i++) {
    const emptyDay = new Day(new Date(), false, []);
    emptyDay.hasAvailability = false;
    arr.push(<DayElement key={i} day={emptyDay} isEmpty={true} />);
  }
  return arr;
};

// Component
const WeekElement: React.FC<IWeekProps> = ({ week }) => {
  console.log("week id:", week.weekInYear, week);
  let emptyBefore = fillArrayWithEmptyDays(week.getFirstDayIndex());
  let emptyAfter = fillArrayWithEmptyDays(6 - week.getLasDayIndex());

  const renderedDays = week.childrenDays.map((dayChild, index) => {
    return (
      <DayElement
        key={index}
        day={dayChild}
        isEmpty={
          dayChild.day < week.getFirstDayIndex() ||
          dayChild.day > week.getLasDayIndex()
        }
      />
    );
  });

  return (
    <ol className="cal-row remove-list-type vertical-margins-0">
      {emptyBefore}
      {renderedDays}
      {emptyAfter}
    </ol>
  );
};

export default WeekElement;
