import { Sidebar } from "./Sidebar";

export default {
  title: "Sidebar",
  component: Sidebar,
};

export const Default = () => (
  <Sidebar
    items={[
      { name: "Home", path: "/" },
      { name: "Your Cards", path: "/" },
    ]}
  />
);
