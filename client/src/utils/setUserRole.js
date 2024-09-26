import { useContext } from "react"
import AuthContext from "../context/authContext"


export default function SetUserRole(){
    const { user, role, setRole } = useContext(AuthContext);
    if (!user) {
        return null;
    }
    if (role === "student") {
        setRole("student");
    } else if (role === "instructor") {
        setRole("instructor");
    } else if (role === "admin") {
        setRole("admin");
    }
    return null;
}