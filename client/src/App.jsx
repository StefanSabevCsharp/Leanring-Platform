import { Route, Routes } from "react-router-dom"
import About from "./components/about/About"
import AboutInstructor from "./components/aboutInstructor/AboutInstructor"
import Banner from "./components/banner/Banner"
import Brand from "./components/brand/Brand"
import Courses from "./components/courses/Courses"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import News from "./components/news/News"
import Popular from "./components/popular/Popular"
import RegistrationSection from "./components/registrationSection/RegistrationSection"
import ThemeController from "./components/themeController/ThemeController"
import Login from "./components/auth/login/Login"
import CoursesPage from "./components/courses/coursesPage/CoursesPage"
import { useContext } from "react"
import AuthContext from "./context/authContext"
import Dashboard from "./components/dashboard/Dashboard"
import ProtectedRoute from "./components/guards/protectedRoute/ProtectedRoute"
import LoggedInUserGuard from "./components/guards/loggedInUserGuard/LoggedInUserGuard"
import Logout from "./components/auth/logout/Logout"
import { ThemeProvider } from "./context/themeContext"
import CreateCourse from "./components/createCourse/CreateCourse"
import BecomeInstructor from "./components/becomeInstructor/BecomeInstructor"
import CourseDetails from "./components/courses/courseDetails/CourseDetails"
import { DataProvider } from "./context/dataContext"
import InstructorDetails from "./components/instuctorDetails/InstructorDetails"
import NotFound from "./components/notFound/NotFound"
import Contact from "./components/contact/Contact"
import AboutPage from "./components/about/aboutPage/AboutPage"


function App() {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (

    <>
      <DataProvider>
        <ThemeProvider>
          <ThemeController />
          <Header />
          <main className="bg-transparent">
            <Routes>
              <Route path="/" element={
                <>
                  <Banner />
                  <Brand />
                  <About />
                  <Popular />
                  <Courses />
{/* 
                  <AboutInstructor /> */}
                  <News />
                </>} />
              <Route path="/login" element={
                <LoggedInUserGuard>
                  <Login />
                </LoggedInUserGuard>
              } />
              <Route path="/logout" element={
                <ProtectedRoute>
                  <Logout />
                </ProtectedRoute>
              } />
              <Route path="/create-course" element={

                <CreateCourse />

              } />
              <Route path="/become-instructor" element={

                <BecomeInstructor />

              } />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/dashboard/*" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/courses/:_Id" element={<CourseDetails />} />
              <Route path="/users/:_Id" element={<InstructorDetails />} />
              <Route path="/courses/edit/:_Id" element={<CreateCourse />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/404" element={<NotFound/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </ThemeProvider>
      </DataProvider>
    </>

  )
}

export default App
