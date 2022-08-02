import { RiLogoutCircleLine } from "react-icons/ri";
import { BsClockFill } from "react-icons/bs";
import { IoPeopleCircle, IoCalendarNumber } from "react-icons/io5";

import Button from "../../Atoms/Button";
import MenuItem from "./MenuItem";
import { MenuProps } from "./Menu.models";
import { useHistory } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../../../App";
const Menu = (props: MenuProps) => {
  const { closed, toggleClosed } = props;
  const [user] = useAtom(userAtom);
  const history = useHistory();
  const menuItems = [
    {
      icon: <IoCalendarNumber />,
      label: "Schedule",
      onClick: () => {
        history.push("/calendar");
      },
    },
    {
      icon: <IoPeopleCircle />,
      label: "Team",
      onClick: () => {
        history.push("/edit-staff");
      },
    },
    {
      icon: <RiLogoutCircleLine />,
      label: "Logout",
      onClick: async () => {
        user &&
          (await user.logOut().then(() => {
            history.push("/login");
          }));
      },
    },
  ];
  return (
    <div
      className={`z-10 bg-white drop-shadow border-2 fixed inset-x-0 -top-20 place-items-end justify-items-center w-28 md:w-40 2xl:w-48 ${
        closed ? "h-52 md:h-64 2xl:h-72 " : "h-full pt-48 md:pt-[300px]"
      }  pb-4 md:pb-8 p-2 grid auto-rows-auto rounded-full overflow-hidden transition-all duration-500 ease-in-out`}
    >
      <div className={`absolute top-24 md:top-32 z-20 hover:animate-spin`}>
        <Button
          icon
          primary
          onClick={() => {
            toggleClosed();
          }}
        >
          <BsClockFill />
        </Button>
      </div>
      {menuItems.map((item) => (
        <MenuItem closed={closed} onClick={item.onClick}>
          {item.icon}
        </MenuItem>
      ))}
    </div>
  );
};

export default Menu;
