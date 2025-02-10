import { Link } from "react-router-dom";

// Types
import P from "prop-types";

// Styles
import * as S from "./styles";

// Components
import { Container } from "../../components/container";

export const NotFound = ({ text }) => {
  return (
    <S.MainContainer>
      <Container>
        <S.Title> Error: 404 <span>.</span> </S.Title>
        <p>{text}</p>
        <Link to="/">Back to Home</Link>
      </Container>
    </S.MainContainer>
  )
}
NotFound.propTypes = {
  text: P.string,
}
