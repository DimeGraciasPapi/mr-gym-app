import styled from "@emotion/styled";
import { COLORS } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  // background-color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  border-top: 1px solid white;
  border-bottom: 1px solid white;

  @media screen and (max-width: 650px) {
    padding: 3rem 1rem;
  }
`;

export const Section = styled.section`
  background-color: ${COLORS.gray};
  width: 380px;
  border: 2px solid white;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
  font-weight: 700;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
