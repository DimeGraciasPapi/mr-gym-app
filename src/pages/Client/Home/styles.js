import styled from "@emotion/styled";
import { COLORS } from "../../../styles";
import { css } from "@emotion/react";

export const Section = styled.section`
  width: 70%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  color: ${({ isOrange }) => isOrange ? COLORS.orange : "white"};

  @media screen and (max-width: 670px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

export const Text = styled.p`
  text-align: ${({ centered }) => centered ? "center" : "start"};
  margin: 2rem 0;
  color: white;
  font-size: 1.4rem;

  @media screen and (max-width: 670px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
    margin: 1rem 0;
  }
`;

export const Info = styled.section`
  width: 100%;
  padding: 3rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  @media screen and (max-width: 1345px) {
    gap: 3rem;
    justify-content: center;
  }
`;

export const Card = styled.div`
  max-width: 410px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`;

export const CardTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const CardText = styled.p`
  margin-top: -5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
`;

export const IconStyle = css`
  color: ${COLORS.gray};
  align-self: center;
`;

export const Guide = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
`;

export const Steps = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: 670px) {
    gap: 1rem;
  }
`;

export const StepCard = styled.div`
  height: 150px;
  width: 100px;
  border-radius: 1rem;
  background-color: ${COLORS.orange};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  transition: .2s ease-in;

  &:hover {
    transform: translate(5px, -5px);
    box-shadow: 2px 2px 8px 2px rgba(255, 255, 255, .2);
  }

  @media screen and (max-width: 550px) {
    font-size: 14px;
    height: 120px;
    width: 90px;
  }

  @media screen and (max-width: 490px) {
    font-size: 11px;
    padding: 1.5rem;
    height: 120px;
    width: 80px;
  }
`;
