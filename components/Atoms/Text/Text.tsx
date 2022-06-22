import { TextProps } from "./Text.models";

const Text = (props: TextProps) => {
  const { children, bold, color, size } = props;
  return (
    <p
      className={` text-center
        ${color ? color : "text-slate-500"}
        ${bold ? "font-black" : "font-medium"}
        ${size ? size : "text-base"}`}
    >
      {children}
    </p>
  );
};

export default Text;
