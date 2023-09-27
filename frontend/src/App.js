import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

// importando o bootstrap de icones no meu header

const App = () => {
  return (
    <>
      {/* criando um pai desnaturado para depois adicionar um conteiner */}
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
