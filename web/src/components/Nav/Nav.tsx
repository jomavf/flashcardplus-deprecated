import styles from "./Nav.module.css";

import { NavLink } from "../NavLink";

interface NavProps {
  isLoggedIn?: boolean;
  items: {
    name: string;
    path: string;
  }[];
}

export const Nav = ({ items = [] }: NavProps) => {
  return (
    <nav className={styles.container}>
      {items.map((item, index) => {
        return (
          <NavLink to={item.path} key={index}>
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
};
