import React from "react";
import PropTypes from "prop-types";
import style from "./Pagination.module.css";

const Pagination = ({ resultsPerPage, totalResults, currentPage, paginate }) => {
const pageNumbers = [];

for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
}

return (
    <div className={style.pagination}>
        {pageNumbers.map((number) => (
            <button
                key={number}
                className={`${style.pageNumber} ${currentPage === number ? style.active : ""}`}
                onClick={() => paginate(number)}
            >
            {number}
        </button>
        ))}
    </div>
);
};

Pagination.propTypes = {
    resultsPerPage: PropTypes.number.isRequired,
    totalResults: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
};

export default Pagination;
