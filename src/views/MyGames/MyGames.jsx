import React, { useEffect } from 'react'
import style from "./MyGames.module.css"
import * as act from "../../redux/actions"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Detail from "../Detail/Detail";

const MyGames = () => {

    //!revisar ruta al detail
    const games = useSelector(state => state.library);
    console.log(games);
    const dataUser = JSON.parse(localStorage.getItem("user"));
    const id = dataUser.id;
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(act.getMyGames(id))
    }, [id])

    const handleSend = (game) => {
        dispatch(act.mandarAReview(game))
    }

    return (
        <div className={style.container}>
        <div className={style.cardContainer}>
          {games && games.map((game) => (
                <div className={style.card} key={game.id}>
                    <img className={style.image} src={game.header_image} alt={game.name} />
                    <h4 className={style.titleName}>{game.name}</h4>
                    <p className={style.titleName}>{game.release_date}</p>
                    <Link to={"/review"}>
                        <button className={style.button} onClick={() => handleSend(game)}>Create Review</button>
                    </Link>
                </div>
          ))}
        </div>
        <div className={style}>
            
        </div>
      </div>
    );
  }

export default MyGames