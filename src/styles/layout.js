import styled from "@emotion/styled";
import { COLORS } from "./colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 80px 1fr;
  grid-column-gap: 4px;
  grid-row-gap: 4px;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.orange};
  border-radius: 0.5rem 0 0 0;

  @media screen and (max-width: 800px) {
    min-height: 88.3vh;
    border-radius: 0;
  }
`;
