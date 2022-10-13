import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './style.scss'

const Carousel_Movie = () => {

    const [data, setData] = useState([])
    const [position, setPosition] = useState(1040)
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0f875dab6950849459889f8e8eec207b&language=en-EU&page=1")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setData(data)
                }, 2000)
            })
    }, [])

    const Rigth = () => {
        position == -1072 ? setPosition(1040) : setPosition(position - 264)
    }
    const Left = () => {
        position == 1040 ? setPosition(-1072) : setPosition(position + 264)
    }

    const ViewDescribeMovie = (event) => {
        const b = event?.querySelector('#img')
        const a = event?.querySelector('#cardInfo')
        b.style.marginRight = '300px'
        a.style.opacity = '1'
    }

    const HiddenDescribeMovie = (event) => {
        const b = event?.querySelector('#img')
        const a = event.querySelector('#cardInfo')
        b.style.marginRight = '0px'
        a.style.opacity = '0'
    }


    return (
        <div className="carousel-continer">
            <div style={{ fontSize: 30, color: "#ffff", fontWeight: 800, position: "absolute", top: -50, left: 20 }}>Em Alta</div>
            <div className="icon-container left" onClick={() => Left(283)}>
                <FontAwesomeIcon icon={faChevronLeft} className="icon" />
            </div>
            <div className="icon-container rigth" onClick={() => Rigth(-283)}>
                <FontAwesomeIcon icon={faChevronRight} className="icon" />
            </div>
            <div className="cards-continer" style={{ transform: `translateX(${position}px)` }}>
                {
                    data?.results?.map(data => {
                        return (
                            <div className="cards" onMouseEnter={(event) => ViewDescribeMovie(event.target)} onMouseLeave={(event) => HiddenDescribeMovie(event.target)}  >
                                <img id="img" src={`${baseUrl}${data?.poster_path}`} alt="" />
                                <div id="cardInfo" className="info">
                                    <div style={{ fontSize: '2rem', marginBottom: "20px" }}>
                                        {data?.original_title}
                                    </div>
                                    <div>
                                        {data?.overview?.substring(0, 200)}...
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel_Movie;