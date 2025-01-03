import { useState } from "react";
import styled from "styled-components";

import { PaginationModel } from "@widgets/table-widget";

import { PaginationItem } from "./_components/pagination-item.tsx";

const Container = styled.div`
  margin-left: 60px;
  margin-top: 40px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

type PaginationProps = {
  onClick: (page: number) => void;
  totalCount: number;
  pagination: PaginationModel;
  isLoading: boolean;
};

export const Pagination = ({
  pagination,
  totalCount,
  onClick,
  isLoading,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPages = Math.ceil(totalCount / pagination.limit);

  const getPaginationItems = () => {
    const pages = [];
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(maxPages - 1, currentPage + 2);

    pages.push(1);

    if (startPage > 2) pages.push("...");

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < maxPages - 1) pages.push("...");

    if (maxPages > 1) pages.push(maxPages);

    return pages;
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
    onClick(page);
  };

  return (
    <Container>
      {getPaginationItems().map((page) => {
        if (page === undefined) return null;

        if (typeof page === "string") {
          return <span key={page}>...</span>;
        }
        return (
          <PaginationItem
            disabled={isLoading}
            key={page}
            page={page}
            onClick={handleChangePage}
            isActive={page === currentPage}
          />
        );
      })}
    </Container>
  );
};
