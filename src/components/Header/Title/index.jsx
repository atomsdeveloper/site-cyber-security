// Syled Components
import * as S from "./styles";

// Props Types
import P from 'prop-types';

export const Title = ({ title, text }) => {
  // Separar o texto após a palavra 'security'
  const textParts = title.split('Security');

  return (
    <S.Title>
      <h1>{textParts[0]} <span> Security </span></h1>
      <br />
      <h1>{textParts[1]}</h1>
      <p>{text.toUpperCase()}</p>
    </S.Title>
  );
};
Title.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
}
