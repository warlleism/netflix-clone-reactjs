import React, { useState } from "react";

import { faBell } from "@fortawesome/free-solid-svg-icons"
import { faGift } from "@fortawesome/free-solid-svg-icons"
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import './style.scss'

const NavBar = () => {

    const [Caret, setCaret] = useState(true)

    window.addEventListener('scroll', () => {
        const header = document.getElementById('header')
        if (window.scrollY != 0) {
            header.style.backgroundColor = "#00000082"
        } else {
            header.style.backgroundColor = "transparent"
        }


    })

    return (
        <div className="navbar-container" id="header">
            <div className="left-home-list">
                <img src={require('../../img/logo-netflix.png')} alt="" />
                <ul>
                    <li>Início</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Mais Recentes</li>
                    <li>Minha Lista</li>
                </ul>
            </div>

            <div className="rigth-home-list">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGift} className="icon" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBell} className="icon" />
                    </li>
                    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => setCaret(!Caret)}>
                        <img src={require('../../img/icon3.png')} alt="" />
                        {Caret
                            ?
                            <FontAwesomeIcon
                                icon={faCaretDown} style={{ fontSize: "1rem", marginLeft: 4, color: "#ffff" }} />
                            :
                            <FontAwesomeIcon icon={faCaretUp} style={{ fontSize: "1rem", marginLeft: 4, color: "#ffff" }} />}
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default NavBar;