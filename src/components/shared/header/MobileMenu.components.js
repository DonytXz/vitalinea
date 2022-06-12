import styled from "styled-components";

//mobile menu container
export const MobileMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;