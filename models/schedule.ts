export default class Schedule {
  month: number;
  year: number;
  data: Array<any>;
  constructor(month: number, year: number, data?: Array<any>) {
    this.year = year;
    this.month = month;
    if (!data) {
      data = [];
      const nDays = new Date(year, month, 0).getDate();
      for (let i = 1; i <= nDays; i++) {
        data.push({ date: new Date(year, month, i) });
      }
    }
    this.data = data;
  }
}
