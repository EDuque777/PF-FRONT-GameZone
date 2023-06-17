import React from 'react';
import Card from '../Card/Card';
import styles from "./CardsContainer.module.css";
import { useSelector } from 'react-redux';


const CardsContainer = (props) => {
  
  const { gameComingSoon } = props;


  if (gameComingSoon === null) {
    return (
      <p>Loading...</p>
    )
  }
  else{
    return (
      <div className={styles.container}>
        {  
          gameComingSoon.map(game => (
            <Card 
              key={game.id}
              id={game.id} 
              image={game.capsule_image || game.large_capsule_image}
              name={game.name } 
              price={game.price_overview || game.final_price}
            />
          ))
        }
      </div>
    );
  }
};

export default CardsContainer;
