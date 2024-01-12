import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const Container = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  height: 80px;
  width: 100%;
  background-color: ${COLORS.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  position: sticky;
  padding: 1rem 2rem;
  z-index: 40;

  .menu {
    cursor: pointer;
    font-size: 25px;
    display: none;
    color: white;

    @media screen and (max-width: 800px) {
      display: block;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }
`;

export const Logo = styled.img`
  height: 62px;
  width: 62px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
