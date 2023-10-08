import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 87.7vh;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/photo/weight.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    padding: 1rem;
    height: 95vh;
  }
`;

export const Section = styled.section`
  width: 40%;
  display: flex;
  align-items: ${({ right }) => right ? "end" : "start"};
  gap: 1rem;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    align-items: center;
    width: 50%;
  }
`;

export const Logo = styled.img`
  width: 35%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;

  @media screen and (max-width: 700px) {
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${COLORS.orange};
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
  }
`;

export const Text = styled.p`
  text-align: ${({ right }) => right ? "right" : "left"};
  font-size: 1rem;
  color: white;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const Plans = styled.div`
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

export const PlanSection = styled.section`
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

export const PlanTitle = styled.h2`
  font-size: ${({ isCard }) => isCard ? 1.5 : 2}rem;
  color: ${({ isCard, black }) => isCard ? (black ? "white" : COLORS.black) : COLORS.orange};
  text-align: ${({ isCard }) => isCard ? "start" : "center"};
`;

export const PlantText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: white;
  text-align: center;
`;
