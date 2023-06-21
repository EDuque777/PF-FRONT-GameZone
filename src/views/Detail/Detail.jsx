import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, gameDetail } from "../../redux/actions";
import style from "./Detail.module.css";
import { PacmanLoader } from "react-spinners";
import * as act from "../../redux/actions";

const Detail = (props) => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDetail);
  const isLoading = game === undefined || game === null;
  const cart = useSelector(state => state.cart)
  // const categories = game && game[props.match.params.id]?.data.categories;
  const genres = game && game[props.match.params.id]?.data.genres;
  const [videoUrl, setVideoUrl] = useState("");
  const categoriesLimited = game && game[props.match.params.id]?.data.categories.slice(0, 3);
  
  useEffect(() => {
    if (props.match && props.match.params && props.match.params.id) {
      const id = props.match.params.id;
      dispatch(gameDetail(id))
        .then(() => {
          const video = game[id]?.data.movies?.[0]?.mp4?.max || "";
          setVideoUrl(video);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setVideoUrl("");
    }

    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (game && props.match.params.id) {
      const id = props.match.params.id;
      const video = game[id]?.data.movies?.[0]?.mp4?.max || "ssdds";
      setVideoUrl(video);
    }
  }, [game, props.match.params.id]);
  
  

  function sanitizeText(text) {
    if (typeof text === "string") {
      text = text.replace(/<\/?[^>]+(>|$)/g, "");
      text = text.replace(/\*\*/g, "");
      return text;
    }
    return text;
  }

  const handleAdd = () => {
    dispatch(act.addCart({id: bkId, image: img, name:name , price: isNaN(price) ? 0 : price}));
}

  const price = game && (game[props.match.params.id]?.data?.price_overview?.initial)
  //const gamePrice = game && (game[props.match.params.id]?.data?.price_overview?.final_formatted);
  const img = game && game[props.match.params.id].data.header_image;
  const bkId = game && game[props.match.params.id].data.steam_appid;
  const name = game && game[props.match.params.id].data.name

  const handleBack = () => {
    history.push("/home");
  };

  return (
    <div className={style.info}>
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
                  {`Buy ${sanitizeText(game[props.match.params.id].data.name)}`}
                </p>
                <div className={style.div_comprar}>
                <p className={style.texto_precio}>
                  {`Price: ${
                    sanitizeText(game[props.match.params.id].data.price_overview?.final_formatted) ||
                    "Free"
                  }`}
                </p>
                  <button onClick={() => handleAdd(game[props.match.params.id].data)} className={style.boton}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className={style.container_imagenes}>
            <div className={style.image}>
              <img
                className={style.img}
                src={game[props.match.params.id].data.header_image}
                alt="Game"
              />
            </div>
            
            <div className={style.container_screenshots}>
  {videoUrl && (
    <video className={style.video} controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
  )}
  {!videoUrl && game &&
    game[props.match.params.id]?.data.screenshots.slice(0, 4).map((screenshot, index) => (
      <div key={index} className={style[`container_screenshots${index + 1}`]}>
        <img
          className={style.img}
          src={screenshot.path_full}
          alt={`Screenshot ${index + 1}`}
        />
      </div>
    ))}
          {videoUrl && game &&
            game[props.match.params.id]?.data.screenshots.slice(0, 3).map((screenshot, index) => (
              <div key={index} className={style[`container_screenshots${index + 1}`]}>
                <img
                  className={style.img}
                  src={screenshot.path_full}
                  alt={`Screenshot ${index + 1}`}
                />
              </div>
            ))}
        </div>

          </div>
          </div>



          <div className={style.detail_container}>

            
            <div className={style.detail_left}>
              <h2>
                <strong>Requirements </strong>
              </h2>
              <p>{sanitizeText(game[props.match.params.id].data.pc_requirements.minimum)}</p>
              <p>{sanitizeText(game[props.match.params.id].data.pc_requirements.recommended)}</p>
              <h2>
                <strong>Languages </strong>
              </h2>
              <p>{sanitizeText(game[props.match.params.id].data.supported_languages)}</p>
              <h2>
                <strong>Minimum age </strong>
              </h2>
              <p>{game[props.match.params.id].data.required_age}</p>
              <h2>
                <strong>Developers </strong>
              </h2>
              <p translate="no">{sanitizeText(game[props.match.params.id].data.developers)}</p>
            </div>




            <div className={style.detail_rigth}>
              <h2>
                <strong>Categories</strong>
              </h2>
              {categoriesLimited && categoriesLimited.map((category) => (
                <p key={category.id}>{sanitizeText(category.description)}</p>
              ))}
              <h2>
                <strong>Genres </strong>
              </h2>
              {genres && genres.map((genre) => (<p key={genre.id}>{sanitizeText(genre.description)}</p>))}
              <h2>
                <strong>Released date </strong>
              </h2>
              <p>{game[props.match.params.id].data.release_date.date}</p>
              <h2>
                <strong>ID :</strong>
              </h2>
              <p>{game[props.match.params.id].data.steam_appid}</p>
            </div>
              
            </div>
          </div>
      )}
    </div>
  );
};

export default Detail;




