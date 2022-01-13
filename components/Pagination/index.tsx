import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { usePageContext } from "../../contexts/pageProvider";

const Pagination = ({ page }: any) => {
  const { currentPage, setCurrentPage } = usePageContext();

  return (
    <div className="flex justify-center mt-5 text-xl items-center space-x-2">
      <LeftOutlined
        className={currentPage > 1 ? "" : " invisible"}
        onClick={() => setCurrentPage(currentPage - 1)}
      />

      <div>{currentPage}</div>

      <RightOutlined
        className={currentPage < 100 ? "" : " invisible"}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
