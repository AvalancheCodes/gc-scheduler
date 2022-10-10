import moment from "moment";
import Month from "./month";
import Year from "./year";

class CalendarApp {
  // CurrentViewedMonth: Month;
  CurrentActiveYear: Year;
  // By default, we view the current month
  CurrentActiveMonth: Month;

  constructor(date: number) {
    //this.CurrentViewedMonth = moment(date).month() + 1;
    this.CurrentActiveYear = new Year(new Date(date));
    this.CurrentActiveMonth = this.CurrentActiveYear.getMonth(
      moment(date).month()
    );
  }

  getNextYear() {
    return this.CurrentActiveYear.year + 1;
  }

  getPrevYear() {
    return this.CurrentActiveYear.year - 1;
  }
}

export default CalendarApp;
