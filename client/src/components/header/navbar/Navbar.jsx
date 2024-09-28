import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/authContext";



export default function Navbar() {

  const { user } = useContext(AuthContext);


  return (
    <div className="transition-all duration-500 sticky-header z-medium dark:bg-whiteColor-dark">
      <nav>
        <div className="py-15px lg:py-0 px-15px lg:container 3xl:container2-lg 4xl:container mx-auto relative">
          <div className="grid grid-cols-2 lg:grid-cols-12 items-center gap-15px">
            {/* navbar left */}
            <div className="lg:col-start-1 lg:col-span-2">
              <Link to="/" className="block">
                <img
                  src="assets/images/logo/logo_1.png"
                  alt="Logo"
                  className="w-logo-sm lg:w-auto py-2"
                />
              </Link>
            </div>
            {/* Main menu */}
            <div className="hidden lg:block lg:col-start-3 lg:col-span-7">
              <ul className="nav-list flex justify-center">
                <li className="nav-item group">
                  <Link
                    to="/"
                    className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                  >
                    Home
                  </Link>

                </li>
                <li className="nav-item group">
                  <Link
                    to="/blog"
                    className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                  >
                    Blog

                  </Link>

                </li>
                <li className="nav-item group">
                  <Link
                    to="/courses"
                    className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                  >
                    Courses

                  </Link>

                </li>
                {user && (<li className="nav-item group relative">
                  <Link
                    to="/dashboard"
                    className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                  >
                    Dashboard

                  </Link>
                  {/* dropdown menu */}

                </li>)}

                <li className="nav-item group relative">
                  <Link
                    to="/shop"
                    className="px-5 lg:px-10px 2xl:px-15px 3xl:px-5 py-10 lg:py-5 2xl:py-30px 3xl:py-10 leading-sm 2xl:leading-lg text-base lg:text-sm 2xl:text-base font-semibold block group-hover:text-primaryColor dark:text-whiteColor"
                  >
                    Shop

                  </Link>

                </li>
              </ul>
            </div>
            {/* navbar right */}
            {!user ?
              (
                <div className="lg:col-start-10 lg:col-span-3">
                  <ul className="relative nav-list flex justify-end items-center">

                    <li className="hidden lg:block">
                      <Link
                        to="/login"
                        className="text-size-12 2xl:text-size-15 text-whiteColor bg-primaryColor block border-primaryColor border hover:text-primaryColor hover:bg-white px-15px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
                      >
                        Sign In
                      </Link>
                    </li>
                    <li className="block lg:hidden">
                      <button className="open-mobile-menu text-3xl text-darkdeep1 hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor">
                        <i className="icofont-navigation-menu" />
                      </button>
                    </li>
                  </ul>
                </div>
              )
              :
              (
                <div className="lg:col-start-10 lg:col-span-3">
                  <ul className="relative nav-list flex justify-end items-center">

                    <li className="hidden lg:block">
                      <Link
                        to="/logout"
                        className="text-size-12 2xl:text-size-15 text-whiteColor bg-primaryColor block border-primaryColor border hover:text-primaryColor hover:bg-white px-15px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
                      >
                        Logout
                      </Link>
                    </li>

                    <li className="block lg:hidden">
                      <button className="open-mobile-menu text-3xl text-darkdeep1 hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor">
                        <i className="icofont-navigation-menu" />
                      </button>
                    </li>
                  </ul>
                </div>
              )}

          </div>
        </div>
      </nav>
    </div>
  );
}