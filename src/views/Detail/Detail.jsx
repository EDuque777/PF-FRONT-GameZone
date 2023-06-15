import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getDetail } from "../../redux/actions";
// import style from "./Detail.module.css";


const Detail = () => {
   
    const dispatch = useDispatch();
    const game = useSelector((state) => state.gameDetail);
    console.log(game);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const id = props.match.params.id;
    //     setLoading(true);
    //     dispatch(getDetail(id))
    //       .then(() => {
    //         setLoading(false);
    //       })
    //       .catch(() => {
    //         setLoading(false);
    //       });

    
    //     // Limpia los detalles cuando el componente se desmonta
    //     return () => {
    //       dispatch(clearDetail());
    //     };
    //   }, [dispatch, props.match.params.id]);

    //   if (loading) {
    //     return <div>Cargando...</div>; 
    //   }
    

    //   if (!game) {
    //     return <div>No se encontró el juego.</div>; 
    //   }

      return (
            !game ? 
            (
                <h1>
                    CARGANDO...
                </h1>
            ) : (
                <div>
                    <h1>name: {game.name}</h1>
                    
                </div>
            )   
      )
}

export default Detail;

