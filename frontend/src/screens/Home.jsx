import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../componentes/Product";

// criando tela de home com funcoes do produto:
// tambem passo descricoes da construcao dessa home usando o bootstrap

const Home = () => {
  return (
    <>
      <h1>Produtos disponiveis</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
