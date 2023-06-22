import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Search.module.css";
import * as act from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";


const Search = (props) => {
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(8);
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleButton = () => {
    if (name.trim() !== "") {
      dispatch(act.getByName(name));
      setCurrentPage(1); // Restablecer la página actual al realizar una nueva búsqueda
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButton();
    }
  };

  // Calcular los índices de los resultados a mostrar en la página actual
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = search.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={style.searchbar}>
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
          <Filters/>
        </div>
      </div>
      <div className={style.searchyfilters}>
      <div className={style.results}>
        <CardsContainer className={style.CardsContainer} gameComingSoon={currentResults} />
        <Pagination
          resultsPerPage={resultsPerPage}
          totalResults={search.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
      <div className={style.filters}>
        <h1></h1>
      </div>
      </div>
    </div>
  );
};

export default Search;
