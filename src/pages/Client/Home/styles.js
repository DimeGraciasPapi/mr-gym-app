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
    top: 5px;
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
    text-align: justify;
  }
`;
