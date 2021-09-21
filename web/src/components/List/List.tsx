import styles from "./List.module.css";
import { ListItem } from "./ListItem";

interface ListProps {
  items: any;
  actions: {
    title: string;
    onClick: () => void;
  }[];
}

export const List = ({ items, actions }: ListProps) => {
  return (
    <div className={styles.container}>
      {items.map((item: any, index: number) => (
        <ListItem title={item.title || "None"} actions={actions} key={index} />
      ))}
    </div>
  );
};
