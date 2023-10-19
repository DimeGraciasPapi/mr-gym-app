import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1300px) {
    justify-content: center;
    gap: 4rem;
  }

  @media screen and (max-width: 550px) {
    padding: 3rem 1rem;
  }
`;

export const Section = styled.section`
  width: 620px;
  height: ${({height}) => `${height}px` || "auto"};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .leaflet-container {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export const Logo = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 180px;
  box-shadow: 30px 0px 8px 4px rgba(0, 0, 0, .2);

  @media screen and (max-width: 510px) {
    width: 130px;
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  font-size: ${({ size }) => size || 2}rem;
  font-weight: 700;

  @media screen and (max-width: 430px) {
    font-size: ${({ responsiveSize }) => responsiveSize || 1.5}rem;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const IconStyle = css`
  color: white;
  background-color: ${COLORS.orange};
  padding: 8px;
  transform: translateY(-5px);
  border-radius: 50%;
  font-size: 50px;
`;

export const Image = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
  border: 3px solid black;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2.2rem;
`;
