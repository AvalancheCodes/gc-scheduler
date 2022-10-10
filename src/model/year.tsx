import moment from 'moment';
import Month from './month';

class Year {
  year: number;
  months: any[];
  constructor(date: Date) {
    this.year = moment(date).year();
    this.months = this._createMonths();
  }

  _createMonths() {
    let months = [];
    for (let i = 0; i < 12; i++) {
      let date = new Date(`${this.year}-${i + 1}-1`);
      months.push(new Month(date));
    }
    return months;
  }

  // Returns the month object by index
  getMonth(month:number) {
    return this.months[month];
  }

  getMonthByName(name:string) {
    name = name.toLowerCase();
    return this.months.find((month) => month.name.toLowerCase() === name);
  }
}

export default Year;
