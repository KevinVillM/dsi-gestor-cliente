import {Navigate, Outlet, } from "react-router";

function RequireAuth({isLogged,children,redirectTo='/login'}){
    if(!isLogged){
        return <Navigate to={redirectTo}/>;
    }
    return children ? children : <Outlet/>
}

export default RequireAuth;
