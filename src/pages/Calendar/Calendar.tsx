import { useState } from "react";
import Card from "../../components/Atoms/Card";
import { useCalendarGrid } from "../../hooks/calendar";
import Schedule from "../../models/schedule";
import Availabillity from "./Availabillity";
import PrevSchedule from "./PrevSchedule";
import { CalendarProps } from "./Calendar.models";
import Confirmation from "./Confirmation";
import Header from "../../components/Atoms/Header";

const Calendar = (props: CalendarProps) => {
  const [availabillity, setAvailabillity] = useState(
    new Schedule((new Date().getMonth() % 12) + 1, new Date().getFullYear())
  );
  const [submitted, setSubmitted] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [aCalGrid] = useCalendarGrid(availabillity);
  const onClear = () => {
    setAvailabillity(
      new Schedule((new Date().getMonth() % 12) + 1, new Date().getFullYear())
    );
  };
  const onSubmit = () => {
    setSubmitted(true);
  };
  const onEdit = () => {
    setSubmitted(false);
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
    <>
      <div className="mr-auto ml-4 my-2">
        <Header h={2}>Calendar</Header>
      </div>
      <Card flipped={showSchedule}>
        <div className={`flex justify-center items-center`}>
          <div
            className={`absolute justify-self-center ${
              !submitted ? "scale-0 opacity-0" : "delay-200"
            } transition-all duration-500 ease-in-out`}
          >
            <Confirmation onEdit={onEdit} />
          </div>
          <div
            className={`justify-self-center aspect-square ${
              submitted ? "scale-0 opacity-0" : ""
            } transition-all duration-500 ease-in-out`}
          >
            <Availabillity
              onClear={onClear}
              onSubmit={onSubmit}
              aCalGrid={aCalGrid}
              onAvailabillityChange={onAvailabillityChange}
              month={availabillity.data[0].date.toLocaleString("default", {
                month: "long",
              })}
            />
          </div>
        </div>
        <PrevSchedule />
      </Card>
    </>
  );
};

export default Calendar;
