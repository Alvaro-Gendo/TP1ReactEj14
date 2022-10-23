import { Container, Row } from "react-bootstrap";
import Receta from "./producto/Receta";

const Inicio = () => {
    return (
        <Container>
            <section>
            <h1>Receta caseras</h1>
            <hr />
            </section>
            <Row>
                <Receta></Receta>
            </Row>
        </Container>
    );
};

export default Inicio;