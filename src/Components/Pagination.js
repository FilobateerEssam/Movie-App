import ReactPaginate from "react-paginate";

const PaginationPages = ({getpage , PageCount}) => {

  const handlePageClick = (data) => {
    getpage(data.selected + 1);
    console.log(data.selected + 1);
  };

  const pageCount = PageCount;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2} // number of pages to display in pagination in back
      pageRangeDisplayed={3} // number of pages to display in pagination in front
      pageCount={pageCount}
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
