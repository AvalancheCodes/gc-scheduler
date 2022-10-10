import React from "react";
import moment from "moment";
import CalendarApp from "../model/CalendarApp";

// By default, we view the current month
const CalAppContext = React.createContext(new CalendarApp(Date.now()));

// const IContextProps = {};
//
// const CalendarAppProvider = () => {
//   return <div></div>;
// };

export default CalAppContext;
