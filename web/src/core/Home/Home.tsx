import { Button } from "../../components";

interface Props {
  path: string;
}

export const Home = (props: Props) => {
  return (
    <div>
      <Button onClick={() => console.log("Heyyy")}>Go to See cards</Button>
      <Button onClick={() => console.log("Create card")}>
        Go to Create card
      </Button>
    </div>
  );
};
