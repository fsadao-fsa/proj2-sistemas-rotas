import "./global.css";
import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Diretores } from "./components/pages/diretores";
import { Home } from "./components/pages/home";
import { Atores } from "./components/pages/home/atores";
import { Filmes } from "./components/pages/home/filmes";
import { Topbar } from "./components/topbar";
import { Topbanner } from "./components/topbar/topbanner";
import { Routes, Route } from "react-router-dom";

/* import logo from './logo.svg';
import './App.css';
 */
function App() {
  return (
    <>
      <Topbar />
      <Topbanner />
      <Mainbody>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/diretores" element={<Diretores />} />
          <Route path="/atores" element={<Atores />} />
        </Routes>
      </Mainbody>
      <Footer />
    </>
  );
}

export default App;
