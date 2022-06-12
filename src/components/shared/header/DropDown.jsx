import React from "react";
import {
  DropDownContainer,
  ListItem,
  UnorderList,
} from "./DropDown.components";
import { menu } from "data/menu";

const DropDownItem = (props) => {
  const { item } = props;
  return (
    <>
      <ListItem>{item.name}</ListItem>
    </>
  );
};

const DropDown = () => {
  return (
    <>
      <DropDownContainer>
        <UnorderList>
          {menu.map((item, index) => {
            return <DropDownItem key={index} item={item} />;
          })}
        </UnorderList>
      </DropDownContainer>
    </>
  );
};

export default DropDown;
