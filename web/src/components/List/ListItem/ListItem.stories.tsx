import { ListItem } from "./ListItem";

export default {
  title: "ListItem",
  component: ListItem,
};

export const Default = () => (
  <ListItem
    title="This is a title for testing"
    actions={[
      { title: "Edit", onClick: () => console.log("Clic") },
      { title: "Rename", onClick: () => console.log("Clic") },
      { title: "Delete", onClick: () => console.log("Clic") },
    ]}
  ></ListItem>
);
