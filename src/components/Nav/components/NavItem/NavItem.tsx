import { NavLink, To } from "react-router-dom";
import clsx from "clsx";
import { FC } from "react";

interface NavItemProps {
  to: To;
  children: React.ReactNode;
  end?: boolean;
}

const NavItem: FC<NavItemProps> = ({ to, children, end }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return clsx("nav-item nav-link link-body-emphasis", {
          active: isActive,
        });
      }}
      to={to}
      end={end}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
