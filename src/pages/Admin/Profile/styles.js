import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.3rem;
  margin: 0 auto;
  border-radius: 1rem;
  width: 380px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/photo/fuerza-1.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 442px) {
    width: 100%;
  }
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${COLORS.white};
  text-align: center;
`;
