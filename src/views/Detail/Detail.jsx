import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, gameDetail } from "../../redux/actions";
import style from "./Detail.module.css";

const Detail = (props) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDetail);
  console.log(game)


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.match && props.match.params && props.match.params.id) {
      const id = props.match.params.id;
      setLoading(true);
      dispatch(gameDetail(id))
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    // Limpia los detalles cuando el componente se desmonta
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, props.match]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!game) {
    return <div>No se encontró el juego.</div>;
  }

  return (
    <div className={style.info}>
      <h1 className={style.name}>{game.name}</h1>
      <img className={style.img} src={game.header_image} alt="Game" />
      <h2>
        <strong>Edad mínima: </strong>
        {game.required_age}
      </h2>
      <h2>
        <strong>Descripción: </strong>
        {game.detailed_description}
      </h2>
      <h2>
        <strong>Sobre el juego: </strong>
        {game.about_the_game}
      </h2>
      <h2>
        <strong>Desarrolladores: </strong>
        {game.developers}
      </h2>
      <h2>
        <strong>Idiomas: </strong>
        {game.supported_languages}
      </h2>
      <h2>
        <strong>ID :</strong>
        {game.steam_appid}
      </h2>
    </div>
  );
};

export default Detail;
