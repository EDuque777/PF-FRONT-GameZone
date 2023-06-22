import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../redux/actions";
import style from "./Filters.module.css"


const Filters = () => {

    const dispatch = useDispatch();
    
    const gamesFilterPlatform = useSelector(state => state.gamesPlatforms);
    const gamesFilterLanguages = useSelector(state => state.languagesGames);
    const gamesFilterCategories = useSelector(state => state.categoriesGames);
    const gamesFilterDevelopers = useSelector(state => state.developersGames);
    const gamesFilterPublishers = useSelector(state => state.publishersGames);
    const gamesFilterGenres = useSelector(state => state.genresGames);

    useEffect(() => {
      dispatch(act.platformsAll());
      dispatch(act.languagesGames());
      dispatch(act.categoriesGames());
      dispatch(act.developersGames());
      dispatch(act.publishersGames());
      dispatch(act.genresGames());
    }, [dispatch]);
  
    const platformFilter = gamesFilterPlatform.filter(platform => platform)
    console.log(platformFilter)

    const languagesFilter = gamesFilterLanguages.filter(languages => languages)
    console.log(languagesFilter)

    const categoriesFilter = gamesFilterCategories.filter(categories => categories)
    console.log(categoriesFilter)

    const developersFilter = gamesFilterDevelopers.filter(developers => developers)
    console.log(developersFilter)

    const publishersFilter = gamesFilterPublishers.filter(publishers => publishers)
    console.log(publishersFilter)

    const genresFilter = gamesFilterGenres.filter(genres => genres)
    console.log(genresFilter)

    return (
      <>

            <select>
            <option hidden>Platforms</option>
             {platformFilter.map(({platform, id}) => (
              <option key={id} value={platform}>{platform}</option>
            ))}
            </select>

            <select>
            <option hidden>Languages</option>
             {languagesFilter.map(({language, id}) => (
              <option key={id} value={language}>{language}</option>
            ))}
            </select>

            <select>
            <option hidden>Categories</option>
             {categoriesFilter.map(({category, id}) => (
              <option key={id} value={category}>{category}</option>
            ))}
            </select>

            <select>
            <option hidden>Developers</option>
             {developersFilter.map(({developer, id}) => (
              <option key={id} value={developer}>{developer}</option>
            ))}
            </select>

            <select>
            <option hidden>Publishers</option>
             {publishersFilter.map(({publisher, id}) => (
              <option key={id} value={publisher}>{publisher}</option>
            ))}
            </select>

            <select>
            <option hidden>Genres</option>
             {genresFilter.map(({genre, id}) => (
              <option key={id} value={genre}>{genre}</option>
            ))}
            </select>
       
      </>
    );
  };
  
  export default Filters;



