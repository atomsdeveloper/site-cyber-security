import * as S from "./styles";

// Components
import { InfoScript } from "./InfoScript";
import { InfoSecurity } from "./InfoSecurity";

// Images
import ImageCam from "../../assets/imgs/cam-1.png"

// Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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

      <S.Footer>
        <S.Text>
          <p>
            Renan Nascimento da Silva
          </p>
        </S.Text>
        <S.SocialMedia>
          <a
            href="http://atomsdev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.atomsdev.vercel.app
          </a>
          ||
          <S.Icons>
            <FaLinkedin size={20} />
            <FaGithub size={20} />
          </S.Icons>
        </S.SocialMedia>
      </S.Footer>

    </S.Container>
  );
};
