import * as S from "./styles";

// Icons
import { FaArrowUp } from "react-icons/fa";

// Type
import P from "prop-types"

export const InfoScript = ({
  firstTitle,
  firstText,
  secondTitle,
  secondText
}) => {
  return (
    <S.InfoScript>
      <S.ScriptContainer>
        <S.ContainerIcon>
          <S.BackIcon>
            <FaArrowUp size={25} />
          </S.BackIcon>
        </S.ContainerIcon>
        <S.ContainerTextOne>
          <h3>{firstTitle.toUpperCase()}</h3>
          <p>{firstText}</p>
        </S.ContainerTextOne>
      </S.ScriptContainer>
      <S.ContainerTextTwo>
        <h3>{secondTitle.toUpperCase()}</h3>
        <p>{secondText}</p>
      </S.ContainerTextTwo>
    </S.InfoScript>
  )
}
InfoScript.propTypes = {
  firstTitle: P.string.isRequired,
  firstText: P.string.isRequired,
  secondTitle: P.string.isRequired,
  secondText: P.string.isRequired
}
