import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <>
      {totalPages !== 1 && (
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      <style jsx="true">{`
        .pagination {
          justify-content: center;
          display: flex;
          padding-left: 0;
          list-style: none;
          margin: 20px 0;
        }

        .page-item .page-link {
          position: relative;
          display: block;
          margin: 0 2px;
          /* min-height: 40px;
          min-width: 40px; */
          border-radius: 20px;
          text-align: center;
          /* line-height: 40px; */
          color: #b92f2c;
          text-decoration: none;
        }

        // .page-item a.page-link:hover {
        //   background-color: #cccccc;
        // }

        .page-item.active .page-link {
          font-weight: 700;
          color: #ffffff;
          background-color: #b92f2c;
        }

        // .page-item.disabled .page-link {
        //   color: #6c757d;
        //   pointer-events: none;
        //   cursor: auto;
        // }
      `}</style>
    </>
  );
}
export default Pagination;
