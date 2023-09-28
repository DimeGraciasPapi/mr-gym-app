/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import { DropdownItem } from "reactstrap";
import { NavItemStyles } from "./styles";

function NavItem({ Icon, to, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <DropdownItem
      css={NavItemStyles}
      onClick={() => navigate(to)}
      active={location.pathname === to}
    > 
      <Icon />
      { children }
    </DropdownItem>
  );
}

export default NavItem;
