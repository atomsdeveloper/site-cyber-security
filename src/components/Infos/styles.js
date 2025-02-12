// Styled Components
import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;

  background: green; // Remove
`;

export const InfoContent = styled.div`
  width: 100%;
  height: 60%;

  display: flex;


  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: 50%;
  }

  background-color: var(--color-p9); // Remove
`;

export const InfoImage = styled.div`
  flex: 1;

  @media (max-width: 900px) {
    flex: none;
    height: 60%;
  }

  background: blue; // Remove
`;

export const InfoScript = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;


  @media (max-width: 900px) {
    width: 100%;
    height: 40%;
  }

  background: red; // Remove
`;

export const InfoSecurity = styled.div`
  width: 100%;
  height: 40%;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    height: 50%;
  }
`;

export const InfoCards = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
    height: 50%;
  }

  background: purple;
`;

export const ImageCards = styled.div`
  flex: 1;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    height: 50%;
  }

  background: pink;
`;
