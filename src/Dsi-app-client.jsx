import { useState } from "react"
import Navbar from './Components/Navbar'
import { useAuth0 } from "@auth0/auth0-react"
import Login from './Components/Login'


function App() {
  const {user,isAuthenticated} = useAuth0();
  console.log(window.location.origin)
  return(
    <div>
      {
        isAuthenticated ?(
         
          <Navbar name={user.name} />
         
        ) :(
          <div className="text-center">
            <Login/>
            </div>
          
        )
      }
     
    </div>
  )
     
    
};

export default App