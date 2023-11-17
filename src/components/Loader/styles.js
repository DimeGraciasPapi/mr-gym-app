import styled from "@emotion/styled";
import { COLORS } from "../../styles";

export const Container = styled.div`
  background-color: ${COLORS.black};
  z-index: 50;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
