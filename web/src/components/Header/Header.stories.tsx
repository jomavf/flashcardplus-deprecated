import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
};

export const Default = () => (
  <Header
    items={[
      { name: "Login", path: "/login" },
      { name: "Sign up", path: "/signup" },
    ]}
  />
);
