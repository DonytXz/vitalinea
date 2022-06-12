import styled from "styled-components";
import { colors } from "app/theme";

//menu container
export const MenuContainer = styled.div`
  width: 50%;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const UnorderList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: col;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  text-decoration: none;
  width: 100%;
  list-style: none;
  text-align: center;
  padding: 8px 0;
  color: ${colors.primary};
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: col;
  align-items: center;
`;

export const SocialIcon = styled.img`
padding: 4px;
border-radius: 100%;
`;