import { Link } from "react-router-dom";
import Courses from "../../courses/Courses";

export default function AboutPage() {
    return (
        <>
            <section>
                <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
                        {/* about left */}
                        <div data-aos="fade-up">
                            <div className="tilt relative overflow-hidden z-0">
                                <img
                                    className="absolute left-0 top-0 lg:top-4 right-0 mx-auto -z-1"
                                    src="assets/images/about/about_8.png"
                                    alt=""
                                />
                                <img
                                    className="w-full"
                                    src="assets/images/about/about_14.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        {/* about right */}
                        <div data-aos="fade-up" className="2xl:ml-65px">
                            <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                                About Me
                            </span>
                            <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                                Empowering Learning and Development Through Design
                            </h3>
                            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-25px">
                                With a strong background in front-end development and a passion for creating dynamic, user-centered designs, I’ve dedicated myself to crafting seamless digital experiences. I believe in transforming ideas into functional, visually engaging applications that serve users effectively.
                            </p>
                            <p className="flex items-center gap-x-4 text-lg text-blackColor dark:text-blackColor-dark mb-25px">
                                <img
                                    loading="lazy"
                                    src="assets/images/about/about_15.png"
                                    alt="about"
                                />
                                <span>
                                    <b>10+ Projects Developed</b> covering various domains from e-commerce to learning platforms.
                                </span>
                            </p>
                            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                                My journey includes building projects using the latest web technologies like React, Vite, and the MERN stack. I focus on ensuring each application is scalable, visually appealing, and user-friendly. From concept to code, I’m here to bring unique ideas to life, constantly learning, and growing with every project.
                            </p>
                            <div className="mt-30px">
                                <Link
                                    to="/contact"
                                    className="text-sm md:text-size-15 text-whiteColor bg-primaryColor border border-primaryColor px-25px py-15px hover:text-primaryColor hover:bg-whiteColor rounded inline-block mr-6px md:mr-30px dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                                >
                                    Contact Me <i className="icofont-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
