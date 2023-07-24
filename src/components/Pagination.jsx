import ReactPaginate from 'react-paginate';

export const Pagination = ({ setSearchParams, currentPage, totalPages }) => {
  const handlePageClick = ({ selected }) => {
    setSearchParams({ page: selected + 1 });
  };

  return (
    <ReactPaginate
      initialPage={currentPage}
      nextLabel='»'
      onPageChange={handlePageClick}
      pageCount={totalPages}
      breakLabel='...'
      previousLabel='«'
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
      onPageActive={window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })}
      containerClassName='flex justify-center gap-4 my-10 mb-6 text-sm'
      //   pageClassName='flex items-center justify-center border border-solid border-blue-50 hover:bg-red-400 hover:text-white w-10 h-10 rounded-md'
      activeClassName='selected  bg-red-50 rounded-full'
      pageLinkClassName='flex items-center justify-center p-2 w-8 h-8 rounded-full text-center border-none outline-none text-blue-950 bg-transparent cursor-pointer shadow-md hover:scale-105 transition-scale duration-200 ease-in-out'
      activeLinkClassName='border-solid border-2 border-white rounded-full bg-red-50  text-accent hover:scale-105 transition-scale duration-200 ease-in-out'
      previousClassName='flex items-center justify-center p-2 w-8 h-8 rounded-full text-center border-none outline-none shadow-md bg-transparent cursor-pointer'
      nextClassName='flex items-center justify-center p-2 w-8 h-8 rounded-full text-center border-none outline-none  bg-transparent cursor-pointer shadow-md'
      breakClassName='flex items-center justify-center p-2 w-8 h-8 rounded-full text-center border-none outline-none  text-blue-700 bg-transparent cursor-pointer'
      disabledClassName='opacity-50 cursor-not-allowed'
    />
  );
};
