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
    const [position, setPosition] = useState(0)
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
        position == -28.8 ? setPosition(0) : setPosition(position - 4.8)
    }
    const Left = () => {
        position == 0 ? setPosition(-28.8) : setPosition(position + 4.8)
    }

    const ViewDescribeMovie = (event, opcity, width, translate, margin) => {
        const a = event?.querySelector('#cardInfo');
        event.style.transform = `translateX(-${translate}px)`;
        a.style.marginRight = `-${margin}px`
        a.style.opacity = opcity;
        a.style.width = `${width}px`;
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
            <div className="cards-continer" style={{ transform: `translateX(${position}%)` }}>
                {
                    data?.results?.map(data => {
                        return (
                            <div className="cards" onMouseEnter={(event) => ViewDescribeMovie(event.target, 1, 360, 180, 180)} onMouseLeave={(event) => ViewDescribeMovie(event.target, 0, 0, 0, 0)}>
                                <img className="img" id="img" src={`${baseUrl}${data?.poster_path}`} alt="" />
                                <div id="cardInfo" className="info">
                                    <div style={{ width: "300px", fontSize: '1.6rem' }}>
                                        {data?.original_title}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', width: "300px" }}>
                                        {data?.overview?.substring(0, 140)}...
                                    </div>
                                    <div className="continer-info-botoes" >
                                        <div className="botao-assistir" >
                                            <FontAwesomeIcon icon={faPlay} style={{ fontSize: '20px' }} />
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