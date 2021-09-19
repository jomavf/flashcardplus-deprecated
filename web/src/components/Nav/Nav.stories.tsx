import { Nav } from "./Nav";

export default {
  title: "Nav",
  component: Nav,
};

export const Default = () => (
  <Nav
    items={[
      { name: "Home", path: "/" },
      { name: "Your Cards", path: "/" },
    ]}
  />
);
