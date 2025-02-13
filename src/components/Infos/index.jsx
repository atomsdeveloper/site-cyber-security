import * as S from "./styles";

// Components
import { InfoScript } from "./InfoScript";
import { InfoSecurity } from "./InfoSecurity";

// Images
import ImageCam from "../../assets/imgs/cam-1.png"

export const Content = () => {
  return (
    <S.Container>
      <S.InfoContent>
        <InfoScript
          firstTitle={"Innovation and Services"}
          firstText={
            "Lorem Ipsum Sha Tree second two texts and half men after lorem day ipsum text aleatory before whrite script"
          }
          secondTitle={"Technology"}
          secondText={
            "Lorem Ipsum Sha Tree second two texts and half men after lorem day ipsum text aleatory before whrite script"
          }
        />
        <S.InfoImage>
          <S.Background>
            <S.BlueCircle>
              <img src={ImageCam} alt="Imagem de uma Câmera de Segurança" />
            </S.BlueCircle>
          </S.Background>
          <S.CircleGrey />
        </S.InfoImage>
      </S.InfoContent>

      <InfoSecurity />

      <div style={{ background: "var(--color-p5)", height: "100vh", width: '100%' }}>Teste</div>

    </S.Container>
  );
};
