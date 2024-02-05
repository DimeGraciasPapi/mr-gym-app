import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const Section = styled.div`
  align-self: end;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${COLORS.gray};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) => isActive ? COLORS.orange : "transparent"};
  padding: 3px;
  color: white;
`;
