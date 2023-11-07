import styled from "@emotion/styled";
import { BiDumbbell } from "react-icons/bi";

export const Section = styled.section`
  width: 100%;
  min-height: 75vh;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 550px) {
    padding: 1rem;
    justify-content: center;
    gap: 4rem;
  }
`;

export const FlexColumn = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: ${({ size }) => size || 2.5}rem;
  font-weight: 800;
  text-align: center;
  color: ${({ color }) => color || "white"};
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: ${({ size }) => size || 19}px;
  text-align: center;
  font-weight: 500;
`;

export const Icon = styled(BiDumbbell)`
  color: white;
  font-size: 5rem;
  padding: 1rem;
  border-radius: 50%;
  background-color: black;
`;

export const GymSection = styled.div`
  width: 100%;
  min-height: 420px;
  padding: 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/photo/${({ src_img }) => src_img}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ${({positionY}) => positionY || 20}%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 520px) {
    padding: 2rem 1rem;
  }
`;

export const Card = styled.div`
  min-height: 300px;
  height: ${({ isImage }) => isImage ? "300px" : ""};
  width: 480px;
  padding: ${({isImage}) => isImage ? 0 : "1rem"};
  gap: 1rem;
  border: 2px solid white;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .2s ease-in;
  overflow: hidden;
  background: linear-gradient(180deg, #E1631D, #010101);;

  &:hover {
    transform: translate(4px, -4px);
    box-shadow: 4px -4px 8px 2px rgba(255, 255, 255, .2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
