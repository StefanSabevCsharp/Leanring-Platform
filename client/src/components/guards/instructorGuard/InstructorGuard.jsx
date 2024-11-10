import { useContext, useEffect } from "react";
import { DataContext } from "../../../context/dataContext";
import { useNavigate } from "react-router-dom";

export default function InstructorGuard({ children }) {
    const { userData, loading } = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!userData) {
            navigate("/login");
        } else if (userData.role === "instructor") {
            navigate("/404");
        }
    }, [userData, loading, navigate]);

    return children;
}
