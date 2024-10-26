import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/authContext";



export default function Navbar({setShowMobileMenu}) {

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
                  src="/assets/images/logo/logo_1.png"
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
                {user && (
                  <li className="nav-item group relative">
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
                    <button
                      className="open-mobile-menu text-3xl text-darkdeep1 hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                      onClick={() => setShowMobileMenu((prev) => !prev)}
                      // Step 3: Add onClick handler
                    >
                      <i className="icofont-navigation-menu" />
                    </button>
                    </li>
                  </ul>
                </div>
              )
              :
              (
                <>

                  <div className="lg:col-start-10 lg:col-span-3">
                    <ul className="relative nav-list flex justify-end items-center">
                      {/* <li className="px-5 lg:px-10px 2xl:px-5 lg:py-4 2xl:py-26px 3xl:py-9 group">
                        <a href="../ecommerce/cart.html" className="relative block">
                          <i className="icofont-cart-alt text-2xl text-blackColor group-hover:text-secondaryColor transition-all duration-300 dark:text-blackColor-dark" />
                          <span className="absolute -top-1 2xl:-top-[5px] -right-[10px] lg:right-3/4 2xl:-right-[10px] text-[10px] font-medium text-white dark:text-whiteColor-dark bg-secondaryColor px-1 py-[2px] leading-1 rounded-full z-50 block">
                            3
                          </span>
                        </a>
                        <div
                          className="dropdown absolute top-full right-0 lg:right-8 z-medium hidden opacity-0"
                          style={{ transition: "0.3s" }}
                        >
                          <div className="shadow-dropdown-secodary max-w-dropdown3 w-2000 rounded-standard p-5 bg-white dark:bg-whiteColor-dark">
                            <ul className="flex flex-col gap-y-5 pb-5 mb-30px border-b border-borderColor dark:border-borderColor-dark">
                              <li className="relative flex gap-x-15px items-center">
                                <a href="../../course-details.html">
                                  <img
                                    src="../../assets/images/grid/cart1.jpg"
                                    alt="photo"
                                    className="w-card-img py-[3px]"
                                  />
                                </a>
                                <div>
                                  <a
                                    href="../../course-details.html"
                                    className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                                  >
                                    web dictionary
                                  </a>
                                  <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                    1 x<span className="text-secondaryColor">$ 80.00</span>
                                  </p>
                                </div>
                                <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                                  <i className="icofont-close-line" />
                                </button>
                              </li>
                              <li className="relative flex gap-x-15px items-center">
                                <a href="../../course-details.html">
                                  <img
                                    src="../../assets/images/grid/cart2.jpg"
                                    alt="photo"
                                    className="w-card-img py-[3px]"
                                  />
                                </a>
                                <div>
                                  <a
                                    href="../../course-details.html"
                                    className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                                  >
                                    Design Minois
                                  </a>
                                  <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                    1 x<span className="text-secondaryColor">$ 60.00</span>
                                  </p>
                                </div>
                                <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                                  <i className="icofont-close-line" />
                                </button>
                              </li>
                              <li className="relative flex gap-x-15px items-center">
                                <a href="../../course-details.html">
                                  <img
                                    src="../../assets/images/grid/cart3.jpg"
                                    alt="photo"
                                    className="w-card-img py-[3px]"
                                  />
                                </a>
                                <div>
                                  <a
                                    href="../../course-details.html"
                                    className="text-sm text-darkblack hover:text-secondaryColor leading-5 block pb-2 capitalize dark:text-darkblack-dark dark:hover:text-secondaryColor"
                                  >
                                    Crash Course
                                  </a>
                                  <p className="text-sm text-darkblack leading-5 block pb-5px dark:text-darkblack-dark">
                                    1 x<span className="text-secondaryColor">$ 70.00</span>
                                  </p>
                                </div>
                                <button className="absolute block top-0 right-0 text-base text-contentColor leading-1 hover:text-secondaryColor dark:text-contentColor-dark dark:hover:text-secondaryColor">
                                  <i className="icofont-close-line" />
                                </button>
                              </li>
                            </ul>
                            <div>
                              <p className="text-size-17 text-contentColor dark:text-contentColor-dark pb-5 flex justify-between">
                                Total Price:
                                <span className="font-bold text-secondaryColor">$ 210.00</span>
                              </p>
                            </div>
                            <div className="flex flex-col gap-y-5">
                              <a
                                href="../ecommerce/cart.html"
                                className="text-sm font-bold text-contentColor dark:text-contentColor-dark hover:text-whiteColor hover:bg-secondaryColor text-center py-10px border border-secondaryColor"
                              >
                                View Cart
                              </a>
                              <a
                                href="../ecommerce/checkout.html"
                                className="text-sm font-bold bg-darkblack dark:bg-darkblack-dark text-whiteColor dark:text-whiteColor-dark hover:bg-secondaryColor dark:hover:bg-secondaryColor text-center py-10px"
                              >
                                Checkout
                              </a>
                            </div>
                          </div>
                        </div>
                      </li> */}


                      <li className="hidden lg:block">
                        <Link
                          to="/logout"
                          className="text-size-12 2xl:text-size-15 text-whiteColor bg-primaryColor block border-primaryColor border hover:text-primaryColor hover:bg-white px-15px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
                        >
                          Logout
                        </Link>
                      </li>

                      <li className="block lg:hidden">
                      <button
                      className="open-mobile-menu text-3xl text-darkdeep1 hover:text-secondaryColor dark:text-whiteColor dark:hover:text-secondaryColor"
                      onClick={() => setShowMobileMenu((prev) => !prev)}
                     
                    >
                      <i className="icofont-navigation-menu" />
                    </button>
                      </li>
                    </ul>
                  </div>
                </>
              )}

          </div>
        </div>
      </nav>
    </div>
  );
}