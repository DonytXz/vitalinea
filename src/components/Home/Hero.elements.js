import styled from "styled-components";
import { colors } from "app/theme";
//hero container
export const HeroContainer = styled.div`
  @media screen and (min-height: 550px) {
    &:before {
      content: "";
      display: flex;
      height: 100px;
      width: 100vw;
      background: white;
      position: absolute;
      transform: rotate(2deg);
      bottom: 0;
      left: -10px;
    }
    height: 80vh;
  }

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 14px 44px 0 rgba(0, 0, 0, 0.09);
  background-image: linear-gradient(to bottom, #f9e6e6, #ebacac);
  @media screen and (max-width: 768px) {
    &:before {
      content: "";
      display: flex;
      height: 0;
      width: 0;
      background: white;
      position: absolute;
      transform: rotate(2deg);
      bottom: 0;
    }
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  width: 66%;
  margin: auto;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TasteContainer = styled.div`
  display: flex;
`;
export const TasteTitle = styled.p`
  color: #000;
`;

export const Taste = styled.p.attrs((props) => ({
  background: props.back || "transparent",
}))`
  color: #000;
  background: ${(props) => props.background};
  min-width: 50px;
  height: 15px;
  padding: 8px;
  text-align: center;
  font-size: 12px;
  border-radius: 11.5px;
  margin: auto 12px;
  border: solid 1px #ccc;
  @media screen and (max-width: 768px) {
    margin: auto 2px;
  }
`;

export const Heading = styled.h1`
  color: ${colors.primary};
  font-weight: normal;
`;
export const Paragraph = styled.p``;
export const Action = styled.button`
  background: ${colors.primary};
  color: white;
  font-weight: normal;
  min-width: 150px;
  max-width: 180px;
  padding: 8px;
  font-size: 14px;
  border: none;
`;

export const Icon = styled.img`
  margin: 12px 16px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const ArrowDown = styled.img`
  background: ${colors.primary};
  padding: 8px;
  width: 20px;
  margin: auto 0;
  position: absolute;
  bottom: 80px;
  @media screen and (max-height: 550px) {
    position: relative;
    margin-top: 80px;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    bottom: -20px;
    
  }

  border-radius: 100%;
  z-index: 9999;
`;

export const ImgProductHero = styled.img`
  object-fit: contain;
  width: 250px;
  transform: rotate(-360deg);
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;
