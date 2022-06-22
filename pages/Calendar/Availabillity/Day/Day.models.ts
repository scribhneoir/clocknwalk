export type DayProps = {
  date: number;
  type?: "" | "CLOCK" | "WALK" | "AVAILABLE";
  onAvailabillityChange: (date: number) => void;
};
