import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../componentes/Message";
import Loader from "../componentes/Loader";
import { useGetOrderDetailsQuery } from "../slices/ordersApiSlice";

const Order = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger" />
  ) : (
    <>
      <h1>Ordem de envio: {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup>
            <ListGroup.Item>
              <h2>Informações</h2>
              <p>
                <strong>Nome:</strong> {order.user.name}
              </p>
              <p></p>
              <strong>Email:</strong> {order.user.email}
              <p></p>
              <p>
                <strong>Endereço: </strong> {order.shippingAddress.address},{" "}
                {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                , {order.shippingAddress.country}
              </p>
              <p></p>
              {order.isDelivered ? (
                <Message variant="sucess">
                  Entregue em {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Nao entregue</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Metodo de pagamento</h2>
              <p>
                <strong>Metodo:</strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="sucess">
                  Pagamento processado{order.paidAt}
                </Message>
              ) : (
                <Message variant="danger">Pagamento nao processado</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Itens</h2>
              {order.orderItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col md={1}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={4}>
                      {item.qty} x ${item.price} = ${item.qty * item.price}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Nota</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Itens</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Pedido</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Taxa</Col>
                  <Col>${order.taxPice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {/* COISAS A FAZER DA AREA DE ADMIN */}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Order;
