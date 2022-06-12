import styled from "styled-components";

export const ProductsContainer = styled.div`
  background-image: linear-gradient(to bottom, #f9e6e6, #ebacac);
  padding: 20px;
  margin-top: 60px;
  justify-content: center;
`;

export const ProductsTitle = styled.p`
text-align: center;
  color: #78246d;
  font-size: 44px;
  font-weight: 300;
  margin-top: 40px;
  
`

export const ProductsContent = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin: auto;
@media (max-width: 768px) {
  flex-direction: column;
}
`

export const ProductContsatiner = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  `



export const Product = styled.img`
margin: auto;

`
export const ProductName = styled.p`
text-align: center;
margin: auto;
`