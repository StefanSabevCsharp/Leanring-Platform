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
import Pricing from "./components/pricing/Pricing"
import RegistrationSection from "./components/registrationSection/RegistrationSection"
import ThemeController from "./components/themeController/ThemeController"
import Login from "./components/auth/login/Login"
import CoursesPage from "./components/courses/coursesPage/CoursesPage"
import { useContext } from "react"
import AuthContext from "./context/authContext"
import Dashboard from "./components/dashboard/DashBoard"


function App() {
  const {user} = useContext(AuthContext)
  console.log(user)
  
  return (
   
      <>
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
                {!user && <RegistrationSection />}
                
                <Pricing />
                <AboutInstructor />
                <News />
              </>} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </main>
        <Footer />
      </>
      
  )
}

export default App
