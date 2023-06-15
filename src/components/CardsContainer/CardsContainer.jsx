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

  return (
    <div className='home'>
      <div className=''> 
        {gameOffer.map(game => {
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
    </div>
  )
}

export default CardsContainer