import { useLocation } from "react-router";

const Shop = () => {
  const data = useLocation();
  return (
    <>
      <div className="text-green-500 text-2xl">Shop </div>
      <div className="text-green-500 text-2xl">Shop</div>
      <div className="text-green-500 text-2xl">Shop</div>
      <div className="text-green-500 text-2xl">Shop</div>
    </>
  );
};

export default Shop;
