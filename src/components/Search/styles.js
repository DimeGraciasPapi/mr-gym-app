import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  width: 270px;
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 1rem;
  padding: 0.5rem;
  color: ${COLORS.black};
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  color: ${COLORS.black};
  font-size: 15px;
`;
