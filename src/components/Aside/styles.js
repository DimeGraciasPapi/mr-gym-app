import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Container = styled.aside`
  height: 87.6vh;
  width: 300px;
  background-color: ${COLORS.black};
  display: flex;
  flex-direction: column;
  padding: 3rem 1.2rem;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;
  border-radius: 0 0.5rem 0 0;
  transition: .2s ease-in-out;
  position: sticky;
  top: 100px;
  z-index: 49;

  @media screen and (max-width: 800px) {
    top: 0;
    position: fixed;
    width: 270px;
    height: 100vh;
    left: ${({ isOpen }) => isOpen ? 0 : "-270px"};
    z-index: 52;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.6rem;
  width: 100%;
  border-radius: 0.8rem;
  color: ${({ isActive }) => isActive ? COLORS.black : "white"};
  background-color: ${({ isActive }) => isActive ? COLORS.white : COLORS.orange};
  font-size: 17px;
  font-weight: 600;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  transition: .3s ease-in-out;

  &:hover {
    background-color: ${COLORS.white};
    color: ${COLORS.black};
  }

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  z-index: 51;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  cursor: pointer;
  display: none;
  transition: .3s ease-in-out;

  @media screen and (max-width: 800px) {
    display: ${({ isOpen }) => isOpen ? "block" : "none"};
  }
`;
