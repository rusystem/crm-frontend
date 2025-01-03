import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = () => (
  <Container>
    <ClipLoader color="#000" loading size={48} />
  </Container>
);
