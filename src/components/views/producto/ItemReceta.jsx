import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProducto = () => {
  return (
    <tr>
      <td>Codigo</td>
      <td>Nombre</td>
      <td>Pasos</td>
      <td>Ingredientes</td>
      <td>Imagen</td>
      <td>Categoria</td>
      <td>
        <Link className="btn btn-warning m-1" to="/administrador/editar">
          Editar
        </Link>
        <Button variant="danger" className="m-1 text-black">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
