import React from 'react'
import Card from '../Card/Card';
import styles from "./CardsContainer.module.css"
import { useSelector } from 'react-redux'



const CardsContainer = () => {
    
    const gamesHome = useSelector(state => state.games)
    const gameOffer = useSelector(state => state.gameOffer)
    console.log(gameOffer);

  return (
    <div>

        {   
            gameOffer.map(game => {
                return (
                    <Card key={game.id} 
                    id={game.id}
                    image={game.large_capsule_image}
                    name={game.name}
                    price={game.final_price}
                />
                )
            })}
 
    </div>
  )
}

export default CardsContainer