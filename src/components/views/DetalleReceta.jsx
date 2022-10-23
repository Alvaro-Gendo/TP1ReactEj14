import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetalleProducto = () => {
    return (
        <Container className="mt-3">
            <Card>
                <Card.Body>
                    <Row>
                        <Col sm={12} md={6} lg={5}>
                            <Card.Img src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                        </Col>
                        <Col sm={12} md={6} lg={7}>
                            <Card.Title>Nombre</Card.Title>
                            <Card.Text>Pasos a seguir</Card.Text>
                            <Card.Text>Ingredientes</Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <div className="d-flex justify-content-end">
            <Link className="btn btn-success mt-3" to="/">Vovler</Link>
            </div>
        </Container>
    );
};

export default DetalleProducto;