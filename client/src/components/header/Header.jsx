import { useContext, useState } from "react";
import { useTheme } from "../../context/themeContext";
import Navbar from "./navbar/Navbar";
import AuthContext from "../../context/authContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const { theme } = useTheme();
  return (
    <header>
      {/* header top start */}
      <div className={`bg-blackColor2 ${theme === 'dark' ? 'dark:bg-lightGrey10-dark text-whiteColor' : 'bg-white text-blackColor'} hidden lg:block`}>
        <div className="container 3xl:container2-lg 4xl:container mx-auto text-size-12 xl:text-sm py-5px xl:py-9px">
          <div className="flex justify-between items-center">
            <div>
              <p>Call Us: ......... - Mail Us: ........</p>
            </div>
            <div className="flex gap-37px items-center">
              <div>
                <p>
                  <i className="icofont-location-pin text-primaryColor text-size-15 mr-5px" />
                  <span>684 West College St. Sun City, USA</span>
                </p>
              </div>
              <div>
                {/* header social list */}
                <ul className="flex gap-13px text-size-15">
                  <li>
                    <a className="hover:text-primaryColor" href="#">
                      <i className="icofont-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primaryColor" href="#">
                      <i className="icofont-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primaryColor" href="#">
                      <i className="icofont-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-primaryColor" href="#">
                      <i className="icofont-youtube-play" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar setShowMobileMenu={setShowMobileMenu} />
      <div
        className={`mobile-menu w-mobile-menu-sm md:w-mobile-menu-lg fixed top-0 ${showMobileMenu ? "right-0" : "-right-[280px] md:-right-[330px]"
          } transition-all duration-500 h-full shadow-dropdown-secodary bg-whiteColor dark:bg-whiteColor-dark z-high block lg:hidden`}
      >
        {showMobileMenu && (
          <button
            className="close-mobile-menu text-lg bg-darkdeep1 hover:bg-secondaryColor text-white px-[11px] py-[6px] absolute top-0 right-full"
            onClick={() => setShowMobileMenu(false)}
          >
            <i className="icofont icofont-close-line" />
          </button>
        )}
        <div className="px-5 md:px-30px pt-5 md:pt-10 pb-50px h-full overflow-y-auto">
          <div className="pt-8 pb-6 border-b border-borderColor dark:border-borderColor-dark">

            <ul className="accordion-container">

              <li className="accordion" onClick={() => setShowMobileMenu((prev) => !prev)}>
                <div className="flex items-center justify-between">
                  <Link
                    className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                    to="/"
                  >
                    Home
                  </Link>
                </div>
              </li>

              <li className="accordion" onClick={() => setShowMobileMenu((prev) => !prev)}>
                <div className="flex items-center justify-between">
                  <Link
                    className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </div>

              </li>

              <li className="accordion" onClick={() => setShowMobileMenu((prev) => !prev)}>
                <div className="flex items-center justify-between">
                  <Link
                    className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                    to="/courses"
                  >
                    Courses
                  </Link>
                </div>
              </li>
              {user &&
                (
                  <li className="accordion" onClick={() => setShowMobileMenu((prev) => !prev)}>
                    <div className="flex items-center justify-between">
                      <Link
                        className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                    </div>
                  </li>
                )}

              <li className="accordion" onClick={() => setShowMobileMenu((prev) => !prev)}>
                <div className="flex items-center justify-between">
                  <Link
                    className="leading-1 py-11px text-darkdeep1 font-medium hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            {user ? (
              <button
                className="w-full bg-primaryColor text-white py-2 px-4 rounded hover:bg-secondaryColor"
                onClick={() => {
                  logout();
                  setShowMobileMenu((prev) => !prev);
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="w-full bg-primaryColor text-white py-2 px-4 rounded hover:bg-secondaryColor"
                onClick={() => {
                  navigate("/login")
                  setShowMobileMenu((prev) => !prev);
                }
                }
              >
                Sign In
              </button>
            )}
          </div>

        </div>
      </div>
    </header>

  );
}