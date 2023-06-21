import React from 'react';
import Card from '../Card/Card';
import styles from "./CardsContainer.module.css";
//import { useSelector } from 'react-redux';

const CardsContainer = (props) => {
  const { gameComingSoon } = props;
  if (gameComingSoon === null) {
    return <p>Loading...</p>;
  } else if (!Array.isArray(gameComingSoon)) {
    return <p>Invalid data</p>;
  } else {
    const uniqueGames = gameComingSoon
    // .filter(

    //   (game, index, self) =>
    //     index === self.findIndex((g) => g.id === game.id)
    // )

// console.log(props.appid);

    return (
      <div className={styles.container}>
        {uniqueGames.map((game, index) => (
          <Card
            key={`${game.appid}-${index}`}
            id={game.id}
            appid={game.appid} 
            image={game.capsule_image || game.large_capsule_image} 
            name={game.name} 
            price={( game.price_overview?.final || game.price_overview  || game.final_price )}

            />
          ))
        }

      </div>
    );
  }
};

export default CardsContainer;