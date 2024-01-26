import React, { useEffect, useState } from 'react'
import './fav.css'
import { toast } from 'react-toastify'
export default function Fav(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const localFilmes = localStorage.getItem('primeflix')
        setFilmes(JSON.parse(localFilmes) || [])

    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id)
        })
        setFilmes(filtroFilmes)
        localStorage.setItem(('primeflix'), JSON.stringify(filtroFilmes))
        toast.success("Filme Removido Com sucesso")
    }

    return (
    <main className='fav'>
        <h1>Meus Favoritos</h1>
        <ul>
            {filmes.map((filme) => {
                return(
                    <li key={filme.id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`}/>
                        <div className='fav-cont'>
                            <h4>{filme.title}</h4>
                            <p>{filme.overview}</p>
                            <a href={`/filme/${filme.id}`}>Mais detalhes</a>  
                            <button onClick={() => excluirFilme(filme.id)}>Excluir dos favoritos</button>
                        </div>
                    </li>
                )
            })}
        </ul>

    </main>
)
}
