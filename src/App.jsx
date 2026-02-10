import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Diretores } from "./components/pages/diretores";
import { Home } from "./components/pages/home";
import { Atores } from "./components/pages/home/atores";
import { Filmes } from "./components/pages/home/filmes";
import { Topbar } from "./components/topbar";
import { Topbanner } from "./components/topbar/topbanner";
import "./global.css";
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
        {/* <Home /> 
        <Filmes />
        <Atores />*/}
        <Diretores />
      </Mainbody>
      <Footer />
    </>
  );
}

export default App;
