import styled from "@emotion/styled";
import { COLORS } from "../../../styles";

export const Section = styled.section`
  width: 70%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: ${({ isOrange }) => isOrange ? COLORS.orange : "white"};
  animation-name: weight;
  animation-duration: 4s;

  @keyframes weight {
    from { font-weight: 200; }
    to { font-weight: 600; }
  }
`;

export const Text = styled.p`
  margin: 2rem 0;
  color: white;
  font-size: 1.4rem;

  animation-name: weight;
  animation-duration: 4s;

  @keyframes weight {
    from { font-weight: 200; }
    to { font-weight: 400; }
  }
`;
