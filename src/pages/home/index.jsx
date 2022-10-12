
import Carousel_Movie from "../../components/carousel_movie";
import Home_Movie from "../../components/home_movie";
import NavBar from "../../components/navbar"

import './style.scss'

const Home = () => {

    return (
        <div className="home"> 
            <NavBar />
            <Home_Movie />
            <Carousel_Movie />
        </div>
    )
}

export default Home;