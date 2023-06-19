import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, gameDetail } from "../../redux/actions";
import style from "./Detail.module.css";
import { PacmanLoader } from "react-spinners";
import NavBar from "../../components/NavBar/NavBar"

const Detail = (props) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDetail);
  const isLoading = game === undefined || game === null;

  useEffect(() => {
    if (props.match && props.match.params && props.match.params.id) {
      const id = props.match.params.id;
      dispatch(gameDetail(id));
    }

    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, props.match]);

  // Elimina etiquetas HTML y caracteres especiales con una regex
  function sanitizeText(text) {
    if (typeof text === "string") {
      // Elimina etiquetas HTML y caracteres especiales
      text = text.replace(/<\/?[^>]+(>|$)/g, "");
  
      // Elimina asteriscos
      text = text.replace(/\*\*/g, "");
  
      return text;
    }
    return text;
  }
  

  return (
    <div className={style.info}>
    <NavBar />
      {isLoading ? (
        <div className={style.loading}>
          <PacmanLoader color="#123abc" size={80} speedMultiplier={1} />
        </div>
      ) : (
        <>
          <h1 className={style.name} translate="no">
            {sanitizeText(game[props.match.params.id].data.name)}
          </h1>
          <br></br>
          <img
            className={style.img}
            src={game[props.match.params.id].data.header_image}
            alt="Game"
          />
          <br></br>
          <p>{sanitizeText(game[props.match.params.id].data.detailed_description)}</p>
          <h2>
          <br></br>
            <strong>Requerimientos </strong>
          </h2>
          <p>{sanitizeText(game[props.match.params.id].data.pc_requirements.minimum)}</p>
          <h2>
          <br></br>
            <strong>Idiomas </strong> 
          </h2>
          <h2>
          {sanitizeText(game[props.match.params.id].data.supported_languages)}
          </h2>
          <br></br>
          <h2>
            <strong>Edad mínima </strong>
          </h2>
          <p>{game[props.match.params.id].data.required_age}</p>
          <br></br>
          <h2>
          <h2>
            <strong>Desarrolladores </strong>
          </h2>
          <p translate="no">{sanitizeText(game[props.match.params.id].data.developers)}</p>
          <br></br>
            <strong>ID :</strong>
          </h2>
          <p>{game[props.match.params.id].data.steam_appid}</p>
          <br></br>
        </>
      )}
    </div>
  );
};


export default Detail;
