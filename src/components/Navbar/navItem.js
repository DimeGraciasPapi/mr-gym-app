/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import { DropdownItem } from "reactstrap";
import { NavItemStyles } from "./styles";
import { useAuth } from "../../context/auth";

function NavItem({ Icon, to, children, isToLogout, active }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(to);
    
    if (isToLogout) logout();
  };

  return (
    <DropdownItem
      css={NavItemStyles}
      onClick={handleClick}
      active={active || (!isToLogout && location.pathname === to)}
    >
      <Icon />
      {children}
    </DropdownItem>
  );
}

export default NavItem;
