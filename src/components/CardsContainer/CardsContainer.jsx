import React from 'react'
import Card from '../Card/Card';
import styles from "./CardsContainer.module.css"
import { useSelector } from 'react-redux'

const CardsContainer = () => {
    
  
  const gamesHome = useSelector(state => state.games)
  const gameOffer = useSelector(state => state.gameOffer)
  const gameComingSoon = useSelector(state => state.gameComingSoon)
  const gamesNewReleases = useSelector(state => state.gamesNewReleases)
  const gamesTopSellers = useSelector(state => state.gamesTopSellers)
  console.log(gameOffer);
  console.log(gameComingSoon);
  console.log(gamesNewReleases);
  console.log(gamesTopSellers);
  console.log(gamesHome);

  return (
    <div>
        {   

          gameOffer.map(game => {
              return (
                <Card 
                key={game.id}
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