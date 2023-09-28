import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {  getpage } from "../redux/actions/MovieAction";

const PaginationPages = () => {

  const [PageCounts, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  // to call when the page is loaded
  useEffect(() => {

    setPageCount(pages);
  }, []);



  const handlePageClick = (data) => {
    dispatch(getpage(data.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2} // number of pages to display in pagination in back
      pageRangeDisplayed={3} // number of pages to display in pagination in front
      pageCount={PageCounts}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationPages;
