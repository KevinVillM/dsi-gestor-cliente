import React from "react"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Bienvenida from './Bienvenida'
import TableroT from './TableroT'
import Logout from "./Logout";
export default function Navbar(props){
    
    return(
        <BrowserRouter>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                        <a className="navbar-brand" href="#">Bienvenid@, {props.name}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <ul className='navbar-nav'> 
                            <li className='nav-item'>
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/TableroT" className='nav-link'>Tablero de Tareas</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/#" className='nav-link'>Tablero2</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="#" className='nav-link'>Tablero3</Link>
                            </li>
                            <li className='nav-item'>
                             <Logout></Logout>   
                            </li>
                        </ul>
                          
                        </div>
                    </div>
                </div>
        </nav>
      <Routes>
       <Route path='/' element={<Bienvenida/>}/>
       <Route path='/TableroT' element={<TableroT/>}/>
      </Routes>
      </BrowserRouter>
    )
}