import styles from "./NavLink.module.css";
import { Link } from "@reach/router";

export const NavLink = (props: any) => (
  <Link {...props} className={styles.base} />
);
