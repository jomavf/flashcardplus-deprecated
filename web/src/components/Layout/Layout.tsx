import styles from "./Layout.module.css";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const sidebarItems = [
    { name: "Home", path: "/" },
    { name: "My Decks", path: "/mydecks" },
  ];
  const headerItems = [
    { name: "Login", path: "/login" },
    { name: "Sign up", path: "/signup" },
  ];

  return (
    <div className={styles.base}>
      <Header items={headerItems} />
      <Sidebar items={sidebarItems}></Sidebar>
      <main>{children}</main>
    </div>
  );
};
