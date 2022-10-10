import * as React from "react";
import Year from "../../model/year";
import MonthElement from "../month-element";
import CalAppContext from "../../context/CalendarApp";

const Scheduler = () => {
  // calendar app context
  const calAppContext = React.useContext(CalAppContext);

  return <MonthElement month={calAppContext.CurrentActiveMonth} />;
};

export default Scheduler;
