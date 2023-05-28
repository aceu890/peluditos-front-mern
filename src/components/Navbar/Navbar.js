import React, { useState } from "react";
import { Container, LogoContainer, Wrapper, Menu, MobileIcon } from "./Navbar.elements";
import { FaBattleNet, FaBars, FaTimes, FaHome, FaUserAlt, FaBriefcase } from "react-icons/fa";
import { IconContext } from "react-icons";
import MenuItemLinkWrapper from "./MenuItemLinkWrapper";

const Navbar = ({ nav1, nav2, nav3 }) => {
const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <p></p>
            {/* <FaBattleNet /> */}
            <p>🐶 PELUDITOS</p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItemLinkWrapper icon={<FaHome />} to="/" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {nav1}
            </MenuItemLinkWrapper>

            <MenuItemLinkWrapper icon={<FaUserAlt />} to="/agregarusuario" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {nav2}
            </MenuItemLinkWrapper>

            <MenuItemLinkWrapper icon={<FaBriefcase />} to="/historial" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {nav3}
            </MenuItemLinkWrapper>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
