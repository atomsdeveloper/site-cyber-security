import * as S from "./styles";

export const Infos = () => {
  return (
    <S.Container>
      <S.InfoContent>
        <S.InfoScript>
          <div style={{ height: "50%", display: "flex", width: "100%", background: "green", }}>
            <div style={{ width: "25%", background: "grey", display: "flex", justifyContent: "center", alignItems: "center" }}>
              Icon
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "start" }}>
              <h3>Texto 1</h3>
              <p> Descriptions</p>
            </div>
          </div>
          <div>
            <h3>Texto 2</h3>
            <p> Descriptions</p>
          </div>
        </S.InfoScript>
        <S.InfoImage>Imagem</S.InfoImage>
      </S.InfoContent>

      <S.InfoSecurity>
        <S.InfoCards>Cards</S.InfoCards>
        <S.ImageCards>Image</S.ImageCards>
      </S.InfoSecurity>
    </S.Container>
  );
};
