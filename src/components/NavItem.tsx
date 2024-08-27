import { NavLink } from "react-router-dom";

const NavItem = ({ icon, title, active,to }: any) => {
  return (
    <NavLink
      to={to}
      className={`inline-flex gap-2 rounded-md ${
        active && "bg-lime-100"
      }  items-center  px-3 py-3`}
    >
      {icon}
      <h1
        className={`text-sm capitalize  ${
          active ? "font-bold text-lime-700" : "font-semibold text-neutral-800"
        }`}
      >
        {title}
      </h1>
    </NavLink>
  );
};

export default NavItem;
