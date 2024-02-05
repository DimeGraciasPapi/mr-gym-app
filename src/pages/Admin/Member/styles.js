import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const Section = styled.section`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 1206px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: ${({ width }) => width || "460px"};
  border-radius: 1rem;
  padding: 1.5rem;
  background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(/assets/photo/cardio-1.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: ${({ margin }) => margin || ""};
`;

export const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  color: ${COLORS.white};
`;

export const Text = styled.p`
  font-size: ${({ size }) => size || 16}px;
  font-weight: ${({ weight }) => weight || 500};
  text-align: center;
  color: ${({ color }) => color || COLORS.white};
  transform: ${({ toDown }) => toDown || "translateY(-4px)"};
  word-break: break-word;
`;

export const FlexRow = styled.div`
  width: ${({ width }) => width || ""};
  display: flex;
  gap: ${({ gap }) => gap || 0.5}rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 450px) {
    flex-wrap: ${({ wrap }) => wrap ? "wrap" : "no-wrap"};
  }
`;

export const Control = styled.div`
  width: 330px;
  height: 290px;
  padding: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background-color: ${COLORS.black};
  cursor: pointer;
  z-index: 1;
`;

export const View = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.white};
  transition: .3s ease-in-out;
  transform: ${({ isActive }) => isActive ? "translateY(-340px)" : ""};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const Image = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
