import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

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
