import React, { useEffect, useState } from "react"
import NavBar from "../../components/NavBar/NavBar"
import Carousel from "../../components/Carousel/Carousel"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useDispatch, useSelector } from "react-redux"
import style from "./Home.module.css"
import * as act from "../../redux/actions"

const Home = () => {

const dispatch = useDispatch()
const gameOffer = useSelector(state => state.gameOffer)
const gamesNewReleases = useSelector(state => state.gamesNewReleases)
const gamesTopSellers = useSelector(state => state.gamesTopSellers)
const games = useSelector(state => state.games)
const [name, setName] = useState("")
//console.log(games)

    useEffect(() => {
        dispatch(act.getGames())
        dispatch(act.getGamesOffer())
        dispatch(act.getGamesNewReleases())
        dispatch(act.getGamesComingSoon())
        dispatch(act.getGamesTopSellers())
    }, [dispatch])

    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleButton = (e) => {
        console.log(e);
        dispatch(act.getByName(name))
    }

    const handleKeyDown = (e) => {
        if (e.key === "enter") {
            handleButton()
        }
    }

    return(
        <div className={style.container}>
                <Carousel /> 
                <div>
                    <input className={style.search} placeholder="   search..."type="text" onChange={e => handleChange(e)}  onKeyDown={handleKeyDown}/>
                    <button  onClick={(e) => {handleButton(e)}} > buscar</button>
                </div>
                <h3 className={style.title}>All Games</h3>
                <CardsContainer gameComingSoon={games} />
                <h3 className={style.title}> Top sells </h3>
                <CardsContainer gameComingSoon={gamesTopSellers} />
                <h3 className={style.title}> Game offers </h3>
                <CardsContainer gameComingSoon={gameOffer} />
                <h3 className={style.title}> New releases </h3>
                <CardsContainer gameComingSoon={gamesNewReleases} />
        </div>
        
    );
}

export default Home;