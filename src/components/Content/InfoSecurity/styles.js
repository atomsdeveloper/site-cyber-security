import styled from "styled-components";

export const InfoSecurity = styled.div`
  width: 100%;
  height: 50%;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

export const InfoCards = styled.div`
  width: 50%;
  height: 100%;

  position: relative;

  display: flex;
  justify-content: space-around;

  @media (max-width: 1000px) {
    width: 100%;
    height: 50%;
  }
`;

export const ColumnMobile = styled.div`
  width: 180px;
  height: 95%;

  position: absolute;

  left: 4rem;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 50rem 50rem 0 0;
  background: var(--color-12);

  @media (max-width: 1000px) {
    left: 8rem;
  }

  @media (max-width: 650px) {
    left: 5rem;
  }

  @media (max-width: 515px) {
    left: 2rem;
  }

  @media (max-width: 430px) {
    width: 145px;
  }
`;

export const Container = styled.div`
  width: 180px;
  height: 180px;

  position: relative;
  top: -18;

  display: flex;
  justify-content: center;

  @media (max-width: 430px) {
    width: 145px;
  }
`;

export const CircleWhite = styled.div`
  width: 160px;
  height: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 0.7rem;

  border-radius: 50%;
  background: var(--color-0);

  @media (max-width: 430px) {
    width: 130px;
    height: 130px;
  }
`;

export const ColumnSecurity = styled.div`
  width: 180px;
  height: 95%;

  position: absolute;

  right: 4rem;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 50rem 50rem 0 0;
  background: var(--color-12);

  @media (max-width: 1000px) {
    right: 8rem;
  }

  @media (max-width: 640px) {
    right: 5rem;
  }

  @media (max-width: 515px) {
    right: 2rem;
  }

  @media (max-width: 430px) {
    width: 145px;
  }
`;

export const ImageCards = styled.div`
  flex: 1;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
`;
