import { BsFillCheckCircleFill } from "react-icons/bs";

import Text from "../../../components/Atoms/Text";
import Header from "../../../components/Atoms/Header";
import Button from "../../../components/Atoms/Button";
import { ConfirmationProps } from "./Confirmation.models";

const Confirmation = (props: ConfirmationProps) => {
  const { onEdit } = props;
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <div className="motion-safe:animate-bounce">
        <Text size="text-9xl" color="text-sky-400">
          <BsFillCheckCircleFill />
        </Text>
      </div>
      <div className={`my-4 w-64`}>
        <Header h={3}>Thanks for submitting your availabillity!</Header>
      </div>
      <Button
        primary
        onClick={() => {
          onEdit();
        }}
      >
        edit
      </Button>
    </div>
  );
};

export default Confirmation;
