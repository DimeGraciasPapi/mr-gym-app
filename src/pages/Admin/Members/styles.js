import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.6rem;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media screen and (max-width: 826px) {
    justify-content: center;
  }
`;
 
export const Section = styled.section`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: ${({ isLoading }) => isLoading ? "center" : "space-between"};
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 1010px) {
    justify-content: center;
  }
`;

export const FlexColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.2rem;
  position: relative;

  .icon {
    position: absolute;
    top: 7px;
    right: 7px;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
`;

export const FormTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: ${COLORS.black};
`;
