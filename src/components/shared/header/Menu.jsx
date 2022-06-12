import React from "react";
import { socialIcons } from "data/sicialIcons";
import { menu } from "data/menu";
import {
  MenuContainer,
  ListItem,
  UnorderList,
  SocialIconsContainer,
  SocialIcon,
} from "./Menu.components";

const MenuItem = (props) => {
  const { item } = props;
  return (
    <>
      <ListItem>{item.name}</ListItem>
    </>
  );
};

const Menu = () => {
  return (
    <>
      <MenuContainer>
        <UnorderList>
          {menu.map((item, index) => {
            return <MenuItem key={index} item={item} />;
          })}
        </UnorderList>
        <SocialIconsContainer>
          {socialIcons.map((item, index) => {
            return <SocialIcon key={index} src={item.url} />;
          })}
        </SocialIconsContainer>
      </MenuContainer>
    </>
  );
};

export default Menu;
