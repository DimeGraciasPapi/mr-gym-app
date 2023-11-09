import styled from "@emotion/styled";
import { BiArrowBack } from "react-icons/bi";
import { COLORS } from "../../styles";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 5rem;
  background-color: ${COLORS.black};
  border-top: 1px solid white;
  border-bottom: 1px solid white;

  @media screen and (max-width: 990px) {
    padding: 2rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 1040px) {
    justify-content: center;
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const Description = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 1040px) {
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: ${COLORS.orange};
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: white;
  font-weight: 500;
`;

export const Icon = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({color}) => color || COLORS.orange};
  border-radius: 1rem;
  font-size: 100px;
  color: white;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  flex-wrap: wrap;

  @media screen and (max-width: 1340px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  align-items: end;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid white;
  padding: 1rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ src_img }) => src_img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  .title {
    color: white;
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const Back = styled(BiArrowBack)`
  color: white;
  font-size: 2.2rem;
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    top: 0.5rem;
    left: 0.5rem;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 1rem;

  @media screen and (max-width: 500px) {
    max-width: 250px;
    // height: 200px;
  }
`;

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Screen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, .8);
  cursor: pointer;
`;

export const FlexRow = styled.div`
  margin-top: 2rem;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ModalVideo = styled.div`
  height: 70vh;
`;
