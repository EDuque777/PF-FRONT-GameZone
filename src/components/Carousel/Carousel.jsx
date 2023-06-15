import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./Carousel.module.css"

const Carousel = ()=>{

    
    const offers = useSelector((state)=> state.gameOffer)

console.log(offers)

return(
    <div className={style.container}>
        <h2 className={style.text}>carrousel</h2>
    </div>
)
}
export default Carousel;