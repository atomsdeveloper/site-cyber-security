import * as S from "./styles"

// Components
import { Text } from "./Text";

// Icons
import { RiMobileDownloadFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";

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
      <S.ImageCards>Image</S.ImageCards>
    </S.InfoSecurity>
  )
}
