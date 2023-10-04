import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";
import { css } from "@emotion/react";

export const Container = styled.div`
  background-color: ${COLORS.black};
  width: 100%;
  height: 85px;
  z-index: 10;
  opacity: 0.98;
  position: sticky;
  top: 0;
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    padding: 1rem;
  }
`;

export const toggleStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 36px;
  width: 35px;
  padding: 0;
  border-radius: 50%;
  transition: 1s ease-in;

  &:hover {
    background-color: ${COLORS.white};
  }
`;

export const Logo = styled.img`
  object-fit: cover;
  height: 70px;
  width: auto;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    height: 60px;
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 650px) {
    gap: 0.5rem;
  }
`;

export const NavItemStyles = css`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.8rem;
  font-weight: 500;
`;
