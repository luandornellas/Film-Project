import { useNavigate, useParams } from "react-router-dom"
import './filme.css'
import { useEffect, useState } from "react"
import api from "../../services/api"
import { toast } from "react-toastify"

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

    function salvarFilme(){

        let minhalista = localStorage.getItem("primeflix")
        let filmesSalvos = JSON.parse(minhalista) || []

        const existe = filmesSalvos.some((filmesSalvos)=> filmesSalvos.id === filme.id)

        if(existe){
            toast.warn("Esse Filme já está na lista")
            return;
        }

        filmesSalvos.push(filme)
        localStorage.setItem('primeflix', JSON.stringify(filmesSalvos))
        toast.success("Filme salvo")
    }

    return(
        <div className="filme">
            <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}/>
            <div className="discrisao">
                <h1>{filme.title}</h1>
                <h3>Sinopse:</h3>
                <p>{filme.overview}</p>
                <button onClick={salvarFilme}>Salvar Filme</button>
            </div>

        </div>
    )
}