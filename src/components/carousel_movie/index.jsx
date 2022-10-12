import React, { useEffect, useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss'

const Carousel_Movie = () => {

    const [data, setData] = useState([])
    const [position, setPosition] = useState(0)
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0f875dab6950849459889f8e8eec207b&language=en-EU&page=1")
            .then((res) => res.json())
            .then((data) => {
                setInterval(() => {
                    setData(data)
                }, 2000)
            })

    }, [])

    const Rigth = () => {
        position == -2547 ? setPosition(0) : setPosition(position - 283)
    }
    const Left = async () => {
        position == 0 ? setPosition(-2547) : setPosition(position + 283)
    }

    return (
        <div className="carousel-continer">
            {console.log(position)}
            <div style={{ fontSize: 30, color: "#ffff", fontWeight: 800, position: "absolute", top: -50, left: 20 }}>Em Alta</div>
            <div className="icon-container left" onClick={() => Left()}>
                <FontAwesomeIcon icon={faChevronLeft} className="icon" />
            </div>
            <div className="icon-container rigth" onClick={() => Rigth()}>
                <FontAwesomeIcon icon={faChevronRight} className="icon" />
            </div>
            <div className="cards-continer" style={{ transform: `translateX(${position}px)` }}>
                {
                    data?.results?.map(data => <img src={`${baseUrl}${data?.poster_path}`} alt="" />)
                }
            </div>
        </div>
    )
}

export default Carousel_Movie;