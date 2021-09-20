import { NavLink } from "../NavLink";
import styles from "./Header.module.css";

interface HeaderProps {
  items: {
    name: string;
    path: string;
  }[];
}
export const Header = ({ items }: HeaderProps) => {
  return (
    <header className={styles.base}>
      <div className={styles.logo}>
        <span>Logo</span>
      </div>
      <div></div>
      {items.map((item, index) => (
        <NavLink key={index} to={item.path}>
          {item.name}
        </NavLink>
      ))}
    </header>
  );
};
