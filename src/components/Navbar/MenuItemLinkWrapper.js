import React from "react";
import { MenuItem, MenuItemLink } from "./Navbar.elements";
import { Link } from 'react-router-dom';

const MenuItemLinkWrapper = ({ icon, to, onClick, children }) => (
  <MenuItem>
    <MenuItemLink onClick={onClick}>
      <div>
        {icon}
        <Link to={to}>{children}</Link>
      </div>
    </MenuItemLink>
  </MenuItem>
);

export default MenuItemLinkWrapper;
