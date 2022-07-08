import React from "react";
import * as S from "./styled";
import Norris from "../../providers/provider-norris";

//added the graphic accent that was missing on "usuario"

const NoSearch = () => {
  return (
    <S.Wrapper>
      <h1>Nenhum usuário pesquisado...</h1>
      <h2>Exemplo: digite "<b>ribeiro-kdu</b>"...</h2>
      <br></br>
      <Norris />
    </S.Wrapper>
  );
};

export default NoSearch;
