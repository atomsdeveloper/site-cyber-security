import styled from "styled-components";

export const InfoScript = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;


  @media (max-width: 1000px) {
    width: 100%;
    height: 40%;
  }

  @media (max-width: 420px) {
    padding-top: 2rem;
  }
`;

export const ScriptContainer = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
`;

export const ContainerIcon = styled.div`
  width: 25%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackIcon = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(45deg);

  border-radius: 50%;
  background: var(--color-p5);
`;

export const ContainerTextOne = styled.div`
  flex: 1;

  display: flex;
  align-items: end;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;

  h3 {
    font: var(--poppins-24);
    color: var(--color-p5);
  }

  p {
    font: var(--poppins-16);
    color: var(--color-12);
    text-align: end;
  }

  @media (max-width: 1000px){
    width: 100%;
    align-items: start;

    p {
      text-align: start;
    }
  }
`;

export const ContainerTextTwo = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 50%;

  padding: 1rem;

  h3 {
    font: var(--poppins-24);
    color: var(--color-p5);
  }

  p {
    font: var(--poppins-16);
    color: var(--color-12);
    text-align: end;

  }

  @media (max-width: 1000px){
    width: 100%;
    align-items: center;

    p {
      text-align: start;
    }
  }
`;
