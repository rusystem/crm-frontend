import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;

  & img {
    object-fit: contain;
  }
`;
