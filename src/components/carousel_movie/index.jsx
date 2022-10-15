import React, { useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './style.scss'

const Carousel_Movie = (props) => {

    const [data, setData] = useState([])
    const [position, setPosition] = useState(1060)
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        fetch(props.url)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setData(data)
                }, 2000)
            })
    }, [])

    const Rigth = () => {
        position == -1052 ? setPosition(1060) : setPosition(position - 264)
    }
    const Left = () => {
        position == 1060 ? setPosition(-1052) : setPosition(position + 264)
    }

    const ViewDescribeMovie = (event) => {
        const a = event?.querySelector('#cardInfo')
        a.style.opacity = '1'
        a.style.width = '350px'
    }

    const HiddenDescribeMovie = (event) => {
        const a = event.querySelector('#cardInfo')
        a.style.opacity = '0'
        a.style.width = '0px'

    }

    return (
        <div className="carousel-continer">
            <div style={{ fontSize: 30, color: "#ffff", fontWeight: 800, position: "absolute", top: -50, left: 20 }}>{props.categoria}</div>
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
                            <div className="cards" onMouseEnter={(event) => ViewDescribeMovie(event.target)} onMouseLeave={(event) => HiddenDescribeMovie(event.target)}>
                                <img className="img" id="img" src={`${baseUrl}${data?.poster_path}`} alt="" />
                                <div id="cardInfo" className="info">
                                    <div style={{ width: "330px", fontSize: '2rem', marginBottom: "20px" }}>
                                        {data?.original_title}
                                    </div>
                                    <div style={{ width: "330px", margin: "0 auto" }}>
                                        {data?.overview?.substring(0, 150)}...
                                    </div>
                                    <div className="continer-info-botoes" >
                                        <div className="botao-assistir" >
                                            <FontAwesomeIcon icon={faPlay} style={{ fontSize: '20px', marginRight: "10px" }} />
                                            Assistir
                                        </div>
                                        <div className="container-icon">
                                            <FontAwesomeIcon icon={faPlus} className="icon-info" />
                                        </div>
                                        <div className="container-icon">
                                            <FontAwesomeIcon icon={faThumbsUp} className="icon-info" />
                                        </div>
                                        <div className="container-icon" onClick={() => console.log('teste')}>
                                            <FontAwesomeIcon icon={faThumbsDown} className="icon-info" />
                                        </div>
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