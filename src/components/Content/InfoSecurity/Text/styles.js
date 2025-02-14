import styled from "styled-components";

export const Text = styled.div`
  flex: 1;
  text-align: center;

  padding: .875rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font: var(--poppins-18);
    color: var(--color-0);
  }

  p {
    font: var(--poppins-16);
    color: var(--color-0);

  }

  @media (max-width: 430px) {
     h3 {
      font: var(--poppins-16);
      color: var(--color-0);
    }

    p {
      font: var(--poppins-12);
      color: var(--color-0);
    }
  }
`;
