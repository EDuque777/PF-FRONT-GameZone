import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel"
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useSelector } from "react-redux";
import style from "./Home.module.css"


const Home = () => {
const gameOffer = useSelector(state => state.gameOffer)
const gameComingSoon = useSelector(state => state.gameComingSoon)
const gamesNewReleases = useSelector(state => state.gamesNewReleases)
const gamesTopSellers = useSelector(state => state.gamesTopSellers)
const gameAll = useSelector(state => state.games)

    return(
        <div className={style.container}>
                <NavBar />
                <h1 className="text-gray-letters">HOME</h1>
                {/* <Carousel /> */}
                <h3 className={style.title}> Games coming soon </h3>
                <CardsContainer gameComingSoon={gameComingSoon} />
                <h3 className={style.title}> Top sells </h3>
                <CardsContainer gameComingSoon={gamesTopSellers} />
                <h3 className={style.title}> Game offers </h3>
                <CardsContainer gameComingSoon={gameOffer} />
                <h3 className={style.title}> New releases </h3>
                <CardsContainer gameComingSoon={gamesNewReleases} />
                <h3>old games</h3>
                <CardsContainer gameComingSoon={gameAll} />
        </div>
        
    );
}

export default Home;