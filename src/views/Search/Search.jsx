import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Search.module.css";
import * as act from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";

const Search = () => {
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(8);
  const search = useSelector((state) => state.search);

  const filterProperties = search.reduce((properties, game) => {
    Object.keys(game).forEach((property) => {
      if (!properties.includes(property)) {
        properties.push(property);
      }
    });
    return properties;
  }, []);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const maxPageButtons = 3;

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleButton = () => {
    if (name.trim() !== "") {
      setLoading(true);
      dispatch(act.getByName(name)).then(() => {
        setCurrentPage(1);
        setLoading(false);
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButton();
    }
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = search ? search.slice(indexOfFirstResult, indexOfLastResult) : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(search);
  
  return (
    <div>
      <div className={style.searchbar}>
        <div className={style.searchcontainer}>
          <input
            className={style.search}
            placeholder="  search..."
            type="text"
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}
          />
          <FontAwesomeIcon
            className={style.buttonsearch}
            onClick={name.trim() !== "" ? handleButton : undefined}
            icon={faSearchengin}
            size="xl"
          />
        </div>
      </div>
      <div className={style.searchyfilters}>
        <div className={style.results}>
          {loading ? (
            <div className={style.loadingContainer}>
              <div className={style.loading}></div>
            </div>
          ) : search ? (
            <CardsContainer
              className={style.CardsContainer}
              gameComingSoon={currentResults}
            />
          ) : (
            <p>No se encontraron resultados</p>
          )}
          <Pagination
            resultsPerPage={resultsPerPage}
            totalResults={search ? search.length : 0}
            currentPage={currentPage}
            paginate={paginate}
            maxPageButtons={maxPageButtons}
          />
        </div>
        <div className={style.filters}>
          <Filters filterProperties={filterProperties} search={search || []} />
        </div>
      </div>
    </div>
  );
};

export default Search;
