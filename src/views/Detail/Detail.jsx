import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, gameDetail } from "../../redux/actions";
import style from "./Detail.module.css";
import { PacmanLoader } from "react-spinners";
import NavBar from "../../components/NavBar/NavBar";
import { useHistory, useLocation } from "react-router-dom";
import Card from "../../components/Card/Card";
import * as act from "../../redux/actions";
import Swal from "sweetalert2"

const Detail = (props) => {

  const {id, price, name, image} = props

  const history = useHistory();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDetail);
  const isLoading = game === undefined || game === null;
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    if (props.match && props.match.params && props.match.params.id) {
      const id = props.match.params.id;
      dispatch(gameDetail(id));
    }

    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, props.match]);

  function sanitizeText(text) {
    if (typeof text === "string") {
      text = text.replace(/<\/?[^>]+(>|$)/g, "");
      text = text.replace(/\*\*/g, "");
      return text;
    }
    return text;
  }

  const handleAdd = (game) => {
    const cartList = cart.find( game => game.id === id)
        if (cartList) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'el juego ya se encuentra en el carrito',
                showConfirmButton: false,
                timer: 2000
               }) 
        } else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Juego agregado correctamente",
                showConfirmButton: false,
                timer: 2000
            })
    dispatch(act.addCart(game));
  };
}

  const handleBack = () => {
    history.push("/home");
  };

  return (
    <div className={style.info}>
      <NavBar />
      {isLoading ? (
        <div className={style.loading}>
          <PacmanLoader color="#123abc" size={80} speedMultiplier={1} />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.container_juego}>
            <div className={style.container_texto}>
              <div className={style.name_margen}>
                <h1 className={style.name} translate="no">
                  {sanitizeText(game[props.match.params.id].data.name)}
                </h1>
              </div>
              <p className={style.descripcion}>
                {sanitizeText(game[props.match.params.id].data.detailed_description)}
              </p>
              <div className={style.comprar}>
                <p className={style.texto_comprar}>
                  {`Comprar ${sanitizeText(game[props.match.params.id].data.name)}`}
                </p>
                <div className={style.div_comprar}>
                  <p className={style.texto_precio}>
                    {`Precio ${sanitizeText(game[props.match.params.id].data.price_overview)}`}
                  </p>
                  <button onClick={() => handleAdd(game[props.match.params.id].data)} className={style.boton}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className={style.image}>
              <img
                className={style.img}
                src={game[props.match.params.id].data.header_image}
                alt="Game"
              />
            </div>
          </div>

          <div className={style.detail_container}>
            <div className={style.detail_left}>
              <h2>
                <strong>Requisitos </strong>
              </h2>
              <p>{sanitizeText(game[props.match.params.id].data.pc_requirements.minimum)}</p>
              <h2>
                <strong>Idiomas </strong>
              </h2>
              <p>{sanitizeText(game[props.match.params.id].data.supported_languages)}</p>
              <h2>
                <strong>Edad mínima </strong>
              </h2>
              <p>{game[props.match.params.id].data.required_age}</p>
              <h2>
                <strong>Desarrolladores </strong>
              </h2>
              <p translate="no">{sanitizeText(game[props.match.params.id].data.developers)}</p>
              <h2>
                <strong>ID :</strong>
              </h2>
              <p>{game[props.match.params.id].data.steam_appid}</p>
            </div>
            <div className={style.detail_rigth}>
              <div className={style.detail_uno}>
                <strong>Classification</strong>
              </div>
              <div className={style.detail_dos}>
                <strong>Achievements</strong>
              </div>
              <div className={style.detail_tres}>
                <strong>Metacritic</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
