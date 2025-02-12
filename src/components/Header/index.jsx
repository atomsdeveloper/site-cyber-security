// Syled Components
import * as S from "./styles";

// Components
import { Title } from "./Title";

// Animations CSS
// import AOS from "aos";
// import "aos/dist/aos.css";

// Icons
import { PiSecurityCamera } from "react-icons/pi";
import { MdDarkMode } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

// Hooks
import useMedia from "../../hooks/useMedia";

export const Header = () => {
  const mobile = useMedia("(max-width: 600px)");

  return (
    <S.Header>
      <S.Nav>
        <S.Icon>
          <PiSecurityCamera size={40} color="var(--color-0)" />
          <p>CodeSec</p>
        </S.Icon>

        <S.Menu>
          <S.Button>
            <MdDarkMode size={20} />
          </S.Button>
        </S.Menu>
      </S.Nav>

      <S.Content>
        <Title title={"High Security for your places"} text={"Code Security"} />

        <S.Triangle>
          <IoTriangle size={60} color="var(--color-0)" />
        </S.Triangle>

        <S.Arrow mobile={mobile}>
          <FaArrowUp size={mobile ? 70 : 90} />
        </S.Arrow>
      </S.Content>
    </S.Header>
  );
};
