import React from "react";
import {
  HeroContainer,
  ImgProductHero,
  HeroContent,
  InfoContainer,
  TasteContainer,
  TasteTitle,
  Taste,
  Heading,
  Paragraph,
  Action,
  Icon,
  IconContainer,
  ArrowDown,
} from "./Hero.elements";
import ProductImg from "assets/img/product.png";
import Avalada from "assets/img/icons/avalado.png";
import Less100k from "assets/img/icons/less100k.png";
import ArrowDownImg from 'assets/img/icons/arrowDown.png';

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <ImgProductHero src={ProductImg} />
          <InfoContainer>
            <TasteContainer>
              <TasteTitle>Sabor:</TasteTitle>
              <Taste back={"#dc9c9c"}>Fresa</Taste>
              <Taste>Guayaba</Taste>
              <Taste>Toronja</Taste>
            </TasteContainer>
            <Heading>Vitalínea® Bebible Fresa 217 gr.</Heading>
            <Paragraph>
              ¡La presentación ideal para llevar contigo! Vitalínea bebible es
              la opción si eres de las personas que siempre están activas y
              quieren probar algo sano, rico y práctico.
            </Paragraph>
            <Action>Comprar en Walmart</Action>
            <IconContainer>
              <Icon src={Avalada} />
              <Icon src={Less100k} />
            </IconContainer>
      
          </InfoContainer>
        </HeroContent>
      <ArrowDown src={ArrowDownImg} />
      </HeroContainer>
    </>
  );
};

export default Hero;
