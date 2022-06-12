import styled from "styled-components";

//img logo
export const Logo = styled.img`
  width: 129px;
  height: 50px;
  object-fit: contain;
`;

//header container
export const HeaderContainer = styled.div`
  background-image: linear-gradient(
    to bottom,
    #ffff,
    rgba(255, 255, 255, 0.67)
  );
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 12px;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: col;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialIconsContend = styled.div`
  display: flex;
  flex-direction: col;
  margin: auto;
`;



export const SocialIcon = styled.img`
padding: 4px;
border-radius: 100%;
`;

