import styled from "styled-components";

export const InfoSecurity = styled.div`
  width: 100%;
  height: 50%;
  display: flex;

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
`;

export const ColumnMobile = styled.div`
  position: absolute;

  left: 5rem;
  bottom: 0;

  width: 280px;
  height: 80%;
  background: var(--color-12);
`;

export const ColumnSecurity = styled.div`
  position: absolute;

  right: 5rem;
  bottom: 0;

  width: 280px;
  height: 80%;
  background: var(--color-12);
`;

export const ImageCards = styled.div`
  flex: 1;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
`;
