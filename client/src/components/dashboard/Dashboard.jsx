import { useContext, useEffect, useState } from "react";
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
import { DataContext } from "../../context/dataContext";


export default function Dashboard() {
    const { user, setUser } = useContext(AuthContext);
    const { userData, loading} = useContext(DataContext);
    const currentRole = user?.role || "student";
    const routes = roleRoutesConfig[currentRole];
    console.log(userData);

    if(loading) {
        //TODO: Add a loading spinner
        return (
            <div className="loading-container">
                <p>Loading your dashboard...</p>
            </div>
        );
    }
    

    return (
        <>
            <TopElement />
            <section>
                <div className="container-fluid-2">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px pt-30px pb-100px">
                        <div className="lg:col-start-1 lg:col-span-3">
                            {currentRole === "student" && <StudentNavigation user={userData} />}
                            {currentRole === "instructor" && <InstructorNavigation  user={userData}/>}
                        </div>
                        {/* dashboard content */}
                        <Routes>
                            {routes.map((route, index) => (
                                <Route key={index} path={route.path} element={route.element(userData)} />
                            ))}
                        </Routes>
                    </div>
                </div>
            </section>

        </>

    );
}