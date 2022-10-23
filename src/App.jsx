import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Admin from "./components/views/Admin";
import CrearReceta from "./components/views/producto/CrearReceta";
import EditarReceta from "./components/views/producto/EditarReceta";
import DetalleReceta from "./components/views/DetalleReceta";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "./app.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/administrador" element={<Admin></Admin>}></Route>
          <Route exact path="/administrador/crear" element={<CrearReceta></CrearReceta>}></Route>
          <Route exact path="/administrador/editar" element={<EditarReceta></EditarReceta>}></Route>
          <Route exact path="/detalle" element={<DetalleReceta></DetalleReceta>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
