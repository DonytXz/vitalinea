import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  max-width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 15px;
  }
`;

export const ImageL = styled.img`
  max-width: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ImageR = styled.img`
  margin-left: auto;
  max-width: 80px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ParaGraph = styled.p`
  text-align: center;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const LinkA = styled.div`
  border-right: solid 1px black;
  margin-left: 1px;
  padding: 1px;

  font-size: 14px;
  @media (min-width: 768px) {
    padding: 5px;
    margin-left: 8px;
    font-size: 16px;
    text-align: center;
    margin: auto;
  }
`;

export const AchorsContainer = styled.a`
  display: flex;
  flex-direction: row;
`;
