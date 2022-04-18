import React from "react";
import ReactPaginate from "react-paginate";
import RightArrow from "../img/right-arrow.svg";
import LeftArrow from "../img/left-arrow.svg";

function Pagination({ total, count, setCurrentPage, currentPage }) {
  const pageCount = Math.ceil(total / count);

  function handlePageClick(data) {
    setCurrentPage(data.selected);
  }

  return (
    <div className="pagination-buttons">
      <ReactPaginate
        previousLabel={currentPage > 0 && <img src={LeftArrow} alt="previous-page" />}
        nextLabel={currentPage + 1 < pageCount && <img src={RightArrow} alt="next-page" />}
        breakLabel={"..."}
        pageCount={pageCount ? pageCount : 0}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
      />
    </div>
  );
}

export default Pagination;
