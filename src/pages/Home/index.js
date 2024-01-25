import './home.css'
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{

        async function loadFilm(){
            const response = await api.get('movie/now_playing', {
                params : {
                    api_key : '37d62fcd00f0adab7d6c72dfccab604b',
                    language : 'pt-br',
                    page : 1,
                }
            })

            setFilmes(response.data.results.slice(0,12))
            setLoading(false)
        }
        loadFilm()
    }, [])

    if(loading){
        return(
            <div className='loading'>
                <div className='load'></div>
                <p>Buscando Filmes</p>
            </div>
        );
    }

    return(
        <div className='container'>
            <div className='top-film'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <p>{filme.title}</p>
                            <img src={`https://image.tmdb.org/t/p/w400/${filme.poster_path}`}/>
                            <Link to={`/filme/${filme.id}`}>Acessar Filme</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}