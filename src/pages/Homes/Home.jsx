// import { useLocation } from "react-router-dom";
import interieur1 from "../../assets/homePage/interieur1.jpg";
import saleManger from "../../assets/homePage/saleManger.jpg";
import chambre from "../../assets/homePage/chambre.jpg";
import lit from "../../assets/homePage/lit.jpg";
import grandSalon from "../../assets/homePage/grandSalon.jpg";
import petitFauteuil from "../../assets/homePage/petitFauteuil.jpg";
import salon from "../../assets/homePage/salon.jpg";
import table from "../../assets/homePage/table.jpg";
import comparer from "../../assets/homePage/comparer.png";
import partager from "../../assets/homePage/partager.png";
import coeur from "../../assets/coeur.png";
import CirclePercentage from "./circlePercentage";
// import Container from "./Container";

const Home = () => {
  // const items = [
  //   { percentage: 50, image: table, text: "Table" },
  //   { image: petitFauteuil, text: "Petit Fauteuil" },
  //   { percentage: 50, image: salon, text: "Salon" },
  //   { percentage: 50, image: grandSalon, text: "Grand Salon" },
  // ];

  return (
    <div>
      {/* /-----------section 1: après le Header--------------*/}
      <section>
        <div className="relative">
          <img
            src={interieur1}
            alt=""
            className="w-full h-96 object-cover py-4 block"
          />
          <div className="absolute bg-orange-100 w-96 h-64 top-16 right-9 flex flex-col items-start p-4">
            <span className="text-sm">New arrival!</span>
            <span className="text-2xl text-orange-300 mt-2 ">
              DISCOVER OUR{" "}
            </span>
            <span className="text-2xl text-orange-300">NEW COLLECTION</span>
            <span className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </span>
            <button className="bg-orange-300 border  w-32 h-12 mt-8">
              Buy now
            </button>
          </div>
        </div>
      </section>

      <div className=" flex justify-center items-center flex-col mt-5">
        <span className="text-2xl font-bold">BROWSE THE RANGE</span>

        <span className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>

      {/* /-----------section 2: présentation de 3 images--------------*/}

      <section className="grid grid-cols-1 sm:grid-cols-3 ">
        <div>
          <img
            src={saleManger}
            alt=""
            className="w-full h-96 object-cover pl-36 mb-2 rounded-lg"
          />
          <span className="ml-64 mt-10">Dinning</span>
        </div>
        <div className="rounded-lg">
          <img
            src={chambre}
            alt=""
            className="w-full h-96 object-cover px-16 mb-2 rounded-lg"
          />
          <span className="ml-48 mt-10">Living</span>
        </div>
        <div>
          <img
            src={lit}
            alt=""
            className="w-full h-96 object-cover pr-36 mb-2 rounded-lg"
          />
          <span className="pl-24 mt-10">Bedroom</span>
        </div>
      </section>

      {/* /-----------section 3: présentation des produits--------------*/}

      <section className="">
        <span className="text-2xl font-bold flex justify-center items-center my-10 mb-4">
          Our Products
        </span>

        <div className=" grid grid-cols-4 gap-4 mx-28">
          <div className="relative h-110 bg-gray-100">
            <div className="relative group">
              <div className="absolute top-4 left-44 ml-6">
                <CirclePercentage percentage={50} color="bg-red-400" />{" "}
              </div>

              <img
                src={table}
                alt=""
                className="w-full h-80 object-cover transition duration-300 ease-in-out group-hover:filter group-hover:grayscale"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <button className="w-36 h-10 bg-white text-orange-300 mb-6">
                  Add to cart
                </button>
                <div className="grid grid-cols-3 text-white gap6 px-4">
                  <div>
                    <img src={partager} alt="" className="w-6 text-white " />
                    <span>share</span>
                  </div>
                  <div>
                    <img src={comparer} alt="" className="w-6" />
                    <span className="mr-10">compare</span>
                  </div>
                  <div>
                    <img src={coeur} alt="" className="w-6" />
                    <span>like</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-2 flex flex-col">
              <span className="text-xl my-2">Syltherine</span>
              <span className="text-gray-400 mb-1">Stylish cafe chair</span>
              <span className="">Rp 2.500.000</span>
            </div>
          </div>
          <div className=" h-110 bg-gray-100  ">
            <div className="relative group">
              <div className="absolute top-4 left-44 ml-6">
                <CirclePercentage percentage={50} color="bg-red-400" />{" "}
              </div>

              <img
                src={petitFauteuil}
                alt=""
                className="w-full h-80 object-cover transition duration-300 ease-in-out group-hover:filter group-hover:grayscale"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <button className="w-36 h-10 bg-white text-orange-300 mb-6">
                  Add to cart
                </button>
                <div className="grid grid-cols-3 text-white gap6 px-4">
                  <div>
                    <img src={partager} alt="" className="w-6 text-white " />
                    <span>share</span>
                  </div>
                  <div>
                    <img src={comparer} alt="" className="w-6" />
                    <span className="mr-10">compare</span>
                  </div>
                  <div>
                    <img src={coeur} alt="" className="w-6" />
                    <span>like</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative h-105 bg-gray-100 ">
            <div className="relative group">
              <div className="absolute top-4 left-44 ml-6">
                <CirclePercentage percentage={50} color="bg-red-400" />{" "}
              </div>

              <img
                src={salon}
                alt=""
                className="w-full h-80 object-cover transition duration-300 ease-in-out group-hover:filter group-hover:grayscale"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <button className="w-36 h-10 bg-white text-orange-300 mb-6">
                  Add to cart
                </button>
                <div className="grid grid-cols-3 text-white gap6 px-4">
                  <div>
                    <img src={partager} alt="" className="w-6 text-white " />
                    <span>share</span>
                  </div>
                  <div>
                    <img src={comparer} alt="" className="w-6" />
                    <span className="mr-10">compare</span>
                  </div>
                  <div>
                    <img src={coeur} alt="" className="w-6" />
                    <span>like</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-110 bg-gray-100">
            <div className="relative group">
              <div className="absolute top-4 left-44 ml-6">
                <CirclePercentage percentage={50} color="bg-red-400" />{" "}
              </div>
              <img
                src={grandSalon}
                alt=""
                className="w-full h-80 object-cover transition duration-300 ease-in-out group-hover:filter group-hover:grayscale"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <button className="w-36 h-10 bg-white text-orange-300 mb-6">
                  Add to cart
                </button>
                <div className="grid grid-cols-3 text-white gap6 px-4">
                  <div>
                    <img src={partager} alt="" className="w-6 text-white " />
                    <span>share</span>
                  </div>
                  <div>
                    <img src={comparer} alt="" className="w-6" />
                    <span className="mr-10">compare</span>
                  </div>
                  <div>
                    <img src={coeur} alt="" className="w-6" />
                    <span>like</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {items.map((item, index) => (
            <div key={index} className="relative">
              <CirclePercentage
                percentage={item.percentage}
                color="bg-red-400"
              />
              <Container image={items.image} text={item.text} />
            </div>
          ))} */}
        </div>
      </section>
    </div>
  );
};

export default Home;
