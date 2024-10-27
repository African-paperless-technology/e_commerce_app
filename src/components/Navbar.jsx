import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-12">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link className="" to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
