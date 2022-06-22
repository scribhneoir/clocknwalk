import { useState, useEffect } from "react";

import Schedule from "../models/schedule";

export const useCalendarGrid = (schedule: Schedule) => {
  const [calendarGrid, setCalendarGrid] = useState<Array<any>>([]);

  useEffect(() => {
    const first = new Date(schedule.year, schedule.month, 1).getDay();
    const nDays = new Date(schedule.year, schedule.month, 0).getDate();

    let days: Array<any> = [];
    for (let i = 0; i < nDays + first; i++) {
      if (i < first) {
        days.push({});
      } else {
        days.push({ ...schedule.data[i - first] });
      }
    }
    setCalendarGrid(days);
  }, [schedule]);

  return [calendarGrid];
};
