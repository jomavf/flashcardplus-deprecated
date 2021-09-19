import styles from "./Layout.module.css";
import { Nav } from "../Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.base}>
      <header>
        <Nav></Nav>
      </header>
      <aside>hey</aside>
      <main>{children}</main>
    </div>
  );
};
