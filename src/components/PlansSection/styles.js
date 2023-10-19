import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  width: 75%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 980px) {
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    padding: 2rem 1rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
`;

export const Plan = styled.div`
  width: ${({ isCard }) => isCard ? "47" : "100"}%;
  display: flex;
  align-items: ${({ isCard }) => isCard ? "start" : "center"};
  flex-direction: ${({ position }) => position === "row" ? "column" : "row"};
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${({ black }) => black ? COLORS.black : "white"};
  color: ${({ black }) => black ? "white" : ""};
  transition: .2s ease-in;
  cursor: pointer;
  border: 2px solid ${({ isCard, black }) => isCard && !black ? COLORS.gray : "trasparent"};

  &:hover {
    ${({ isCard }) => isCard ? `
      box-shadow: -2px 2px 6px 2px rgba(0, 0, 0, .4);
      transform: translate(-3px, -3px);
    ` : ""}
  }

  @media screen and (max-width: 735px) {
    width: ${({ isCard }) => isCard ? "80" : "100"}%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: ${({ isCard }) => isCard ? 1.5 : 2}rem;
  color: ${({ isCard, black }) => isCard ? (black ? "white" : COLORS.black) : COLORS.orange};
  text-align: ${({ isCard }) => isCard ? "start" : "center"};
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: white;
  text-align: center;
`;
