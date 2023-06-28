import React, { useEffect } from 'react'
import style from "./MyGames.module.css"
import * as act from "../../redux/actions"
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Detail from "../Detail/Detail";

const MyGames = () => {

    //!revisar ruta al detail
    const games = useSelector(state => state.library);
    console.log(games);
    const dataUser = JSON.parse(localStorage.getItem("user"));
    const id = dataUser.id;
    console.log(dataUser);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(act.getMyGames(id))
    }, [id])

    const handleSend = (game) => {
        dispatch(act.mandarAReview(game))
    }

    const handleEdit = () => {
      
    }
    
    //! agregar la ruta al detail
    return (
        <div className={style.container}>
        <div className={style.cardContainer}>
          {games && games.map((game) => (
                <div className={style.card} key={game.id}>
                  <Link to={`detail/${game.id}`}>
                  <img className={style.image} src={game.header_image} alt={game.name} />
                  </Link>
                  <h4 className={style.titleName}>{game.name}</h4>
                  <p className={style.titleName}>{game.release_date}</p>
                  <div>
                  <Link to={"/review"}>
                      <button className={style.button} onClick={() => handleSend(game)}>Create Review</button>
                  </Link>
                  <Link to={"/reviews"}>
                      <button className={style.button} onClick={() => handleEdit()}>Edit Review</button>
                  </Link>
                  </div>
                   

                </div>
          ))}
        </div>
        <div className={style}>
            
        </div>
      </div>
    );
  }

export default MyGames