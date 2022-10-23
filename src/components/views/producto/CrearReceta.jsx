import { Container, Form } from "react-bootstrap";

const CrearProducto = () => {
  return (
    <Container className="mt-4">
      <h2>Agregar Receta</h2>
      <hr />
        <Form>
            <Form.Group>
                <Form.Label>Nombre de la receta</Form.Label>
                <Form.Control type="text" placeholder="Ej:Budin"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Pasos a seguir</Form.Label>
                <Form.Control as="textarea" placeholder="Ingresar los pasos de la receta"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Ingredientes</Form.Label>
                <Form.Control type="text" placeholder="Ej:Harina, huevos, etc..."></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" placeholder="Ingrese una url"></Form.Control>
            </Form.Group>
        </Form>
    </Container>
  );
};

export default CrearProducto;
