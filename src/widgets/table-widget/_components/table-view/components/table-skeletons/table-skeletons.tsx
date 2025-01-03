import styled from "styled-components";

import { Skeleton } from "@shared/ui";
import { CommonCell } from "@widgets/table-widget";
import {
  CellContainer,
  Row,
} from "@widgets/table-widget/_components/table-view/_styles.ts";

type TableSkeletonsProps = {
  columns: Array<CommonCell<unknown>>;
};

const StyledSkeleton = styled(Skeleton)`
  margin: 3px 0;
`;

const SKELETON_LENGTH = 10;

export const TableSkeletons = ({ columns }: TableSkeletonsProps) => {
  const isHasSummary = columns.some(({ isShowTotalCount }) => isShowTotalCount);

  return (
    <>
      {Array.from({ length: SKELETON_LENGTH }).map((_, index) => (
        <Row key={index}>
          {columns.map(({ width }, index) => (
            <CellContainer key={index} $width={width}>
              <StyledSkeleton $height={25} $width={width} />
            </CellContainer>
          ))}
        </Row>
      ))}

      {isHasSummary && (
        <Row $isHeader>
          {columns.map(({ width, isShowTotalCount }, index) => (
            <CellContainer key={index} $width={width}>
              {isShowTotalCount && (
                <StyledSkeleton $height={25} $width={width} />
              )}
            </CellContainer>
          ))}
        </Row>
      )}
    </>
  );
};
