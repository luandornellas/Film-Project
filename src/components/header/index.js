import { Link } from "react-router-dom";
import './header.css';

export default function Header(){
    return(
        <header>
            <Link to="/" className="logo" >PrimeFlix</Link>
            <Link to="/Favoritos" className="btn-fav" >Meus Favoritos</Link>
        </header>
    );
}