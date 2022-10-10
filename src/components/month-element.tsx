import React from "react";
import Day from "../model/day";
import Month from "../model/month";
import WeekElement from "./week-element";
import moment from "moment";
import CalHeader from "./header/cal-header";
import CalHeaderNav from "./header/cal-header-nav";

interface IMonthsProps {
  month: Month;
}

const MonthElement: React.FC<{ month: Month }> = ({ month }) => {
  return (
    <div className="mt-5">
      <div className="cal-row">
        <CalHeaderNav monthName={month.name} />
      </div>
      <div className="cal-row cal-header mb-3">
        <CalHeader week={month.weeks[1]} />
      </div>
      {month.weeks.map((week, index) => {
        return <WeekElement key={index} week={week} />;
      })}
    </div>
  );
};

export default MonthElement;
