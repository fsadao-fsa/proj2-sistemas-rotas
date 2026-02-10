import { Footer } from "./components/footer";
import { Mainbody } from "./components/mainbody";
import { Menu } from "./components/menu";
import { Home } from "./components/pages/home";
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
        <Home />
      </Mainbody>
      <Footer />
    </>
  );
}

export default App;
