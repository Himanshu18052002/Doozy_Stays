import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Acco from "./Pages/Accommodation/Acco";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Nav />
      <div className="mt-20 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation" element={<Acco />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
