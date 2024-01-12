import { useLocation, useNavigate } from "react-router-dom";
import { Item } from "./styles";
import { useData } from "../../context/data";

function NavItem({ Icon, to, name, setIsOpen, isOpen, isActive }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { backup, setMembers } = useData();

  const handleClick = () => {
    if(isOpen) setIsOpen(false);
    if(pathname === to) return;
    navigate(to);
    setMembers(backup.members);
  }

  return (
    <Item
      onClick={handleClick}
      isActive={isActive || (pathname === to)}
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
