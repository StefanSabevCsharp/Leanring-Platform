import { Link } from "react-router-dom";
import useGetCourse from "../../../../hooks/useGetCourse";
import Spinner from "../../../spinner/Spinner";

export default function AuthorMoreCourses({ courseId }) {
   
    const [course, loading] = useGetCourse(courseId);
    if (loading) {
        return <Spinner />;
    }
    if (!loading && course) {
        return (
            <div className="swiper-slide">
                <div className="w-full group grid-item filter1 filter3">
                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                            {/* card image */}
                            <div className="relative mb-4 overflow-hidden">
                                <a href="course.html" className="w-full">
                                    <img
                                        src="assets/images/grid/grid_1.png"
                                        alt=""
                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                    />
                                </a>
                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                    <div>
                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold">
                                            {course.category}
                                        </p>
                                    </div>
                                    <a
                                        className="text-white bg-black bg-opacity-15 rounded hover:bg-primaryColor"
                                        href="#"
                                    >
                                        <i className="icofont-heart-alt text-base py-1 px-2" />
                                    </a>
                                </div>
                            </div>
                            {/* card content */}
                            <div>
                                <div className="grid grid-cols-2 mb-15px">
                                  
                                    <div className="flex items-center">
                                        <div>
                                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                        </div>
                                        <div>
                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                {course.startDate}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to={`/courses/${course._id}`}
                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                >
                                    {course.aboutCourse}
                                </Link>
                                {/* price */}
                                <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                    ${course.discountedPrice}
                                    <del className="text-sm text-lightGrey4 font-semibold">
                                        / ${course.freeRegularPrice}
                                    </del>
                                    
                                </div>
                                {/* author and rating*/}
                                <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
                                    <div>
                                        <a
                                            href="instructor-details.html"
                                            className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                        >
                                            <img
                                                className="w-[30px] h-[30px] rounded-full mr-15px"
                                                src="assets/images/grid/grid_small_1.jpg"
                                                alt=""
                                            />
                                            <span className="flex">{course.creator}</span>
                                        </a>
                                    </div>
                                    <div className="text-start md:text-end">
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <span className="text-xs text-lightGrey6">
                                            (44)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    

}