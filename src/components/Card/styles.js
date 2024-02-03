import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  width: 320px;
  height: 180px;
  border-radius: 1rem;
  padding: 0.6rem 0.6rem 1rem 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: .2s ease-in-out;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(/assets/photo/fuerza-3.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 35%;
  z-index: 1;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 55%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${COLORS.black};
  opacity: .85;
  transition: .1s linear;

  &:hover {
    opacity: 1;
  }
`;

export const Text = styled.p`
  font-size: ${({ size }) => size || 16}px;
  font-weight: ${({ weight }) => weight || 600};
  align-text: center;
  color: white;
  max-height: 25px;
  overflow: auto;
`;

export const FlexRow = styled.div`
  width: ${({ full }) => full ? "100%" : "auto"};
  display: flex;
  align-items: center;
  justify-content: ${({ full }) => full ? "space-between" : "center"};
  gap: 0.5rem;
  color: white;
  padding: ${({ full }) => full ? "0 0.5rem" : 0};
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
`;
