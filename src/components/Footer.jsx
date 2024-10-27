import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-0.5 bg-gray-300 my-4"></div>
      <div className="grid grid-cols-[1fr_1fr_1fr_1.5fr] py-6">
        <div className="pl-28">
          <span className="text-xl font-semibold">Furino</span>
          <p className="pt-12 text-gray-400">
            {" "}
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="pl-28">
          <span className="text-gray-400">Links</span>
          <nav className="pt-12">
            <ul className="flex flex-col gap-6">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
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
          </nav>
        </div>
        <div>
          <span className="text-gray-400 ">Help</span>
          <p className="pt-12">Payment Options</p>
          <p className="pt-6">Returns</p>
          <p className="pt-6">Privacy Policies</p>
        </div>
        <div>
          <span className="text-gray-400">Newsletter</span>
          <br />
          <input
            type="text"
            className="text-gray-400 pt-1 border-b border-black mb-2 focus:outline-none focus:border-blue-500"
            placeholder="Entrer votre adresse mail"
          />

          <button className="border-b border-black mb-4 py-1 px-8 focus:outline-none focus:border-blue-500">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-auto h-0.5 bg-gray-300 my-4 mx-28"></div>
      <span className="pl-28">2023 furino. All rights reverved</span>
    </footer>
  );
};

export default Footer;
