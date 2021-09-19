import { Link } from "@reach/router";

export const Nav = () => {
  return (
    <nav className="container">
      <Link to="/">Home</Link>
      <Link to="/cards">Your Cards</Link>
    </nav>
  );
};
