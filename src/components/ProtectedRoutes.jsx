import React, { use } from "react"; //react import
import { useSelector } from "react-redux";//hook using in 
import { Navigate } from "react-router-dom"; //hook


function ProtectedRoutes ({ children }) { //children-parameter
    const user = useSelector(loggedUser => loggedUser.user);
    return user ? children : <Navigate to = "/login" />

}
export default ProtectedRoutes