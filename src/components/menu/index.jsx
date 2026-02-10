import { Link } from "react-router-dom";
import "./style.css";

export function Menu() {
    return (
        <div className="menu">
            <nav className="menu">
                <Link className="menu" to="/">HOME</Link>
            </nav>
            <nav className="menu">
                <Link className="menu" to="/filmes">FILMES</Link>
            </nav>
            <nav className="menu">
                <Link className="menu" to="/diretores">DIRETORES</Link>
            </nav>
            <nav className="menu">
                <Link className="menu" to="/atores">ATORES</Link>
            </nav>
        </div>
    );
}