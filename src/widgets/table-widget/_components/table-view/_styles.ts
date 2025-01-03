import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
`;

export const Row = styled.div<{ $isHeader?: boolean }>`
  background-color: ${({ theme, $isHeader }) =>
    $isHeader ? "transparent" : theme.background.secondary};
  font-weight: ${({ $isHeader }) => ($isHeader ? 700 : 400)};
  padding: 2px 120px 2px 28px;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  white-space: ${({ $isHeader }) => ($isHeader ? "wrap" : "nowrap")};
  position: relative;
  margin-bottom: 9px;
`;

export const CellContainer = styled.div<{ $width?: number }>`
  min-width: ${({ $width = 100 }) => $width}px;
  max-width: ${({ $width = 100 }) => $width}px;
  text-align: center;
  text-overflow-ellipsis: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ActionsContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 28px;
  height: 100%;
  background-color: ${({ theme }) => theme.background.secondary};
`;
