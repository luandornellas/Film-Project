import { Link } from "react-router-dom";
import "./error.css"

export default function Error(){

    return(
        <div className="error">
            <h1>404</h1>
            <p>Pagina Não Encontrada!</p>
            <Link to="/">Voltar</Link>
        </div>
    )

}