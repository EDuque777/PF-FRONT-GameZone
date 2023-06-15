import { useEffect, useState } from "react";
import { useHistory  } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getDetail } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const game = useSelector((state) => state.gameDetail);
    const gameHC = useSelector((state) => state.gameDetail)
    console.log(gameHC);
    // const [loading, setLoading] = useState(true);

    const handleBack = () => {
      //dispatch(clearDetail())
      history.push("/home")
    }

    // useEffect(() => {
    //     const id = props.match.params.id;
    //     setLoading(true);
    //     dispatch(gameDetail(id))
    //       .then(() => {
    //         setLoading(false);
    //       })
    //       .catch(() => {
    //         setLoading(false);
    //       });

    // Limpia los detalles cuando el componente se desmonta

    //     return () => {
    //       dispatch(clearDetail());
    //     };
    //   }, [dispatch, props.match.params.id]);

    //   if (loading) {
    //     return <div>Cargando...</div>; 
    //   }
    


    //   if (!gameHC) {
    //     return <div>No se encontró el juego.</div>; 
    //   }else{
        
    //   }

      return (
        <div className={style.info}>
            <button onClick={() => {handleBack()}}> Back </button>
            <h1 className={style.name}>{gameHC.name}</h1>
            <img className={style.img} src={gameHC.header_image} alt="Game" />
            <h2> <strong>Edad minima: </strong> {gameHC.required_age}</h2>
            <h2> <strong>Descripción: </strong>{gameHC.detailed_description}</h2>
            <h2> <strong>Sobre el juego: </strong> {gameHC.about_the_game}</h2>
            <h2> <strong>Desarrolladores: </strong> {gameHC.developers}</h2>
            <h2> <strong>Idiomas: </strong> {gameHC.supported_languages}</h2>
            <h2> <strong>ID :</strong> {gameHC.steam_appid}</h2>
        </div>
      )

}

export default Detail;

