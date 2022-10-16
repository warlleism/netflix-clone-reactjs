import React, { useEffect, useState } from "react";
import Spinner from "../spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import './style.scss'


const Home_Movie = () => {

    const [data, setData] = useState([])
    const [random, setRandom] = useState([])
    const [randomRate, setRandomRate] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const RandomNumer = (min, max) => {
        setRandom(parseInt(Math?.random() * (max - min) + min))
    }
    const RandomRate = (min, max) => {
        setRandomRate(parseInt(Math?.random() * (max - min) + min))
    }

    useEffect(() => {
        RandomNumer(1, 20)
        RandomRate(30, 100)

        fetch("https://api.themoviedb.orgzxx/3/movie/popular?api_key=0f875dab6950849459889f8e8eec207b&language=en-EU&page=1")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setData(data)
                }, 2000)
            })
    }, [])

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
                        <div className="descricao"><strong style={{ color: "#04c304" }}>{randomRate}% relevante </strong>{data?.results?.[random]?.overview?.substring(0, 200)}...</div>
                        <div className="info-content">
                            <div className="assistir"><FontAwesomeIcon icon={faPlay} className="icon" style={{ marginRight: 8 }} /> Assistir</div>
                            <div className="mais-informacoes"><FontAwesomeIcon icon={faCircleInfo} className="icon" /> Mais informações</div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Home_Movie;