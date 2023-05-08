import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Autenticación/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Proyectos from "./pages/Proyectos/Proyectos.jsx";
export const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path ={"/login"} element={<Login/>}/>
            <Route path={"/dashboard"} element={<Dashboard />}/>
            <Route path = { "/proyectos"} element={<Proyectos/>}/>
        </Routes>
      </BrowserRouter>
    );
};

