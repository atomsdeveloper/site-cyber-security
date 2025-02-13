import { useEffect } from "react";

// Syled Components
import * as S from "./styles";

// Components
import { Header } from "../../components/Header";
import { Content } from "../../components/Content";

// Helpers
import Head from "../../components/helpers/Head";

// Animations CSS
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <S.Content>

      <Head
        title="Home"
        description="Olá me chamo Renan Nascimento, sou estudante de programação, em busca de uma oportunidade. Este site foi feito para apresentar algumas habilidades que eu possuo em tecnologias Front-End!"
      />

      {/*Components da página*/}
      <Header />
      <Content />

      {/*Componente Footer*/}
    </S.Content>
  );
};
export default Home;
