import { BsClockFill, BsFillCheckCircleFill } from "react-icons/bs";
import { IoFootsteps } from "react-icons/io5";

import Text from "../../../../components/Atoms/Text";
import { DayProps } from "./Day.models";

const Button = (props: DayProps) => {
  const { date, type, onAvailabillityChange } = props;
  return (
    <button
      className={` ${
        type && type === "CLOCK"
          ? "bg-sky-400 hover:bg-sky-500"
          : type === "WALK"
          ? "bg-sky-400 hover:bg-sky-500"
          : type === "AVAILABLE"
          ? "bg-green-400 hover:bg-green-500"
          : "bg-white hover:bg-slate-100"
      }
        m-1 md:m-2 p-2 w-10 h-10 md:w-16 md:h-16 rounded-full drop-shadow-md hover:drop-shadow justify-self-center self-center`}
      onClick={() => {
        onAvailabillityChange(date - 1);
      }}
    >
      <div className={`flex justify-center items-center m-0 p-0`}>
        <Text
          size={(type && "md:text-3xl text-2xl") || "md:text-2xl text-lg"}
          color={type ? "text-white" : undefined}
        >
          {type && type === "CLOCK" ? (
            <BsClockFill />
          ) : type === "WALK" ? (
            <IoFootsteps />
          ) : type === "AVAILABLE" ? (
            <BsFillCheckCircleFill />
          ) : (
            date
          )}
        </Text>
      </div>
    </button>
  );
};

export default Button;
