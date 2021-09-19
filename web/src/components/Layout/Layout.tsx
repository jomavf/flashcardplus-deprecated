import styles from "./Layout.module.css";
import { Nav } from "../Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "My Decks", path: "/mydecks" },
  ];
  return (
    <div className={styles.base}>
      <header>
        <Nav items={navItems}></Nav>
      </header>
      <aside>hey</aside>
      <main>{children}</main>
    </div>
  );
};
