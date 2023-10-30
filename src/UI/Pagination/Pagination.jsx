import { useDispatch, useSelector } from "react-redux";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { changeCurrentPage } from "../../rtk/reducers/currentPage";
import { useState } from "react";
import { useEffect } from "react";

function Pagination() {
  const responseData = useSelector((state) => state.responseData.value);
  const [page, setPage] = useState(responseData?.page);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCurrentPage(page));
  }, [dispatch, page]);
  
  return (
    <>
      {responseData?.total_pages !== 1 && (
        <ResponsivePagination
          current={responseData?.page}
          total={responseData?.total_pages}
          onPageChange={setPage}
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
