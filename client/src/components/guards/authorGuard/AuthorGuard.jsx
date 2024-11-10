import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { DataContext } from "../../../context/dataContext";

const AuthorGuard = ({ children }) => {
    const { userData, loading } = useContext(DataContext);
    const { _Id } = useParams();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <Navigate to="/login" />;
    }

    if (!userData.createdCourses.includes(_Id)) {
        return <Navigate to="/404" />;
    }

    return children;
};

export default AuthorGuard;
