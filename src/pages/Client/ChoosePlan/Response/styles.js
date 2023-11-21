import styled from "@emotion/styled";
import { COLORS } from "../../../../styles";

export const Container = styled.div`
  position: relative;
  width: 60%;
  margin: auto;
  height: 87.7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  gap: 1.5rem;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(255, 255, 255, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.black};
  z-index: 10;
`;
