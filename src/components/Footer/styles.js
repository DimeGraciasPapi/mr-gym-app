import styled from "@emotion/styled";
import { COLORS } from "../../styles";

export const Container = styled.footer`
  background-color: ${COLORS.black};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  padding: 2rem 1rem;
`;

export const Logo = styled.img`
  objec-fit: cover;
  border-radius: 50%;
  width: 100px;
  cursor: pointer;
`;

export const Line = styled.hr`
  margin: 2rem 0;
  opacity: 1;
  width: 90%;
`;

export const Section = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 920px) {
    justify-content: center;
    gap: 2rem;
  }
`;

export const Link = styled.a`
  color: white;
  font-size: 1rem;
  cursor: ${({ href, isLink }) => !isLink && !href  ? "" : "pointer"};

  &:hover {
    text-decoration: ${({ href, isLink }) => !href && !isLink ? "none" : "underline"};
  }
`;

export const Div = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  gap: 0.6rem;
`;
