import styled from "@emotion/styled";
import { COLORS } from "../../../styles/colors";

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0 0 0;
  flex-wrap: wrap;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 1rem;
  padding: 1rem;

  .icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: ${COLORS.black};
  font-weight: 700;
  text-align: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;

  .icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;
