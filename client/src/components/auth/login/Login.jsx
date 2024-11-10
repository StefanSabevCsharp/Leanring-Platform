import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { toast, Toaster } from "react-hot-toast";

import RegisterForm from "./registerForm/RegisterForm";
import LoginForm from "./loginForm/loginForm";


export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    return (

        <>
            {/* <Toaster /> */}
            <section>
                {/* banner section */}
                <div className="bg-lightGrey10 dark:bg-lightGrey10-dark relative z-0 overflow-y-visible py-50px md:py-20 lg:py-100px 2xl:pb-150px 2xl:pt-40.5">
                    {/* animated icons */}
                    <div>
                        <img
                            className="absolute left-0 bottom-0 md:left-[14px] lg:left-[50px] lg:bottom-[21px] 2xl:left-[165px] 2xl:bottom-[60px] animate-move-var z-10"
                            src="assets/images/herobanner/herobanner__1.png"
                            alt=""
                        />
                        <img
                            className="absolute left-0 top-0 lg:left-[50px] lg:top-[100px] animate-spin-slow"
                            src="assets/images/herobanner/herobanner__2.png"
                            alt=""
                        />
                        <img
                            className="absolute right-[30px] top-0 md:right-10 lg:right-[575px] 2xl:top-20 animate-move-var2 opacity-50 hidden md:block"
                            src="assets/images/herobanner/herobanner__3.png"
                            alt=""
                        />
                        <img
                            className="absolute right-[30px] top-[212px] md:right-10 md:top-[157px] lg:right-[45px] lg:top-[100px] animate-move-hor"
                            src="assets/images/herobanner/herobanner__5.png"
                            alt=""
                        />
                    </div>
                    <div className="container">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-size-40 2xl:text-size-55 font-bold text-blackColor dark:text-blackColor-dark mb-7 md:mb-6 pt-3">
                                {isLogin ? 'Log In' : 'Register'}
                            </h1>
                            <ul className="flex gap-1 justify-center">
                                <li>
                                    <a
                                        href="index.html"
                                        className="text-lg text-blackColor2 dark:text-blackColor2-dark"
                                    >
                                        Home <i className="icofont-simple-right" />
                                    </a>
                                </li>
                                <li>
                                    <span className="text-lg text-blackColor2 dark:text-blackColor2-dark">
                                        {isLogin ? 'Log In' : 'Register'}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/*form section */}
            <section className="relative">
                <div className="container py-100px">
                    <div className="tab md:w-2/3 mx-auto">
                        {/* tab controller */}
                        <div className="tab-links grid grid-cols-2 gap-11px text-blackColor text-lg lg:text-size-22 font-semibold font-hind mb-43px mt-30px md:mt-0">
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`relative py-9px lg:py-6 hover:text-primaryColor dark:text-whiteColor dark:hover:text-primaryColor bg-white dark:bg-whiteColor-dark dark:hover:bg-whiteColor-dark hover:bg-white rounded-standard`}
                            >
                                <span className={`absolute h-1 bg-primaryColor top-0 left-0 transition-all duration-300 ${isLogin ? 'w-full' : 'w-0'}`} />
                                Login
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`relative py-9px lg:py-6 hover:text-primaryColor dark:text-whiteColor dark:hover:text-primaryColor bg-lightGrey7 dark:bg-lightGrey7-dark hover:bg-white dark:hover:bg-whiteColor-dark rounded-standard`}
                            >
                                <span className={`absolute h-1 bg-primaryColor top-0 left-0 transition-all duration-300 ${!isLogin ? 'w-full' : 'w-0'}`} />
                                Register
                            </button>
                        </div>
                        {/*  tab contents */}
                        <div className="shadow-container bg-whiteColor dark:bg-whiteColor-dark pt-10px px-5 pb-10 md:p-50px md:pt-30px rounded-5px">
                            <div className="tab-contents">
                                {/* login form*/}
                                {isLogin ? (
                                    <LoginForm setIsLogin={setIsLogin} />) : (
                                    <RegisterForm setIsLogin={setIsLogin} />)}

                                {/* sign up form*/}

                            </div>
                        </div>
                    </div>
                </div>
                {/* animated icons */}
                <div>
                    <img
                        loading="lazy"
                        className="absolute right-[14%] top-[30%] animate-move-var"
                        src="assets/images/education/hero_shape2.png"
                        alt="Shape"
                    />
                    <img
                        loading="lazy"
                        className="absolute left-[5%] top-1/2 animate-move-hor"
                        src="assets/images/education/hero_shape3.png"
                        alt="Shape"
                    />
                    <img
                        loading="lazy"
                        className="absolute left-1/2 bottom-[60px] animate-spin-slow"
                        src="assets/images/education/hero_shape4.png"
                        alt="Shape"
                    />
                    <img
                        loading="lazy"
                        className="absolute left-1/2 top-10 animate-spin-slow"
                        src="assets/images/education/hero_shape5.png"
                        alt="Shape"
                    />
                </div>
            </section>
        </>

    );
}