import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: ${({ height }) => height || 87.7}vh;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/photo/${({ src_img }) => src_img}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ${({positionY}) => positionY || 50}%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    padding: 1rem;
    height: 83vh;
  }
`;
