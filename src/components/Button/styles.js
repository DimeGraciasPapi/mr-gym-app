import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Container = styled.button`
  width: ${({ size }) => size === "full" ? "100%" : ""};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: ${({ filled, color }) => filled ? color === "secondary" ? COLORS.black: COLORS.orange : "transparent"};
  color: ${COLORS.white};
  border: 1px solid ${({ filled }) => filled ? COLORS.orange : COLORS.white};
  border-radius: 12px;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  transition: .2s linear;

  &:hover {
    background-color: ${({ filled, color }) => filled ? color === "secondary" ? "rgba(0, 0, 0, .9)" : "#C95E23" : "rgba(255, 255, 255, .2)"};
    border-color: ${({ filled }) => filled ? "#C95E23" : ""};
  }

  &:disabled {
    background-color: #4E4E4E;
    cursor: not-allowed;
    border: none;
  }

  @media screen and (max-width: 650px) {
    padding: 0.5rem;
    font-size: 14px;
  }
`;
