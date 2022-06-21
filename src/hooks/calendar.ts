import { useState, useEffect } from "react";

export const useCalendarGrid = (schedule: {
  year: number;
  month: number;
  data: Array<any>;
}) => {
  const [calendarGrid, setCalendarGrid] = useState<Array<any>>([]);

  useEffect(() => {
    const first = new Date(schedule.year, schedule.month, 1).getDay();
    const nDays = new Date(schedule.year, schedule.month, 0).getDate();

    let days: Array<Array<any>> = [];
    for (let i = 0; i <= (nDays + first) / 7; i++) {
      for (let j = 0; j < 7; j++) {
        days.push([]);
        if (i * 7 + j < first) {
          days[i].push({});
        } else {
          days[i].push({ ...schedule.data[i * 7 + j - first] });
        }
      }
    }
    setCalendarGrid(days);
  }, [schedule]);

  return [calendarGrid];
};
