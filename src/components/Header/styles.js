import styled from "styled-components";

export const Header = styled.header`
  height: 50vh;

  background-color: var(--color-p5);
`;

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.div`
  width: 15%;
  height: 100%;

  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: start;

  p {
  font: var(--poppins-18);
    color: var(--color-0);
  }
`;

export const Menu = styled.div`
  flex: 1;
  height: 100%;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Button = styled.div`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: var(--color-0);

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.article`
  width: 100%;
  height: calc(100% - 10vh);

  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Arrow = styled.div`
  bottom: ${(props) => (props.mobile ? "8rem" : "7em")};
  right:  ${(props) => (props.mobile ? "1rem" : "8rem")};
  position: absolute;
  transform: rotate(300deg);
`;

export const Triangle = styled.div`
  bottom: 1rem;
  left: 1rem;
  position: absolute;
  transform: rotate(240deg);
`;


