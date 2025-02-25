// Styled Components
import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
`;

export const InfoContent = styled.div`
  width: 100%;
  min-height: 357px;

  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const InfoImage = styled.div`
  flex: 1;
  height: 380px;

  display: flex;
  justify-content: center;

  position: relative;

  @media (max-width: 415px) {
    padding-left: 3rem;
  }
`;

export const Background = styled.div`
  width: 280px;
  height: 380px;

  display: flex;
  justify-content: center;

  position: relative;

  border-radius: 0px 0px 50rem 50rem;
  background: var(--color-12);

  @media (max-width: 550px) {
    width: 220px;
  }
`;

export const CircleGrey = styled.div`
  width: 200px;
  height: 200px;

  flex-shrink: 0;
  position: absolute;

  z-index: 3;

  top: calc(50% - -60px); /* Mantém o círculo sempre centralizado verticalmente */
  left: calc(50% - 230px); /* Mantém centralizado horizontalmente */

  opacity: 0.65;

  border-radius: 50%;
  transform: translate(-24px, -86px); /* Centraliza a imagem e permite ultrapassar a div */
  background: #ccc;

  @media (max-width: 1000px) {
    top: calc(50% - -55px); /* Mantém o círculo sempre centralizado verticalmente */
  }

  @media (max-width: 900px) {
    top: calc(50% - -45px); /* Mantém o círculo sempre centralizado verticalmente */
  }

  @media (max-width: 550px) {
    width: 150px;
    height: 150px;

    top: calc(50% - -100px); /* Mantém o círculo sempre centralizado verticalmente */
    left: calc(50% - 160px); /* Mantém o círculo sempre centralizado verticalmente */
  }

  @media (max-width: 360px) {
    display: none;
  }
`;

export const BlueCircle = styled.div`
  width: 260px;
  height: 260px;

  position: relative;
  overflow: visible; // Permite que a imagem ultrapasse o tamanho da div pai.

  margin-top: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: var(--color-p5);

  z-index: 1;

  img {
    z-indez: 4;
    flex-shrink: 0;
    position: absolute;
    min-width: 360px;
    transform: translate(-50px, -10px); /* Centraliza a imagem e permite ultrapassar a div */

    @media (max-width: 550px) {
      min-width: 280px;
    }
  }

  @media (max-width: 720px) {
    margin-top: 7.5rem;
  }

  @media (max-width: 550px) {
      width: 200px;
      height: 200px;

      margin-top: 12rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 12vh;

  padding: 0rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--color-p5);

  @media (max-width: 425px){
    flex-direction: column;
    justify-content: center;
  }
`;

export const Text = styled.div`
  width: 250px;

  p {
    font: var(--poppins-16);
    color: var(--color-0);

    @media (max-width: 525px){
      font: var(--poppins-12);
    }
  }

  @media (max-width: 425px){
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SocialMedia = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;

  a {
    font: var(--poppins-16);
    padding-right: .5rem;

    @media (max-width: 525px){
      font: var(--poppins-12);
    }
  }

  @media (max-width: 425px){
    width: 100%;
    height: 50%;
    justify-content: center;
  }
`;


export const Icons = styled.div`
  padding-left: .5rem;

  gap: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
