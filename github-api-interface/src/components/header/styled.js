import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'Matrix', sans-serif;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    font-family: 'Matrix', sans-serif;
    letter-spacing: 5px;
    border: 1px solid #757575;
    border-radius: 8px;
    width: 100%;
    min-width: 200px;
    height: auto;
    padding: 8px;
    padding-left: 15px;
    font-weight: 500;
    color: #4CAF50;
    background-color: #000;
  }

  input::placeholder {
    padding-left: 15px;
    font-family: 'Matrix', sans-serif;
    letter-spacing: 5px;
    color: #4CAF50;
    height: auto;
  }

  button {
    background-color: #4CAF50;
    box-shadow: 2px 2px 3px #757575;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #388E3C;
      box-shadow: 2px 2px 3px #212121;
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }

  @media(max-width: 900px) {
    input::placeholder {
      padding-left: 0;
      letter-spacing: 0;
      font-size: 15px;
    }
  }


  @media(max-width: 615px) {
    justify-content: center !important;
    flex-direction: column !important;
    flex-wrap: wrap;

    button {
      margin: 20px 16px;
      text-align: center;
    }
  }

  @media(max-width: 400px) {
    input {
      padding-left: 5px;
      font-weight: 400;
    }

    input::placeholder {
      font-size: 10px;
    }
  }
`;
