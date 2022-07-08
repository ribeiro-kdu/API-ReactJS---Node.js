import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media(max-width: 615px) {
    justify-content: center !important;
  }

`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;



  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: start;
  div {
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: right;
  }

    @media(max-width: 615px) {
    justify-content: center !important;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: green;
    font-weight: bold;
  }

  
  @media(max-width: 615px) {
    justify-content: center !important;
  }

`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 25px;
`;