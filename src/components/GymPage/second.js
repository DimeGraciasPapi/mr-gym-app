import { useState } from "react";
import { DATA } from "../../data";
import { Back, Container, Description, FlexRow, Image, List, ModalVideo, Screen, Section, Text, Title, Video, VideoContainer } from "./styles";
import { FaPlay } from "react-icons/fa6";
import { BsFillLockFill, BsFillPeopleFill } from "react-icons/bs";
import { useAuth } from "../../context/auth";
import Button from "../Button";
import { useData } from "../../context/data";
import { Modal } from "reactstrap";

function SecondGymPage({ mainSearch, secondSearch }) {
  const [modalVideo, setModalVideo] = useState({src: "", isOpen: false });
  const mainInfo = DATA.GymGo.find(item => item.title.toLocaleLowerCase().includes(mainSearch));
  const secondInfo = mainInfo.list.find(item => item.title.toLocaleLowerCase().includes(secondSearch));
  const { user } = useAuth();
  const { setModal } = useData();

  const toggle = () => setModalVideo(modal => ({ ...modal, isOpen: !modal.isOpen }));

  const handleClick = (link) => {
    if(!user) return;

    setModalVideo(modal => ({ src: link, isOpen: !modal.isOpen }))
  }

  return (
    <Container>
      <Back 
        onClick={() => window.history.back()}
      />
      <Section>
        <Description>
          <Title>{ secondInfo.title }</Title>
          <Text>{ secondInfo.description }</Text>
          {
            !user && <FlexRow>
                      <Text> Regístrate para ver los videos. Gratis!! </Text>
                      <Button
                        Icon={BsFillPeopleFill}
                        filled
                        onClick={() => setModal(modal => ({ action: "register", isOpen: !modal.isOpen }))}
                      >
                        Registrarme
                      </Button>
                    </FlexRow>
          }
        </Description>
        <Image 
          alt={`photo-${secondInfo.to}`}
          src={`/assets/photo/${secondInfo.src_img}`}
        />
      </Section>
      <List>
        {
          secondInfo.links.map((link, index) => (
            <VideoContainer
              onClick={() => handleClick(link)}
            >
              <Video
                key={index}
                src={link}
                title="YouTube video player" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                >
              </Video>
              <Screen>
                {
                  user 
                  ? <FaPlay 
                      color="white"
                      size={80}
                    />
                  : <BsFillLockFill
                      color="white"
                      size={80}
                    />                
                }
              </Screen>
            </VideoContainer>
          ))
        }
        
      </List>
      <Modal
        centered
        size="lg"
        isOpen={modalVideo.isOpen}
        toggle={toggle}
      >
        <ModalVideo>
          <Video
            src={modalVideo.src}
            title="YouTube video player" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          >
          </Video>
        </ModalVideo>
      </Modal>
    </Container>
  );
}

export default SecondGymPage;
