import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Homes/Home";
import Shop from "./pages/Shop";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routers;
