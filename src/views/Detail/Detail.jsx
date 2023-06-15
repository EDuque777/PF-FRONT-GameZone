import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getDetail } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = (props) => {
    const dispatch = useDispatch();
    const game = useSelector((state) => state.game);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id = props.match.params.id;
        setLoading(true);
        dispatch(getDetail(id))
          .then(() => {
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
    
        // Limpia los detalles cuando el componente se desmonta
        return () => {
          dispatch(clearDetail());
        };
      }, [dispatch, props.match.params.id]);

      if (loading) {
        return <div>Cargando...</div>; 
      }
    
      if (!game) {
        return <div>No se encontró el juego.</div>; 
      }

      return (
        <div>
            <h1>Nombre: {game.name}</h1>
            <img className={style.header_image} src={imageURL} alt="Game" />
            <h3>Edad requerida: {required_age}</h3>
            <h3>Descripción: {detailed_description}</h3>
            <h3>Sobre el juego: {about_the_game}</h3>
            <h3>Desarrolladores: {developers}</h3>
            <h3>Plataformas: {platforms}</h3>
            <h4>ID: {game.id}</h4>
        </div>
      )

}

export default Detail;