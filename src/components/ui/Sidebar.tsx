import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const menuItems = [
  {
    path: "/login",
    title: "Login",
    subtitle: "Access your account",
    icon: <FaUser size={23} />,
  },
  {
    path: "/settings",
    title: "Settings",
    subtitle: "Manage your account settings",
    icon: <IoMdSettings size={26} />,
  },
];

export default function Sidebar() {
  return (
    <div className="m-0 flex flex-col items-center justify-center dark:bg-zinc-900">
      {menuItems.map((item) => (
        <div className="m-3" key={item.path}>
          {item.icon}
        </div>
      ))}
    </div>
  );
}
