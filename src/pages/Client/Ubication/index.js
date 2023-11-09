/** @jsxImportSource @emotion/react */
import PlansSection from "../../../components/PlansSection";
import { Card, Container, FlexRow, IconStyle, Image, Logo, Section, Title } from "./styles";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidJoystick } from "react-icons/bi";
import Icon from "./iconMarker";
import Button from "../../../components/Button";
import { useData } from "../../../context/data";

function Ubication() {
  const { setModal } = useData();

  return (
    <>
      <Container>
        <Section>
          <Logo 
            alt="logo"
            src="assets/logo.png"
          />
          <FlexRow>
            <Title> UBÍCANOS! </Title>
            <LiaTelegramPlane
              css={IconStyle}
            />
          </FlexRow>
        </Section>
        <Section height={300}>
          <Image
            alt="land_mr_gym"
            src="assets/photo/mr_gym.jpg"
          />
        </Section>
        <Section height={350}>
          <MapContainer 
              center={{lat: "-12.055937189576545", lng: "-75.21628297598784"}}
              zoom={15}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker 
                position={{lat: "-12.055937189576545", lng: "-75.21628297598784"}}
                icon={Icon}
              >
                <Popup>
                  Gimnasio Mister Gym <br />
                  <a
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/Gimnasio+Mister+Gym/@-12.0561352,-75.2162485,20.09z/data=!4m6!3m5!1s0x910e9639711c2887:0xa28c37a0a5415d77!8m2!3d-12.0560736!4d-75.2162937!16s%2Fg%2F11h0t5jprw?hl=es-419&entry=ttu"
                    target="_blank"
                  >
                    Visitar
                  </a>
                </Popup>
              </Marker>
            </MapContainer>
        </Section>
        <Section>
          <Card>
            <FlexRow>
              <FaMapMarkerAlt 
                size={40}
                style={{transform: "translate(-4px, -6px)"}}
              />
              <Title 
                responsiveSize={1.2}
                size={1.4}
              >
                José Olaya 358, Huancayo 12004
              </Title>
            </FlexRow>
            <FlexRow>
              <BsFillTelephoneFill 
                size={35}
                style={{transform: "translateY(-6px)"}}
              />
              <Title 
                size={1.4}
                responsiveSize={1.2}
              >
                913 211 368
              </Title>
            </FlexRow>
            <FlexRow>
              <BiSolidJoystick 
                size={45}
                style={{transform: "translateY(-6px)"}}
              />
              <Title 
                size={1.4}
                responsiveSize={1.2}
              >
                WQVM+HF Huancayo
              </Title>
            </FlexRow>
            <Button
              style={{alignSelf: "center"}}
              filled
              onClick={() => setModal((modal) => ({action: "register", isOpen: !modal.isOpen}))}
            >
              Registrarme
            </Button>
          </Card>
        </Section>
      </Container>
      <PlansSection />
    </>
  );
}

export default Ubication;
