// Styles Components
import * as S from "./styles"

// Types
import P from "prop-types";

export const Text = ({ title, text }) => {
  return (
    <S.Text>
      <h3>{title}</h3>
      <p>{text}</p>
    </S.Text>
  )
}
Text.PropTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
}
