import React, { useState } from "react";
import { Logo, HeaderContainer,   SocialIconsContend, } from "./Header.elements";
import { Menu, MobileMenu, DropDown } from "./header/";
import imgLogo from "assets/img/logo.jpg";
import {
  SocialIconsContainer,
  SocialIcon,
} from "./header/Menu.components";
import { socialIcons } from "data/sicialIcons";

const Header = () => {
  const [openMoible, setOpenMobile] = useState(false);
  return (
    <>
      <HeaderContainer>
        <Logo src={imgLogo} />
        <Menu />
        <MobileMenu openMoible={openMoible} setOpenMobile={setOpenMobile} />
      </HeaderContainer>
      {openMoible && (
        <>
          <DropDown />
          <SocialIconsContainer>
            <SocialIconsContend>
              {socialIcons.map((item, index) => {
                return <SocialIcon key={index} src={item.url} />;
              })}
            </SocialIconsContend>
          </SocialIconsContainer>
        </>
      )}
    </>
  );
};

export default Header;
