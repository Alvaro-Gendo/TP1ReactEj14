import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemReceta from "./producto/ItemReceta";

const Admin = () => {
  return (
    <Container className="my-5">
      <div>
        <h1>Lista de recetas</h1>
        <Link className="btn btn-outline-success" to="/administrador/crear">
          Agregar
        </Link>
        <hr />
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Pasos</th>
            <th>Ingredientes</th>
            <th>Imagen</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
            <ItemReceta></ItemReceta>
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
