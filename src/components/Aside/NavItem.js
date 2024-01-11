import { useLocation, useNavigate } from "react-router-dom";
import { Item } from "./styles";

function NavItem({ Icon, to, name, setIsOpen, isOpen }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    if(isOpen) setIsOpen(false);
    if(pathname === to) return;
    navigate(to);
  }

  return (
    <Item
      onClick={handleClick}
      isActive={pathname === to}
    >
      { 
        Icon 
        && 
        <Icon
          size={18}
          style={{marginTop: "-3px"}}
        />
      }
      { name }
    </Item>
  )
}

export default NavItem;
