
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import imagen from './img/logo.jpg'


export default function Login(){
    const {loginWithRedirect} = useAuth0();

    return (
        <div>
           <header className='portada-init'> 
           <div className="position-absolute top-0 start-0">
           <img className='img-logo' src={imagen} ></img>
           </div>
           <h1>Sistema Gestor De Proyectos</h1>
          </header>

            <button className = "btn btn-primary" onClick={() => loginWithRedirect()}>Iniciar Sesion</button>
        </div>
       
    )
      

}