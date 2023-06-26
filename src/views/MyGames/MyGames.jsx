import React, { useEffect } from 'react'
import style from "./MyGames.module.css"
import * as act from "../../redux/actions"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MyGames = () => {

    const games = useSelector(state => state.library)
    const dataUser = JSON.parse(localStorage.getItem("user"));
    const id = dataUser.id
    const dispatch = useDispatch()
    
    console.log(games);

    useEffect(() => {
        dispatch(act.getMyGames(id))
    }, [id])

    return (
        <div className='Container'>
            <h2 className={style.title}>My Games:</h2>
            <div className='VistaJuegos'>
                {games && games.map((game) => (
                    <div key={game.id}>
                        <img src={game.header_image} alt={game.name}></img>
                        <Link to={`/detail/${id}`}><h4 className={style.title} >{game.name}</h4></Link>
                        <Link to={"/review"}><button className={style.button}>Go to new Review</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )}

export default MyGames