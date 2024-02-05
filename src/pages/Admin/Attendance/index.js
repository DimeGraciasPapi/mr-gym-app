import { useState } from "react";
import { Modal, Spinner, Table } from "reactstrap";
import Button from "../../../components/Button";
import { Title } from "../../../styles/layout";
import { CheckBox, Container, Section } from "./styles";
import { MdOutlineAppRegistration } from "react-icons/md";
import { useData } from "../../../context/data";
import capitalize from "../../../helpers/capitalize";
import { FlexRow, Text } from "../Member/styles";
import { useNavigate } from "react-router-dom";
import { FlexColumn, FormTitle } from "../Members/styles";
import { IoClose } from "react-icons/io5";
import FormInput from "../../../components/FormInput";
import { HiIdentification } from "react-icons/hi2";
import { COLORS } from "../../../styles/colors";
import { FaCheck } from "react-icons/fa";
import { post } from "../../../services";

function Attendance() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ dni, setDni ] = useState("");
  const [ backup, setBackup ] = useState([]);
  const [ memberSelected, setMemberSelected ] = useState();
  const [ isLoading, setIsLoading ] = useState(false);
  const { registers, members, isGetting, setRegisters } = useData();

  const attendance = registers.map((register) => {
    const user = members?.find((member) => member.id === register.user[0]);

    return {
      ...register,
      user
    }
  }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const navigate = useNavigate();
  const toggle = () => {
    if(isGetting) return;
    if(isOpen) {
      setMemberSelected("");
      setDni("");
    }

    setBackup(members);
    setIsOpen(!isOpen);
  }

  const handleChange = (event) => {
    setDni(event.target.value);
    const filter = members?.filter((member) => member.dni.toString().includes(event.target.value));
    setBackup(filter);
  }

  const handleSubmit = async () => {
    if(!memberSelected) return;
    setIsLoading(true);

    try {
      const newRegister = await post("registers", { userId: memberSelected.id });
      setRegisters((prev) => prev.concat([newRegister]));
      setIsLoading(false);
      toggle();
    }catch(e) {
      console.error(e);

      setIsLoading(false);
    }
  }

  return (
    <>
      <Title>Registro de asistencia</Title>
      <Section>
        <Button
          filled
          color="secondary"
          Icon={MdOutlineAppRegistration}
          onClick={toggle}
        >
          Registrar
        </Button>
      </Section>
      <Container>
        {
          isGetting
          ? <Spinner />
          : <Table
              bordered
              borderless
              dark
              hover
              responsive
              size="sm"
              striped
            >
              <thead>
                <tr>
                  <th>
                    <Text
                      toDown
                      weight={600}
                      size={17}
                    >
                      N°
                    </Text>
                  </th>
                  <th>
                    <Text
                      toDown
                      weight={600}
                      size={17}
                    >
                      DNI
                    </Text>
                  </th>
                  <th>
                    <Text
                      toDown
                      weight={600}
                      size={17}
                    >
                      Nombre
                    </Text>
                  </th>
                  <th>
                    <Text
                      toDown
                      weight={600}
                      size={17}
                    >
                      Fecha
                    </Text>
                  </th>
                  <th>
                    <Text
                      toDown
                      weight={600}
                      size={17}
                    >
                      Prestado
                    </Text>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  attendance?.map((item, index) => {
                    const date = new Date(item.createdAt);

                    return (
                      <tr
                        style={{cursor: "pointer"}}
                        key={index}
                        onClick={() => navigate(`/asistencia/${item.id}`)}
                      >
                        <th>
                          <Text
                            toDown
                            size={16}
                            style={{minWidth: "30px"}}
                          >
                            {index + 1}
                          </Text>
                        </th>
                        <th>
                          <Text
                            toDown
                            size={16}
                            style={{minWidth: "100px"}}
                          >
                            {item.user?.dni}
                          </Text>
                        </th>
                        <th>
                          <Text
                            toDown
                            size={16}
                            style={{minWidth: "180px"}}
                          >
                            {capitalize(item.user?.name.toLowerCase())}
                          </Text>
                        </th>
                        <th>
                          <Text
                            toDown
                            size={16}
                            style={{minWidth: "120px"}}
                          >
                            {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                          </Text>
                        </th>
                        <th>
                          <Text
                            toDown
                            size={16}
                            style={{minWidth: "150px"}}
                          >
                            {capitalize(item.takes[0])} ....
                          </Text>
                        </th>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
        }
        
      </Container>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        centered
      >
        <FlexColumn>
          <FormTitle>Registrar asistencia</FormTitle>
          <IoClose 
            className="icon"
            size={24}
            onClick={toggle}
          />
          <FlexRow
            wrap
            width="100%"
          >
            <FormInput
              Icon={HiIdentification}
              id="dni"
              placeholder="Buscar con DNI"
              value={dni}
              handleChange={handleChange}
            />
            <Button
              Icon={MdOutlineAppRegistration}
              filled
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {
                isLoading
                ? <>
                    <Spinner size="sm" />
                    {" "}
                    Registrando...
                  </>
                : "Registrar"
              }
            </Button>
          </FlexRow>
          <Table
            bordered
            borderless
            size="sm"
            responsive
          >
            <tbody>
              {
                backup.filter((item) => item.plan[0]).map((item, index) => (
                  <tr
                    key={index}
                  >
                    <th>
                      <CheckBox
                        isActive={memberSelected?.id === item.id}
                        onClick={() => setMemberSelected(item)}
                      >
                        {
                          memberSelected?.id === item.id
                          && <FaCheck />
                        }
                      </CheckBox>
                    </th>
                    <th>
                      <Text
                        color={COLORS.black}
                        size={15}
                        style={{minWidth: "100px"}}
                        toDown
                      >
                        { item.dni }
                      </Text>
                    </th>
                    <th>
                      <Text
                        color={COLORS.black}
                        size={15}
                        style={{minWidth: "150px"}}
                        toDown
                      >
                        { capitalize(item.name.toLowerCase() + " " + item.last_name.toLowerCase()) }
                      </Text>
                    </th>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </FlexColumn>
      </Modal>
    </>
  )
}

export default Attendance;
