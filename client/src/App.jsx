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
import Blog from "./components/blog/Blog"
import CreateBlog from "./components/blog/createBlog/CreateBlog"
import BlogDetails from "./components/blog/blogDetails/BlogDetails"
import ScrollUpButton from "./components/scrollUpButton/ScrollUpButton"
import ScrollToTop from "./components/scrollToTop/ScrollToTop"
import AuthorGuard from "./components/guards/authorGuard/AuthorGuard"
import DeleteCourse from "./components/courses/courseDetails/deleteCourse/DeleteCourse"
import InstructorGuard from "./components/guards/instructorGuard/InstructorGuard"


function App() {
  const { user } = useContext(AuthContext)
  return (

    <>
      <DataProvider>
        <ThemeProvider>
          <ThemeController />
          <Header />
          <main className="bg-transparent">
            <ScrollToTop />
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
                <ProtectedRoute>
                  <CreateCourse />
                </ProtectedRoute>
              } />
              <Route path="/become-instructor" element={
                <InstructorGuard>
                  <BecomeInstructor />
                </InstructorGuard>
              } />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/dashboard/*" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/blog" element={<Blog />} />
              <Route path="/create-blog" element={
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>}
              />
              <Route path="/blog/:_Id" element={<BlogDetails />} />
              <Route path="/courses/:_Id" element={<CourseDetails />} />
              <Route path="/users/:_Id" element={<InstructorDetails />} />
              <Route path="/courses/edit/:_Id" element={
                <AuthorGuard>
                  <CreateCourse />
                </AuthorGuard>} />
              <Route path="/courses/delete/:_Id" element={
                <AuthorGuard>
                  <DeleteCourse />
                </AuthorGuard>
              } />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <ScrollUpButton />
          <Footer />
        </ThemeProvider>
      </DataProvider>
    </>

  )
}

export default App
