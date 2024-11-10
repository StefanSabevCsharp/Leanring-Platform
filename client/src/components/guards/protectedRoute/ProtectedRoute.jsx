import { Children, useContext } from "react";
import AuthContext from "../../../context/authContext";
import { Navigate } from "react-router-dom";



const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    if(!user && !loading){
        return <Navigate to="/login" />
    }
    return children;
}

export default ProtectedRoute;