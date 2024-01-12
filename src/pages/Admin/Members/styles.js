import styled from "@emotion/styled";

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

