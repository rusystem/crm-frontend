import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 80%;
  padding: 36px 40px;
`;

export const TitleContainer = styled.div`
  position: relative;

  &::after {
    position: absolute;
    height: 5px;
    width: 100%;
    left: 0;
    bottom: -2px;
    background-color: ${({ theme }) => theme.button.primary})};;
  }
`;
