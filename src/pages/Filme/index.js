import { useNavigate, useParams } from "react-router-dom"
import './filme.css'
import { useEffect, useState } from "react"
import api from "../../services/api"

export default function Filme(){
    const [filme, setFilme] = useState({})
    const navegate = useNavigate()
    const {id} = useParams()


    useEffect(() => {

        async function buscaIdFilme(){
            await api.get(`/movie/${id}`, {
                params : {
                    api_key : '37d62fcd00f0adab7d6c72dfccab604b',
                    language : 'pt-br'
                }
            }).then((response)=> {
                setFilme(response.data)
            }).catch(()=> {
                navegate('/', {replace : true})
            })
            
        };

        buscaIdFilme()

    }, [id, navegate])

    return(
        <div className="filme">
            <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}/>
            <div className="discrisao">
                <h1>{filme.title}</h1>
                <h3>Sinopse:</h3>
                <p>{filme.overview}</p>
            </div>

        </div>
    )
}