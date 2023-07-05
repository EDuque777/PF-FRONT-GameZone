import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../../redux/actions";
import style from "./tableReviews.module.css";

const Reviews = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const games = useSelector(state => state.games);
  console.log("GAMEEEEE", games);

  useEffect(() => {
    dispatch(act.getGames());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1>revieeeeeeeeeeews</h1>
      {games?.map((game, index) => (
        <div key={index}>
          <div>{game.name}</div>
          {game.Reviews.map((review, index) => (
            <div key={index}>
              <div>{review.reviews}</div>
              <div>{review.rating}</div>
              <div>{review.date}</div>
              <div>{review.Users[0]?.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Reviews;

