import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./Views/Home";
import Navbar from "./Components/Navbar";
import CharCards from "./Views/CharCards";
import EpiCards from "./Views/EpiCards";
import Footer from "./Components/Footer";
import injectContext from "./Store/appContext";
import CharSingle from "./Components/CharSingle";
import EpiSingle from "./Views/EpiSingle"; //Arreglar

function App() {
  return (
    <div className="d-flex flex-column App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/r-m-react-api" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharCards />} />
          <Route path="/characters/:id" element={<CharSingle />} />

          <Route path="/episode" element={<EpiCards />} />
          <Route path="/episode/:id" element={<EpiSingle />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
