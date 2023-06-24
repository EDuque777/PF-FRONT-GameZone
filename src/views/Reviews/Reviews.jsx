import { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import style from "./Reviews.module.css"

const Review = () => {
  const [form, setForm] = useState({
    review: "",
    rating: 0,
  });

  const handleStarClick = (rating) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/user/review", form)
      .then(res => {
        setForm({
          review: "",
          rating: 0,
        });
      })
      .catch(error => {
        console.error("Error submitting review:", error);
      });
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= form.rating ? style.starFilled : style.star}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div className={style.body_form}>
    <form onSubmit={handleSubmit}>
      <div className={style.total_container}>
        <label className={style.review}>Review:</label>
        <textarea 
          name="review"
          value={form.review}
          onChange={(event) => setForm({ ...form, review: event.target.value })}
          className={style.texto_review}
        />
      
      <div>
        <label className={style.rating}>Rating:</label>
        <div className={style.starContainer}>
          {renderStars()}
        </div>
      </div>
      <button className={style.button} type="submit">Crear Review</button>
      </div>
    </form>
    </div>

  );
};

export default Review;





