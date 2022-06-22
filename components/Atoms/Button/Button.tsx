import Text from "../Text";
import { ButtonProps } from "./Button.models";
const Button = (props: ButtonProps) => {
  const { primary, children, onClick, icon } = props;
  return (
    <button
      className={`
        ${
          primary
            ? "bg-sky-400 hover:bg-sky-500 text-slate-50"
            : "bg-white hover:bg-slate-100 text-slate-500"
        } + ${icon ? "aspect-square" : ""} +
      px-4 py-2 rounded-full drop-shadow-md hover:drop-shadow`}
      onClick={() => {
        onClick();
      }}
    >
      <Text
        bold={primary}
        color={primary ? "text-white" : undefined}
        size={icon ? "2xl:text-8xl md:text-7xl text-6xl" : undefined}
      >
        {children}
      </Text>
    </button>
  );
};

export default Button;
