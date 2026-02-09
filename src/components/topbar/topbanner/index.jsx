import DoutorWakaLogo from "./images/logo.png";
import "./style.css";

export function Topbanner() {
    return (
        <div className="topbanner">
            <img className="topbanner" src={DoutorWakaLogo} alt="Dr. Waka" />
            <center className="topbanner">GERENCIADOR DE FILMES</center>
        </div>
    );

}