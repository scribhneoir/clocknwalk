import { useState } from "react";
import Card from "../../components/Atoms/Card";
import { useCalendarGrid } from "../../hooks/calendar";
import Schedule from "../../models/schedule";
import Availabillity from "./Availabillity";
import { CalendarProps } from "./Calendar.models";

const Calendar = (props: CalendarProps) => {
  const [availabillity, setAvailabillity] = useState(
    new Schedule((new Date().getMonth() % 12) + 1, new Date().getFullYear())
  );
  const [aCalGrid] = useCalendarGrid(availabillity);
  const onClear = () => {
    setAvailabillity(
      new Schedule((new Date().getMonth() % 12) + 1, new Date().getFullYear())
    );
  };
  const onAvailabillityChange = (date: number) => {
    let { data } = availabillity;
    switch (data[date].type) {
      case "AVAILABLE":
        data[date].type = "CLOCK";
        break;
      case "CLOCK":
        data[date].type = "WALK";
        break;
      case "WALK":
        data[date].type = "";
        break;
      default:
        data[date].type = "AVAILABLE";
    }
    setAvailabillity({ ...availabillity, data });
  };
  return (
    <Card>
      <Availabillity
        onClear={onClear}
        aCalGrid={aCalGrid}
        onAvailabillityChange={onAvailabillityChange}
        month={availabillity.data[0].date.toLocaleString("default", {
          month: "long",
        })}
      />
    </Card>
  );
};

export default Calendar;
