import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font: var(--poppins-48);
    font-weight: bold;

    span {
      padding: 0.5rem;

      color: var(--color-12);
      border-radius: 64px;
      background: var(--color-0);
    }

    @media (max-width: 700px) {
      font: var(--poppins-48);
    }

    @media (max-width: 480px) {
      font: var(--poppins-32);
    }
  }

  p {
    font: var(--poppins-16);
    margin-top: 0.5rem;
    color: var(--color-0);
  }

`;

