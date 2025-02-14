import * as S from "./styles"

// Components
import { Text } from "./Text";

// Icons
import { RiMobileDownloadFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { BsFillTriangleFill } from "react-icons/bs";

// Images
import ImageCam2 from '../../../assets/imgs/cam-2.png'

export const InfoSecurity = () => {
  return (
    <S.InfoSecurity>
      <S.InfoCards>
        <S.ColumnMobile>
          <S.Container>
            <S.CircleWhite>
              <RiMobileDownloadFill
                size={100}
              />
            </S.CircleWhite>
          </S.Container>

          <Text
            title={"Mobile Acess"}
            text={"Lorem ipsum text about title and more notifications"}
          />
        </S.ColumnMobile>

        <S.ColumnSecurity>
          <S.Container>
            <S.CircleWhite>
              <MdSecurity
                size={100}
              />
            </S.CircleWhite>
          </S.Container>

          <Text
            title={"Coding and Security"}
            text={"Lorem ipsum text about title and more notifications"}
          />
        </S.ColumnSecurity>
      </S.InfoCards>
      <S.ImageCards>
        <S.Text>
          <BsFillTriangleFill
            size={30}
            color="var(--color-p5)"
          />
          <span>
            Technology Logical Security Code
          </span>
        </S.Text>
        <img
          src={ImageCam2}
          alt="Imagem de uma Segunda Câmera"
          width={220}
        />
        <S.Technology>
          <span>
            New Technology
          </span>
        </S.Technology>
      </S.ImageCards>
    </S.InfoSecurity>
  )
}
