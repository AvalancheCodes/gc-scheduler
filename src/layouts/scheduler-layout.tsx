import React from "react";
import Scheduler from "../components/scheduler/scheduler";
import CalAppContext from "../context/CalendarApp";
import moment from "moment";
import CalendarApp from "../model/CalendarApp";
import MonthElement from "../components/month-element";

const SchedulerLayout = () => {
  const calAppContext = React.useContext(CalAppContext);

  return (
    <main>
      <div>{/* Scheduler header display progress  */}</div>
      <div>
        <CalAppContext.Provider value={new CalendarApp(Date.now())}>
          <div className="cal-container">
            <div className="cal-col" />
            <div className="cal-col">
              <MonthElement month={calAppContext.CurrentActiveMonth} />;
            </div>
            <div className="cal-col" />
          </div>
        </CalAppContext.Provider>
      </div>
      <div></div>
    </main>
  );
};

export default SchedulerLayout;
