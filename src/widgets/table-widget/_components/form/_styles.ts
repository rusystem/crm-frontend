import styled from "styled-components";

export const Container = styled.div`
  margin: 9px 16px;
  border-radius: 6px;
  padding: 14px 25px;
  background-color: ${({ theme }) => theme.background.secondary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  align-self: flex-end;
`;

export const IdContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 9px;
`;
