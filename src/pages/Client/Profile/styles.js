import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 3rem;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  flex-wrap: wrap;
  gap: 5rem;

  @media screen and (max-width: 650px) {
    padding: 3rem 1rem;
  }
`;

export const Section = styled.section`
  width: 380px;
  border: 2px solid white;
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/photo/fuerza-1.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled.h1`
  font-size: ${({ size }) => size || 2}rem;
  color: ${({ color }) => color || "white"};
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

export const Plan = styled.div`
  width: 380px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/photo/fuerza-3.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
  gap: 1.5rem;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 1rem;
`;

export const FlexColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
