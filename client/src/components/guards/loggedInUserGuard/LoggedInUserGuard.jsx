import { Children, useContext } from "react";
import AuthContext from "../../../context/authContext";
import { Navigate } from "react-router-dom";



const LoggedInUserGuard = ({children}) => {
    const {user} = useContext(AuthContext);

    if(!user){
        return children
    }
    return <Navigate to="/" />
}

export default LoggedInUserGuard;