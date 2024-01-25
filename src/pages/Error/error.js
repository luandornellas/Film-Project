import { Link } from "react-router-dom";
import "./error.css"

export default function Error(){

    return(
        <div className="error">
            <h2>Pagina Não Encontrada!</h2>
            <Link to="/">Voltar</Link>
        </div>
    )

}