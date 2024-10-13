import { useParams } from "react-router-dom";
import AbstractBanner from "../abstractBanner/AbstractBanner";
import useGetUserData from "../../hooks/useGetUserData";
import Spinner from "../spinner/Spinner";
import AuthorMoreCourses from "../courses/courseDetails/authorMoreCourses/AuthorMoreCourses";

export default function InstructorDetails() {
    const { _Id } = useParams();
    console.log(_Id);
    const [userData, loading] = useGetUserData(_Id);
    if (loading) {
        return <Spinner />
    }
    if (!loading && userData) {
        //TODO : ADD photo of the instructor
        console.log(userData);
        return (
            <>
                <AbstractBanner name="User Details" path="Home" page="User Details" />
                <section className="py-100px">
                    <div className="container">
                        {/* about section  */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 pt-30px gap-x-30px">
                            {/* about left */}
                            <div
                                className="lg:col-start-1 lg:col-span-4 relative z-0 mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 overflow-visible"
                                data-aos="fade-up"
                            >
                                <div className="tilt">
                                    <img src="/assets/images/team/team__4.png" alt="" className="w-full" />
                                    <img
                                        className="absolute top-0 left-[-30px] animate-move-hor z-[-1]"
                                        src="assets/images/about/about_4.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            {/* about right */}
                            <div data-aos="fade-up" className="lg:col-start-5 lg:col-span-8">
                                <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
                                    <div>
                                        <h3 className="text-size-25 md:text-size-40 lg:text-3xl 2xl:text-size-40 leading-34px md:leading-13.5 lg:leading-11 2xl:leading-13.5 font-bold text-blackColor dark:text-blackColor-dark">
                                            {userData.firstName} {userData.lastName}
                                        </h3>
                                        <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                                            {userData.role.charAt(0).toUpperCase() + userData.role.slice(1)}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-blackColor dark:text-blackColor-dark">Review:</p>
                                        <div>
                                            <i className="icofont-star text-size-15 text-yellow" />
                                            <i className="icofont-star text-size-15 text-yellow" />
                                            <i className="icofont-star text-size-15 text-yellow" />
                                            <i className="icofont-star text-size-15 text-yellow" />
                                            <i className="icofont-star text-size-15 text-yellow" />
                                            <span className="text-xs text-lightGrey6">(44)</span>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <p className="text-blackColor dark:text-blackColor-dark">
                                            Follow Us:
                                        </p>
                                        <ul className="flex gap-13px text-base text-contentColor dark:text-contentColor-dark">
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
                                    <div>
                                        <a
                                            href="#"
                                            className="text-sm md:text-size-15 text-whiteColor bg-primaryColor border border-primaryColor px-10 py-10px hover:text-primaryColor hover:bg-whiteColor rounded inline-block dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                                        >
                                            Follow
                                        </a>
                                    </div> */}
                                </div>
                                <div className="pt-7 mt-30px border-t border-borderColor dark:border-borderColor-dark">
                                    <h4 className="text-xl text-blackColor dark:text-blackColor-dark font-semibold mb-1">
                                        Short Bio
                                    </h4>
                                    <p className="leading-7 text-contentColor dark:text-contentColor-dark">
                                        {userData.bio}
                                    </p>
                                </div>
                                {/* other courses */}
                                <div className="mt-10" data-aos="fade-up">
                                    {/* other courses heading */}
                                    <div className="mb-10px">
                                        <h4 className="text-3xl font-bold text-blackColor dark:text-blackColor-dark leading-1.2">
                                            Online Course
                                        </h4>
                                    </div>
                                    <div data-aos="fade-up" className="sm:-mx-15px">
                                        {/* Swiper */}
                                        <div className="swiper other-courses">
                                            <div className="swiper-wrapper">
                                                {/* card 1 */}
                                                {userData.createdCourses.map((courseId) => (<AuthorMoreCourses courseId={courseId} key={courseId} />))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>


        );
    }

}