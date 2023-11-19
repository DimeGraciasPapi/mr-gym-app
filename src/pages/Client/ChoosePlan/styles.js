import styled from "@emotion/styled";
import { COLORS } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  background-color: ${COLORS.grayLight};
  padding: 2rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1325px) {
    justify-content: center;
    gap: 2rem,
  }
`;

export const Section = styled.section`
  width: ${({ width }) => width || 600}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${COLORS.orange};
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: white;

  @media screen and (max-width: 560px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 370px) {
    font-size: 1.5rem;
  }
`;

export const Plan = styled.div`
  position: relative;
  width: 100%;
  border-radius: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: ${({ isBlack }) => isBlack ? COLORS.black : "white"};
  color: ${({ isBlack }) => !isBlack ? COLORS.black : "white"};
  cursor: pointer;
  transition: .2s ease-in;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, .2);

  &:hover {
    transform: scale(1.01);
  }

  @media screen and (max-width: 450px) {
    padding: 1rem;
  }
`;

export const FlexRow = styled.div`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || "center"};
  gap: ${({ gap }) => gap};
  flex-wrap: wrap;

  @media screen and (max-width: 610px) {
    gap: 1rem;
  }
`;

export const FlexColumn = styled.div`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ gap }) => gap || 0.4}rem;
  background-color: ${({ withBg }) => withBg ? "white" : null};
  border-radius: 1rem;
  box-shadow: ${({ withBg }) => withBg ? "2px 2px 10px 3px rgba(0, 0, 0, .2)" : null};
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 700;
  text-align: ${({ align }) => align || "center"};

  @media screen and (max-width: 600px) {
    font-size: 14.5px;
  }
`;

export const Checkbox = styled.div`
  width: 23px;
  height: 23px;
  padding: 2px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ isBlack }) => isBlack ? "white" : COLORS.black};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(255, 255, 255, .5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
