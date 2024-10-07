import { useContext, useState } from "react";
import StudentDashboard from "./student/dashboard/Dashboard";
import StudentNavigation from "./student/navigation/StudentNavigation";
import TopElement from "./topElement/TopElement";
import AuthContext from "../../context/authContext";
import { Route, Routes } from "react-router-dom";
import MyCourses from "./student/myCourses/MyCourses";
import Profile from "./student/profile/Profile";
import Wishlist from "./student/wishlist/Wishlist";
import Reviews from "./student/reviews/Reviews";
import Settings from "./student/settings/Settings";
import roleRoutesConfig from "./roleRoutesConfig";
import InstructorNavigation from "./instructor/navigation/InstructorNavigation";
import { getFullUserData } from "../../dataService/authService";


export default function Dashboard() {
    const { user, setUser } = useContext(AuthContext);
    const currentRole = user?.role || "student";
    const routes = roleRoutesConfig[currentRole];
    const [fullUserData, setFullUserData] = useState(null);

    const userId = user._id;
    try{
       const getUserData = async () => {
        const response = await getFullUserData(userId);
        console.log(response);
        // setFullUserData(response);
        // setUser(response);
       }
       getUserData();

    }catch(err){
        console.log(err);
    }

    return (
        <>
            <TopElement />
            <section>
                <div className="container-fluid-2">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px pt-30px pb-100px">
                        <div className="lg:col-start-1 lg:col-span-3">
                            {currentRole === "student" && <StudentNavigation user={user} />}
                            {currentRole === "instructor" && <InstructorNavigation  user={user}/>}
                        </div>
                        {/* dashboard content */}
                        <Routes>
                            {routes.map((route, index) => (
                                <Route key={index} path={route.path} element={route.element(user)} />
                            ))}
                        </Routes>
                    </div>
                </div>
            </section>

        </>

    );
}