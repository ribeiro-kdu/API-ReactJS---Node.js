import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-weight: 600;
    font-size: 20px;
  }

  h2 {
    line-height: 50px;
    font-weight: 300;
    font-size: 18px;
  }

  b:hover {
    padding: 0px 10px;
    color: #4CAF50;
  }

  b {
    transition-property: all;
    transition: all 1.5s;
  }

  p {
    font-family: 'Matrix', sans-serif;
    letter-spacing: 5px;
    color: #4CAF50;
  }
`;
// 