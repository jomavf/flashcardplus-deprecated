import styles from "./ListItem.module.css";
import { Button, Text } from "../..";

interface ListItemProps {
  title: string;
  actions: {
    title: string;
    onClick: () => void;
  }[];
}

export const ListItem = ({ title, actions }: ListItemProps) => {
  return (
    <div className={styles.container}>
      <Text variant="p">{title}</Text>
      {actions.map(({ title, onClick }) => (
        <Button onClick={onClick}>{title}</Button>
      ))}
    </div>
  );
};
