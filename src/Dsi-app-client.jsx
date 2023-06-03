import react from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Autenticación/Login.jsx";
import Inicio from "./pages/Inicio.jsx";
import Proyectos from "./pages/Proyectos/Proyectos.jsx";
import GestionTareas from "./pages/Tareas/GestionTareas.jsx";
import RequireAuth from "./pages/Autenticación/RequireAuth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Autenticación/Register.jsx";
export const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path ={"/login"} element={<Login/>}></Route>
            <Route path={"/registro"} element={<Register/>}/>
            <Route element={<RequireAuth isLogged={localStorage.getItem("isLogged") === "true"}/> } >
                <Route path={"/dashboard"} element={<Dashboard><Inicio/></Dashboard>}></Route>
                <Route path = {"/proyectos"} element={<Dashboard><Proyectos/></Dashboard>}></Route>
                <Route path={"/tareas"} element={<Dashboard><GestionTareas/></Dashboard>}></Route>
            </Route>

        </Routes>
      </BrowserRouter>
    );
};

