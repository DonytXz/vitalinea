import styled from "styled-components";
import { colors } from "app/theme";

//dropdown container
export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
`;

export const UnorderList = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  text-decoration: none;
  width: 100%;
  list-style: none;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  text-align: center;
  padding: 8px 0;
  color: #fff;
`;
