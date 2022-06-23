import Header from "../../../components/Atoms/Header";
import Text from "../../../components/Atoms/Text";
import Day from "./Day";
import { AvailabillityProps } from "./Availabillity.models";
import Button from "../../../components/Atoms/Button";

const Availabillity = (props: AvailabillityProps) => {
  const { aCalGrid, onAvailabillityChange, month, onClear, onSubmit } = props;
  console.log(aCalGrid);
  return (
    <div>
      <Header h={2}>{month}</Header>
      <div className={`grid grid-cols-7 lg:gap-2 mb-4`}>
        <Text>S</Text>
        <Text>M</Text>
        <Text>T</Text>
        <Text>W</Text>
        <Text>T</Text>
        <Text>F</Text>
        <Text>S</Text>
        {aCalGrid.map((day) =>
          day?.date ? (
            <Day
              date={new Date(day.date).getDate()}
              type={day.type}
              onAvailabillityChange={onAvailabillityChange}
            />
          ) : (
            <div />
          )
        )}
      </div>
      <div
        className={`grid grid-cols-2 gap-8 justify-center content-center justify-self-center self-center pt-2`}
      >
        <Button
          onClick={() => {
            onClear();
          }}
        >
          clear
        </Button>
        <Button
          onClick={() => {
            onSubmit();
          }}
          primary
        >
          submit
        </Button>
      </div>
    </div>
  );
};

export default Availabillity;
