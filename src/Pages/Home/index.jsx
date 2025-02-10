import { useEffect } from "react";

// Components

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
    <>
      {/*Component Navbar ou Header*/}
      <main>
        <Head
          title="Home"
          description="Olá me chamo Renan Nascimento, sou estudante de programação, em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
        />
        {/*Components da página*/}
        <p>Teste</p>
      </main>
      {/*Componente Footer*/}
    </>
  );
};
export default Home;
