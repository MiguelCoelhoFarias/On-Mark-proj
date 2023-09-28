import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../componentes/Product";
import axios from "axios";

// criando tela de home com funcoes do produto:
// tambem passo descricoes da construcao dessa home usando o bootstrap

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);
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
