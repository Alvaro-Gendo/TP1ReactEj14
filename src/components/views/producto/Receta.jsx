import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Receta = () => {
  return (
    <Col sm={12} md={4} lg={4} className="my-1">
      <Card>
        <Card.Img src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="img-fluid imgSize" />
        <Card.Body>
          <Card.Title>Nombre</Card.Title>
          <Card.Text>
            Ingredientes:2 naranjas, 2 tazas de harina leudante (o harina común
            + 2 cditas. de polvo para hornear),1 taza de azúcar,3 huevos,1 taza
            de aceite neutro
          </Card.Text>
          <Link className="btn btn-success" to="/detalle">Ver más</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Receta;