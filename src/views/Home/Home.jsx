import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";
import * as act from "../../redux/actions";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const dispatch = useDispatch();
  const gameOffer = useSelector(state => state.gameOffer);
  const gamesNewReleases = useSelector(state => state.gamesNewReleases);
  const gamesTopSellers = useSelector(state => state.gamesTopSellers);
  const games = useSelector(state => state.games);
  const [name, setName] = useState("");


  useEffect(() => {
    dispatch(act.getGames());
    dispatch(act.getGamesOffer());
    dispatch(act.getGamesNewReleases());
    dispatch(act.getGamesComingSoon());
    dispatch(act.getGamesTopSellers());
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleButton = (e) => {
    if (name.trim() !== "") {
      dispatch(act.getByName(name));

    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButton();
    }
  };

  // Verificar si el array de juegos tiene al menos 14 elementos
  const selectedGames = games.length >= 14 ? games.slice(0, 14) : games;

  return (
    <div className={style.homeContainer}>
      <NavBar />
      <Carousel />
      <div>
        <div className={style.searchcontainer}>
          <input
            className={style.search}
            placeholder="  search..."
            type="text"
            onChange={e => handleChange(e)}
            onKeyDown={handleKeyDown}
          />

          <FontAwesomeIcon
            className={style.buttonsearch}
            onClick={name.trim() !== "" ? handleButton : undefined}
            icon={faSearchengin}
            size="xl"
          />
        </div>
        <h3>All Games</h3>
        <CardsContainer gameComingSoon={selectedGames} />
      </div>

      <h3 className={style.title}>Top sells</h3>
      <CardsContainer gameComingSoon={gamesTopSellers} />
      <h3 className={style.title}>Game offers</h3>
      <CardsContainer gameComingSoon={gameOffer} />
      <h3 className={style.title}>New releases</h3>
      <CardsContainer gameComingSoon={gamesNewReleases} />
    </div>
  );
};

export default Home;
