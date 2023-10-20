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
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: white;
`;

export const Text = styled.p`
  color: white;
  font-size: 19px;
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
