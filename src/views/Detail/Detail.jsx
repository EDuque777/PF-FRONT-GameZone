// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { clearDetail, gameDetail } from "../../redux/actions";
// import style from "./Detail.module.css";
// import { PacmanLoader } from "react-spinners";
// import * as act from "../../redux/actions";


// import Rating from '../../components/Rating/Rating';

// // const Opinion = ({ rating }) => {
// //   return (
// //     <div className={style.opinion1}>
// //       <h1>opinion</h1>
// //       <Rating rating={4} /> 
// //     </div>
// //   );
// // };
// //


// const Detail = (props) => {
  
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const game = useSelector((state) => state.gameDetail);
//   const isLoading = game === undefined || game === null;
//   //const cart = useSelector(state => state.cart)
//   // const categories = game && game[props.match.params.id]?.data.categories;
//   const genres = game && game[props.match.params.id]?.data.genres;
//   const [videoUrl, setVideoUrl] = useState("");
//   const categoriesLimited = game && game[props.match.params.id]?.data.categories?.slice(0, 3);
//   //const categoriesLimited = game && game[props.match.params.id]?.data.categories.slice(0, 3);
//   useEffect(() => {
//     if (props.match && props.match.params && props.match.params.id) {
//       const id = props.match.params.id;
//       dispatch(gameDetail(id))
//         .then(() => {
//           const video = game[id]?.data.movies?.[0]?.mp4?.max || "";
//           setVideoUrl(video);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       setVideoUrl("");
//     }

//     return () => {
//       dispatch(clearDetail());
//     };
//   }, [dispatch, props.match.params.id]);

//   useEffect(() => {
//     if (game && props.match.params.id) {
//       const id = props.match.params.id;
//       const video = game[id]?.data.movies?.[0]?.mp4?.max || "ssdds";
//       setVideoUrl(video);
//     }
//   }, [game, props.match.params.id]);
  
  

//   function sanitizeText(text) {
//     if (typeof text === "string") {
//       text = text.replace(/<\/?[^>]+(>|$)/g, "");
//       text = text.replace(/\*\*/g, "");
//       return text;
//     }
//     return text;
//   }

//   const handleAdd = () => {
//     dispatch(act.addCart({id: bkId, image: img, name:name , price: isNaN(price) ? 0 : price}));
//   }

//   const handleAddWhish = () => {
//     dispatch(act.addWhishList({ id: bkId, price: isNaN(price) ? 0 : price, name:name, image: img }));
//   };

//   const price = game && (game[props.match.params.id]?.data?.price_overview?.initial)
//   //const gamePrice = game && (game[props.match.params.id]?.data?.price_overview?.final_formatted);
//   const img = game && game[props.match.params.id].data.header_image;
//   const bkId = game && game[props.match.params.id].data.steam_appid;
//   const name = game && game[props.match.params.id].data.name

//   const handleBack = () => {
//     history.push("/home");
//   };

//   return (
//     <div className={style.info}>
//       {isLoading ? (
//         <div className={style.loading}>
//           <PacmanLoader color="#123abc" size={80} speedMultiplier={1} />
//         </div>
//       ) : (
//         <div className={style.container}>
//           <div className={style.container_juego}>
//             <div className={style.container_texto}>
//               <div className={style.name_margen}>
//                 <h1 className={style.name} translate="no">
//                   {sanitizeText(game[props.match.params.id].data.name)}
//                 </h1>
//               </div>
//               <p className={style.descripcion}>
//                 {sanitizeText(game[props.match.params.id].data.detailed_description)}
//               </p>
//               <div className={style.comprar}>
//                 <p className={style.texto_comprar}>
//                   {`Buy ${sanitizeText(game[props.match.params.id].data.name)}`}
//                 </p>
//                 <div className={style.div_comprar}>
//                 <p className={style.texto_precio}>
//                   {`Price: ${
//                     sanitizeText(game[props.match.params.id].data.price_overview?.final_formatted) ||
//                     "Free"
//                   }`}
//                 </p>
//                 <p className={style.texto_boton}>

//                   <button onClick={() => handleAdd(game[props.match.params.id].data)} className={style.buttonadd}>
//                     Add to Cart
//                   </button>
//                   <button onClick={() => handleAddWhish(game[props.match.params.id].data)} className={style.buttonWish}>
//                     Add to WhishList
//                   </button>
//                 </p>
//                 </div>
                
//               </div>
//             </div>
//             <div className={style.container_imagenes}>
//             <div className={style.image}>
//               <img
//                 className={style.img}
//                 src={game[props.match.params.id].data.header_image}
//                 alt="Game"
//               />
//             </div>
            
//             <div className={style.container_screenshots}>
//   {videoUrl && (
//     <video className={style.video} controls>
//       <source src={videoUrl} type="video/mp4" />
//     </video>
//   )}
//   {!videoUrl && game &&
//     game[props.match.params.id]?.data.screenshots?.slice(0, 4).map((screenshot, index) => (
//       <div key={index} className={style[`container_screenshots${index + 1}`]}>
//         <img
//           className={style.img}
//           src={screenshot.path_full}
//           alt={`Screenshot ${index + 1}`}
//         />
//       </div>
//     ))}
//           {videoUrl && game &&
//             game[props.match.params.id]?.data.screenshots?.slice(0, 3).map((screenshot, index) => (
//               <div key={index} className={style[`container_screenshots${index + 1}`]}>
//                 <img
//                   className={style.img}
//                   src={screenshot.path_full}
//                   alt={`Screenshot ${index + 1}`}
//                 />
//               </div>
//             ))}
//         </div>

//           </div>
//           </div>



//           <div className={style.detail_container}>

            
//             <div className={style.detail_left}>
//               <h2>
//                 <strong>Requirements </strong>
//               </h2>
//               <p>{sanitizeText(game[props.match.params.id].data.pc_requirements.minimum)}</p>
//               <p>{sanitizeText(game[props.match.params.id].data.pc_requirements.recommended)}</p>
//               <h2>
//                 <strong>Languages </strong>
//               </h2>
//               <p>{sanitizeText(game[props.match.params.id].data.supported_languages)}</p>
//               <h2>
//                 <strong>Minimum age </strong>
//               </h2>
//               <p>{game[props.match.params.id].data.required_age}</p>
//               <h2>
//                 <strong>Developers </strong>
//               </h2>
//               <p translate="no">{sanitizeText(game[props.match.params.id].data.developers)}</p>
//             </div>




//             <div className={style.detail_rigth}>
//               <h2>
//                 <strong>Categories</strong>
//               </h2>
//               {categoriesLimited && categoriesLimited.map((category) => (
//                 <p key={category.id}>{sanitizeText(category.description)}</p>
//               ))}
//               <h2>
//                 <strong>Genres </strong>
//               </h2>
//               {genres && genres.map((genre) => (<p key={genre.id}>{sanitizeText(genre.description)}</p>))}
//               <h2>
//                 <strong>Released date </strong>
//               </h2>
//               <p>{game[props.match.params.id].data.release_date.date}</p>
//               <h2>
//                 <strong>ID :</strong>
//               </h2>
//               <p>{game[props.match.params.id].data.steam_appid}</p>
//             </div>
              
//             </div>


//             <div className={style.reviews_container}>
                
//                 <div className={style.promedio}>
                 
//                 </div>
//                 <div className={style.opiniones}>
//                   <div className={style.opinion}>
//                   <div className={style.opinioncontenido}>
//                     <h3>Peter</h3>
//                     <p>18/05/2023</p>
//                     <Rating />
//                     <p>Global Offensive takes no chances and it's hard to tell who it was made for. Source and 1.6 players will feel at home with the tried and true CS mechanics and traditional game modes, but GO gives them few reasons to migrate, other than flashy graphics on a few of the old maps. Conversely, newcomers to the series will find Counter-Strike's steep learning curve rather discouraging.</p>
//                     </div>
//                   </div>
//                   <div className={style.opinion}>
//                   <div className={style.opinioncontenido}>
//                     <h3>John</h3>
//                     <p>20/01/2023</p>
//                     <Rating />
//                     <p>It may lack some of the community niceties, beloved maps (Assault, anyone?), and little features of past games, but Global Offensive delivers on the promise of a faithful, polished, and better looking Counter-Strike for whoever wants it. Even if the community doesn't meet the golden standard of 1.6 and Source, CS:GO will remain a multiplayer classic for those willi</p>
//                   </div>
//                   </div>
//                   <div className={style.opinion}>
//                   <div className={style.opinioncontenido}>
//                     <h3>Adele</h3>
//                     <p>10/04/2022</p>
//                     <Rating />
//                     <p>When it comes down to it, Counter-Strike: Global Offensive may follow the same old formula of gameplay seen in previous versions of Counter-Strike, but it's still a well-rounded tactical shooter. It may not try anything drastically different or revolutionize the series by taking it in a new direction, but there's still enough there to appeal to newbies and hardcore fans alike.</p>
//                     </div>
//                   </div>
//                 </div>
                
            
//             </div>

//           </div>
//       )}
//     </div>
//   );
// };

// export default Detail;


import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, gameDetail } from "../../redux/actions";
import style from "./Detail.module.css";
import { PacmanLoader } from "react-spinners";
import * as act from "../../redux/actions";
// import {getGameReview} from "../../redux/actions";


import Rating from '../../components/Rating/Rating';

// const Opinion = ({ rating }) => {
//   return (
//     <div className={style.opinion1}>
//       <h1>opinion</h1>
//       <Rating rating={4} /> 
//     </div>
//   );
// };
//


const Detail = (props) => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameDetail);
  const isLoading = game === undefined || game === null;
  //const cart = useSelector(state => state.cart)
  // const categories = game && game[props.match.params.id]?.data.categories;
  const genres = game && game[props.match.params.id]?.data.genres;
  const [videoUrl, setVideoUrl] = useState("");
  const categoriesLimited = game && game[props.match.params.id]?.data.categories?.slice(0, 3);

  const gameReview = useSelector((state) => state.gameReview);
  console.log("gamerevieeeeeeew", gameReview);

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
        dispatch(act.getGameReview(id));
    } else {
      setVideoUrl("");
    }

    console.log(act.getGameReview);
    console.log("gameReview",gameReview);

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

  const handleAddWhish = () => {
    dispatch(act.addWhishList({ id: bkId, price: isNaN(price) ? 0 : price, name:name, image: img }));
  };

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
                <p className={style.texto_boton}>

                  <button onClick={() => handleAdd(game[props.match.params.id].data)} className={style.buttonadd}>
                    Add to Cart
                  </button>
                  <button onClick={() => handleAddWhish(game[props.match.params.id].data)} className={style.buttonWish}>
                    Add to WhishList
                  </button>
                </p>
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
    game[props.match.params.id]?.data.screenshots?.slice(0, 4).map((screenshot, index) => (
      <div key={index} className={style[`container_screenshots${index + 1}`]}>
        <img
          className={style.img}
          src={screenshot.path_full}
          alt={`Screenshot ${index + 1}`}
        />
      </div>
    ))}
          {videoUrl && game &&
            game[props.match.params.id]?.data.screenshots?.slice(0, 3).map((screenshot, index) => (
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


            <div className={style.reviews_container}>
                
                <div className={style.promedio}>
                  <h1>Promedio</h1>
                </div>
                <div className={style.opiniones}>
                {gameReview &&
            gameReview.map((reviews, key) => (
              <div key={key} className={style.opinion}>
                <div className={style.opinioncontenido}>
                 <p>{reviews.review}</p>
                
                </div>
              </div>
            ))}
                  <div className={style.opinion}>
                  <div className={style.opinioncontenido}>
                    <h3>John</h3>
                    <p>20/01/2023</p>
                    <Rating />
                    <p>It may lack some of the community niceties, beloved maps (Assault, anyone?), and little features of past games, but Global Offensive delivers on the promise of a faithful, polished, and better looking Counter-Strike for whoever wants it. Even if the community doesn't meet the golden standard of 1.6 and Source, CS:GO will remain a multiplayer classic for those willi</p>
                  </div>
                  </div>
                  <div className={style.opinion}>
                  <div className={style.opinioncontenido}>
                    <h3>Adele</h3>
                    <p>10/04/2022</p>
                    <Rating />
                    <p>When it comes down to it, Counter-Strike: Global Offensive may follow the same old formula of gameplay seen in previous versions of Counter-Strike, but it's still a well-rounded tactical shooter. It may not try anything drastically different or revolutionize the series by taking it in a new direction, but there's still enough there to appeal to newbies and hardcore fans alike.</p>
                    </div>
                  </div>
                </div>
                
            
            </div>

          </div>
      )}
    </div>
  );
};

export default Detail;



