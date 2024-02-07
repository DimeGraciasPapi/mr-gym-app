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

export const Data = styled.section`
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1262px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  width: 290px;
  height: 110px;
  background-image: linear-gradient(to right top, ${({ color }) => color === "yellow" ? "#bc9d23, #cbae39, #dabf4d, #e9d061, #f8e174" : (color === "red" ? "#ee6f97, #e9628b, #e4547e, #de4572, #d83465" : (color === "green" ? "#82daac, #75d1a0, #68c995, #5bc089, #4eb87d" : "#020617, #070d18, #0e1219, #14171a, #191a1b"))});
  cursor: pointer;
  transition: .2s ease-in-out;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .2);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  padding: 1rem;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CardTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  color: ${COLORS.white};
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || "start"};
  gap: 0.5rem;
`;

export const Text = styled.p`
  font-size: ${({ size }) => size || 16}px;
  font-weight: ${({ weight }) => weight || 700};
  color: ${COLORS.white};
`;
