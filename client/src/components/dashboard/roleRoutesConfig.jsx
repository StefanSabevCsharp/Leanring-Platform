import CreatedCourses from "./instructor/createdCourses/CreatedCourses";
import InstructorDashboard from "./instructor/dashboard/InstructorDashboard";
import StudentDashboard from "./student/dashboard/Dashboard";
import MyCourses from "./student/myCourses/MyCourses";
import Profile from "./student/profile/Profile";
import Reviews from "./student/reviews/Reviews";
import Settings from "./student/settings/Settings";
import Wishlist from "./student/wishlist/Wishlist";

const roleRoutesConfig = {
    student: [
      {path:"/" , element: (user) => <StudentDashboard user={user}/>},
      {path:"/profile" , element: (user) => <Profile user={user} />},
      {path:"/my-courses" , element: (user) => <MyCourses user={user} />},
      {path:"/wishlist" , element:  (user) =><Wishlist user={user}/>},
      {path:"/reviews" , element: (user) => <Reviews user={user}/>},
      {path:"/settings" , element: (user) => <Settings user={user}/>}
    ],
    instructor: [
      {path:"/" , element: (user) => <InstructorDashboard user={user}/>},
      {path:"/profile" , element: (user) => <Profile user={user} />},
      {path:"/wishlist" , element:  (user) => <Wishlist user={user}/>},
      {path:"/reviews" , element: (user) => <Reviews user={user}/>},
      {path:"/settings" , element: (user) => <Settings user={user}/>},
      {path:"/instructor-course" , element: (user) => <CreatedCourses user={user}/>},

    ],
}

export default roleRoutesConfig;