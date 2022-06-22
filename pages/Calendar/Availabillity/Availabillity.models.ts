export type AvailabillityProps = {
  aCalGrid: Array<{ date: Date; type?: "" | "CLOCK" | "WALK" | "AVAILABLE" }>;
  onAvailabillityChange: (day: number) => void;
  onClear: () => void;
  month: string;
};
