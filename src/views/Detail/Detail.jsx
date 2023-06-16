import { useEffect, useState } from "react";
import { useHistory  } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, gameDetail } from "../../redux/actions";
import style from "./Detail.module.css";

//! dependeiendo el tipo rederiza otro, type dlc o type game
//! REVISAR Y FILTRAR POR SUCCESS TRUE, FALSE RETIRAR
const Detail = (props) => {

  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDetail);

  useEffect(() => {
    if (props.match && props.match.params && props.match.params.id) {
    const id = props.match.params.id;
      dispatch(gameDetail(id))  
    }
 
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, props.match]);

  return (
    game === undefined || game === null ? (
      <div>
        <p>Cargando...</p>
      </div>
    ) : (
      <div className={style.info}>
      <h1 className={style.name}>{game && game[props.match.params.id].data.name}</h1>
      <img className={style.img} src={game && game[props.match.params.id].data.header_image} alt="Game" />
      <h2>
        <strong>Edad mínima: </strong>
        {game && game[props.match.params.id].data.required_age}
      </h2>
      <h2>
        <strong>Descripción: </strong>
        {game && game[props.match.params.id].data.detailed_description}
      </h2>
      <h2>
        <strong>Sobre el juego: </strong>
        {game && game[props.match.params.id].data.about_the_game}
      </h2>
      <h2>
        <strong>Desarrolladores: </strong>
        {game && game[props.match.params.id].data.developers}
      </h2>
      <h2>
        <strong>Idiomas: </strong>
        {game && game[props.match.params.id].data.supported_languages}
      </h2>
      <h2>
        <strong>ID :</strong>
        {game && game[props.match.params.id].data.steam_appid}
      </h2>
    </div>
    )
  )
};

export default Detail;
