import StudentDashboard from "./student/dashboard/Dashboard";
import MyCourses from "./student/myCourses/MyCourses";
import Profile from "./student/profile/Profile";
import Reviews from "./student/reviews/Reviews";
import Settings from "./student/settings/Settings";
import Wishlist from "./student/wishlist/Wishlist";

const roleRoutesConfig = {
    student: [
      {path:"/" , element: <StudentDashboard />},
      {path:"/profile" , element: <Profile />},
      {path:"/my-courses" , element: <MyCourses />},
      {path:"/wishlist" , element: <Wishlist />},
      {path:"/reviews" , element: <Reviews />},
      {path:"/settings" , element: <Settings />}
    ],
    instructor: [

    ],
}

export default roleRoutesConfig;