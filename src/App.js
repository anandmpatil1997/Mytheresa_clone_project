import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";
import Womens from "./components/Womens";
import Men from "./components/Men";
import Kids from "./components/Kids";
import Account from "./components/Account";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/women" element={<Womens />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}
