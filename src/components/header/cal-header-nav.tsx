import React from "react";
import Month from "../../model/month";
import monthElement from "../month-element";

const CalHeaderNav: React.FC<{ monthName: string }> = ({ monthName }) => {
  return (
    <>
      <div className="cal-col">{monthName}</div>
      <div className="cal-col"></div>
    </>
  );
};

export default CalHeaderNav;
