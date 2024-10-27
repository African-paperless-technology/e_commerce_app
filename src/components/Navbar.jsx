import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" />
      Home
      <Link />
      <Link state={{ txt: "State" }} to="/shop" className="pl-5" />
      Shop
      <Link />
      {/* <Link state={{ txt: "State" }} to="/About" />
      About
      <Link />
      <Link state={{ txt: "State" }} to="/Contact" />
      Contact
      <Link /> */}
    </div>
  );
};

export default Navbar;
