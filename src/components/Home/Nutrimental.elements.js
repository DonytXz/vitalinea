import styled from "styled-components";
import { colors } from "app/theme";

export const NutrimentalContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  width: 90%;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 70%;
  }
  margin: 0 auto;
  margin-top: 160px;
`;

export const NutrimentalTitle = styled.p`
  color: ${colors.primary};
  font-weight: 300;
  font-size: 32px;
`;

export const NutrimentalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  margin: auto;
  width: 80%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const NutrimentalTableTitle = styled.p``;
export const NutrimentalTableValue = styled.p`margin-left: auto;`;
export const NutrimentalItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NutrimentalTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  @media (min-width: 768px) {
    width: 50%;
  }
  background-color: #d3d3d3;
  padding: 20px;
`;

export const Paragraph = styled.p.attrs((props) => ({
  fontWeight: props.fontW || "normal",
}))`
  font-weight: ${(props) => props.fontWeight};
`;
