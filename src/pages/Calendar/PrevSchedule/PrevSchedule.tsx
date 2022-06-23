import { BsFillCheckCircleFill } from "react-icons/bs";

import Text from "../../../components/Atoms/Text";
import Header from "../../../components/Atoms/Header";
import { PrevScheduleProps } from "./PrevSchedule.models";

const PrevSchedule = (props: PrevScheduleProps) => {
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <Text size="text-9xl" color="text-sky-400">
        <BsFillCheckCircleFill />
      </Text>
      <Header h={3}>Thanks for submitting your availabillity!</Header>
    </div>
  );
};

export default PrevSchedule;
