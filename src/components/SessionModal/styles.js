import { COLORS } from "../../styles/colors";
import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${COLORS.orange};
  min-height: 75vh;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
`;

export const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  color: white;
  cursor: pointer;
`;

export const Section = styled.section`
  min-height: 75vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 990px) {
    width: ${({ isImage }) => isImage ? "40%" : "60%"};
  }

  @media screen and (max-width: 480px) {
    width: ${({ isImage }) => isImage ? "25%" : "75%"};
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const SessionSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1.5rem 0;

  @media screen and (max-width: 450px) {
    gap: 0.5rem;
  }
`;

export const Item = styled.button`
  border: none;
  padding: 0.5rem 2rem;
  font-weight: 500;
  border: 1px solid white;
  background-color: ${({ active }) => active ? "white" : "transparent"};
  color: ${({ active }) => active ? COLORS.black : "white"};
  cursor: pointer;
  transition: .3s ease-in;
  font-size: 1rem;

  &:hover {
    background-color: white;
    color: ${COLORS.black};
  }

  @media screen and (max-width: 500px) {
    padding: 0.5rem 0.8rem;
    font-size: 15px;
  }

  @media screen and (max-width: 350px) {
    font-size: 14px;
  }
`;

export const Form = styled.form`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: ${({ action }) => action === "login" ? "3rem" : "1rem"} 2.5rem;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }
`;
