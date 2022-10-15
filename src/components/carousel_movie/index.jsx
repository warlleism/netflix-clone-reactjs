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

    const ViewDescribeMovie = (event, opcity, width, margin) => {
        const a = event?.querySelector('#cardInfo')
        a.style.opacity = opcity
        event.style.marginLeft = `-${margin}px`
        a.style.width = `${width}px`
    }

    return (
        <div className="carousel-continer">
            <div style={{ fontSize: 30, color: "#ffff", fontWeight: 800, marginLeft: 12 }}>{props.categoria}</div>
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
                            <div className="cards" onMouseEnter={(event) => ViewDescribeMovie(event.target, 1, 360, 130)} onMouseLeave={(event) => ViewDescribeMovie(event.target, 0, 0, 0)}>
                                <img className="img" id="img" src={`${baseUrl}${data?.poster_path}`} alt="" />
                                <div id="cardInfo" className="info">
                                    <div style={{  width: "300px", fontSize: '1.6rem', marginLeft: 10 }}>
                                        {data?.original_title}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', width: "300px", marginLeft: 10}}>
                                        {data?.overview?.substring(0, 140)}...
                                    </div>
                                    <div className="continer-info-botoes" >
                                        <div className="botao-assistir" >
                                            <FontAwesomeIcon icon={faPlay} style={{ fontSize: '20px', marginRight: "8px" }} />
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