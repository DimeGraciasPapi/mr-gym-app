import { Container } from "./styles";

function Button({ children, filled, Icon, ...args }) {
  return (
    <Container
      filled={filled}
      {...args}
    >
      { Icon && <Icon />}
      { children }
    </Container>
  );
}

export default Button;
