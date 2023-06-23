// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import * as act from "../../redux/actions";
// import style from "./Filters.module.css";

// const Filters = () => {
//   const dispatch = useDispatch();
  
//   const gamesFilterPlatform = useSelector(state => state.gamesPlatforms);
//   const gamesFilterLanguages = useSelector(state => state.languagesGames);
//   const gamesFilterCategories = useSelector(state => state.categoriesGames);
//   const gamesFilterDevelopers = useSelector(state => state.developersGames);

//   const gamesFilterGenres = useSelector(state => state.genresGames);

//   useEffect(() => {
//     dispatch(act.platformsAll());
//     dispatch(act.languagesGames());
//     dispatch(act.categoriesGames());
//     dispatch(act.developersGames());

//     dispatch(act.genresGames());
//   }, [dispatch]);

//   const platformFilter = gamesFilterPlatform.filter(platform => platform);
//   const languagesFilter = gamesFilterLanguages.filter(languages => languages);
//   const categoriesFilter = gamesFilterCategories.filter(categories => categories);
//   const developersFilter = gamesFilterDevelopers.filter(developers => developers);

//   const genresFilter = gamesFilterGenres.filter(genres => genres);

//   return (
//     <>
//       <select className={style.select}>
//         <option hidden>Platforms</option>
//         {platformFilter.map(({ platform, id }) => (
//           <option key={id} value={platform} className={style.option}>{platform}</option>
//         ))}
//       </select>

//       <select className={style.select}>
//         <option hidden>Languages</option>
//         {languagesFilter.map(({ language, id }) => (
//           <option key={id} value={language} className={style.option}>{language}</option>
//         ))}
//       </select>

//       <select className={style.select}>
//         <option hidden>Categories</option>
//         {categoriesFilter.map(({ category, id }) => (
//           <option key={id} value={category} className={style.option}>{category}</option>
//         ))}
//       </select>

//       <select className={style.select}>
//         <option hidden>Developers</option>
//         {developersFilter.map(({ developer, id }) => (
//           <option key={id} value={developer} className={style.option}>{developer}</option>
//         ))}
//       </select>


//       <select className={style.select}>
//         <option hidden>Genres</option>
//         {genresFilter.map(({ genre, id }) => (
//           <option key={id} value={genre} className={style.option}>{genre}</option>
//         ))}
//       </select>
//     </>
//   );
// };

// export default Filters;

import React from "react";
import PropTypes from "prop-types";
import style from "./Filters.module.css";

const Filters = ({ filterProperties, search }) => {
  const excludedProperties = [
    "abouth_the_game",
    "detailed_description",
    "name",
    "header_image",
    "capsule_image",
    "currency",
    "short_description",
    "support_info",
    "Developers",
    "Videos",
    "Images",
    "id",
    
  ];

  const getUniqueValues = (property) => {
    return search.reduce((values, game) => {
      const value = game[property];
      if (
        typeof value === "string" &&
        !values.includes(value) &&
        !excludedProperties.includes(property)
      ) {
        values.push(value);
      }
      return values;
    }, []);
  };

  return (
    <div className={style.filtersContainer}>
      {filterProperties.map((property) => (
        !excludedProperties.includes(property) && (
          <div key={property} className={style.filter}>
            <label htmlFor={property} className={style.filterLabel}>
              {property}
            </label>
            <select id={property} className={style.filterSelect}>
              <option value="">All</option>
              {getUniqueValues(property).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        )
      ))}
    </div>
  );
};

Filters.propTypes = {
  filterProperties: PropTypes.arrayOf(PropTypes.string).isRequired,
  search: PropTypes.array.isRequired,
};

export default Filters;