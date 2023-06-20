import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel"
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filters from "../../components/Filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css"
import * as act from "../../redux/actions"


const Home = () => {

const dispatch = useDispatch()
const gameOffer = useSelector(state => state.gameOffer)
//const gameComingSoon = useSelector(state => state.gameComingSoon)
const gamesNewReleases = useSelector(state => state.gamesNewReleases)
const gamesTopSellers = useSelector(state => state.gamesTopSellers)
const games = useSelector(state => state.games)
//console.log(games);

    useEffect(() => {
        dispatch(act.getGames())
        dispatch(act.getGamesOffer())
        dispatch(act.getGamesNewReleases())
        dispatch(act.getGamesComingSoon())
        dispatch(act.getGamesTopSellers())
    }, [dispatch])



    return(
        <div className={style.container}>
                <NavBar />
                <h1 className="text-gray-letters">HOME</h1>
                <Carousel /> 
                <div>
                    <input className={style.search} placeholder="   search..."type="text" />
                    <Filters/>
                </div>
                <h3 className={style.title}> Top sells </h3>
                <CardsContainer gameComingSoon={gamesTopSellers} />
                <h3 className={style.title}> Game offers </h3>
                <CardsContainer gameComingSoon={gameOffer} />
                <h3 className={style.title}> New releases </h3>
                <CardsContainer gameComingSoon={gamesNewReleases} />
                <h3>All Games</h3>
                <CardsContainer gameComingSoon={games} />
        </div>
        
    );
}

export default Home;