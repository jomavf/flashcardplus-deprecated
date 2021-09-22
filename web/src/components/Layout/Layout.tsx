import styles from "./Layout.module.css";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

interface ItemProps {
  name: string;
  path: string;
}
interface LayoutProps {
  children: React.ReactNode;
  sidebarItems: ItemProps[];
  headerItems: ItemProps[];
}

export const Layout = ({
  children,
  sidebarItems,
  headerItems,
}: LayoutProps) => {
  return (
    <div className={styles.base}>
      <Header items={headerItems} />
      <Sidebar items={sidebarItems}></Sidebar>
      <main>{children}</main>
    </div>
  );
};
