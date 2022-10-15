
import Carousel_Movie from "../../components/carousel_movie";
import Home_Movie from "../../components/home_movie";
import NavBar from "../../components/navbar"

import './style.scss'

const Home = () => {

    return (
        <div className="home">
            <NavBar />
            <Home_Movie />
            <Carousel_Movie categoria={"Populares na Netflix"} url={"https://api.themoviedb.org/3/movie/popular?api_key=0f875dab6950849459889f8e8eec207b&language=en-EU&page=1"} />
            <Carousel_Movie categoria={"Em alta"} url={"https://api.themoviedb.org/3/movie/popular?api_key=0f875dab6950849459889f8e8eec207b&language=en-EU&page=2"} />
            <Carousel_Movie categoria={"Minh lista"} url={"https://api.themoviedb.org/3/movie/popular?api_key=0f875dab6950849459889f8e8eec207b&language=en-EU&page=3"} />
        </div>
    )
}

export default Home;