/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import { DropdownItem } from "reactstrap";
import { NavItemStyles } from "./styles";
import { useAuth } from "../../../context/auth";

function NavItem({ Icon, to, children, isToLogout }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleClick = () => {
    navigate(to);

    if(isToLogout) logout();
  }

  return (
    <DropdownItem
      css={NavItemStyles}
      onClick={handleClick}
      active={location.pathname === to}
    > 
      <Icon />
      { children }
    </DropdownItem>
  );
}

export default NavItem;
