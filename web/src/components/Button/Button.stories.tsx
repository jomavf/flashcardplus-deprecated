import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => (
  <Button onClick={() => console.log("I am working")}>Primary</Button>
);

export const Secondary = () => (
  <Button variant="secondary" onClick={() => console.log("I am working")}>
    Secondary
  </Button>
);
