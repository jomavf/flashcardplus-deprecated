import styles from "./Sidebar.module.css";

import { NavLink } from "../NavLink";

interface SidebarProps {
  isLoggedIn?: boolean;
  items: {
    name: string;
    path: string;
  }[];
}

export const Sidebar = ({ items = [] }: SidebarProps) => {
  return (
    <aside className={styles.container}>
      {items.map((item, index) => {
        return (
          <NavLink to={item.path} key={index}>
            {item.name}
          </NavLink>
        );
      })}
    </aside>
  );
};
