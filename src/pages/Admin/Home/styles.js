import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0 1rem;

  @media screen and (max-width: 1342px) {
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

export const Section = styled.section`
  width: 470px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
  font-size: 15px;
  font-weight: 600;
  padding: 1rem;
  border-radius: 1rem;
  background-image: linear-gradient(to right top, #1d1d1d, #272727, #323232, #3d3d3d, #484848);
`;

export const SectionTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  color: ${COLORS.white};
  text-align: center;
`;
