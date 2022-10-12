import React, { useEffect, useState } from "react";
import Spinner from "../spinner";
import './style.scss'


const Home_Movie = () => {

    const [data, setData] = useState([])
    const [random, setRandom] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const RandomNumer = () => {
        setRandom(parseInt(Math?.random() * (20 - 1) + 1))
    }

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0f875dab6950849459889f8e8eec207b&language=en-EU&page=1")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setData(data)
                }, 2000)
            })
    }, [])

    useEffect(() => {
        RandomNumer(1, 20)
    }, [data])

    return (
        <div className="home_movie-container"
            style={{
                backgroundImage: `url(${baseUrl}${data?.results?.[random]?.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: "center"
            }}>
            {
                data == 0 ?
                    <Spinner />
                    :
                    <div className="nome-titulo-container">
                        <div className="titulo">{data?.results?.[random]?.original_title}</div>
                        <div className="descricao">{data?.results?.[random]?.overview?.substring(0, 200)}...</div>
                    </div>
            }

        </div>
    )
}

export default Home_Movie;