import Button from "../../../Atoms/Button";
import { MenuItemProps } from "./MenuItem.models";
const Menu = (props: MenuItemProps) => {
  const { closed, children, onClick } = props;
  return (
    <div
      className={`justify-self-center aspect-square ${
        closed ? "scale-0 opacity-0" : "delay-200"
      } transition-all duration-500 ease-in-out`}
    >
      <Button
        icon
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default Menu;
