import React from "react";
import {
  AchorsContainer,
  Content,
  FooterContainer,
  ImageL,
  ImageR,
  ImgContainer,
  LinkA,
  ParaGraph,
} from "./Footer.elements";
import Brand1 from "assets/img/brand1.png";
import Brand2 from "assets/img/brand2.png";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <ImgContainer>
          <img src={Brand2} />
          <img src={Brand1} />
        </ImgContainer>
        <ImageL src={Brand1} />
        <Content>
          <AchorsContainer>
            <LinkA>Términos y condiciones </LinkA>
            <LinkA>Políticas de privacidad </LinkA>
            <LinkA> Aviso de privacidad</LinkA>
          </AchorsContainer>
          <ParaGraph>
            Danone de México 2017 ©. Todos los derechos reservados 2017
          </ParaGraph>
        </Content>
        <ImageR src={Brand2} />
      </FooterContainer>
    </>
  );
};

export default Footer;
