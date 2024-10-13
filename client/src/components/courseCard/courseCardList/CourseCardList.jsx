import { Link } from "react-router-dom";
import upperCase from "../../../utils/upperCase";
import { calculateStarsToShow } from "../../../utils/calculateStarsToShow";
import WishlistButton from "../../dashboard/student/wishlist/wishlistButton/WishlistButton";

export default function CourseCardList({ courseInfo }) {

    const stars = calculateStarsToShow(courseInfo);

    return (
        <div className="w-full group grid-item rounded">
            <div className="tab-content-wrapper" data-aos="fade-up">
                <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                    {/* card image */}
                    <div className="relative overflow-hidden w-full md:w-35%">
                        <Link to={`/courses/${courseInfo._id}`} className="w-full overflow-hidden">
                            <img
                                src="assets/images/grid/grid_1.png"
                                alt=""
                                className="w-full transition-all duration-300 group-hover:scale-110 block"
                            />
                        </Link>
                        <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                            <div>
                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold capitalize">
                                    {courseInfo.category}
                                </p>
                            </div>
                            {<WishlistButton courseId={courseInfo._id} />}
                        </div>
                    </div>
                    {/* card content */}
                    <div className="w-full md:w-65%">
                        <div className="pl-0 md:pl-5 lg:pl-30px 2xl:pl-90px">
                            <div className="grid grid-cols-2 mb-15px">

                                <div className="flex items-center">
                                    <div>
                                        <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                    </div>
                                    <div>
                                        <span className="text-sm text-black dark:text-blackColor-dark">
                                            Begins: {courseInfo.startDate}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Link
                                to={`/courses/${courseInfo._id}`}
                                className="text-xl 2xl:text-size-34 leading-25px md:leading-30px 3xl:leading-37px font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                            >
                                {courseInfo.courseTitle}
                            </Link>
                            {/* price */}
                            <div className="text-lg font-semibold text-black-brerry-light font-inter mb-5">
                                ${courseInfo.discountedPrice}.00
                                <del className="text-sm text-lightGrey4 font-semibold">
                                    / ${courseInfo.freeRegularPrice}.00
                                </del>

                            </div>
                            {/* bottom */}
                            <div className="flex flex-wrap justify-between sm:flex-nowrap items-center gap-y-2 pt-15px border-t border-borderColor">
                                {/* author and rating*/}
                                <div className="flex items-center flex-wrap">
                                    <div>
                                        <Link
                                            to={`/users/${courseInfo.instructor._id}`}
                                            className="text-sm font-medium font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                        >
                                            <img
                                                className="w-[30px] h-[30px] rounded-full mr-15px"
                                                src="assets/images/grid/grid_small_1.jpg"
                                                alt=""
                                            />
                                            <span className="flex">{upperCase(courseInfo.creator)}</span>
                                        </Link>
                                    </div>
                                    <div className="text-start md:text-end ml-35px">
                                        {stars === 0 ? (
                                            [...Array(5)].map((_, index) => (
                                                <i key={index} className="icofont-star text-size-15 text-yellow" />
                                            ))
                                        ) : (
                                            [...Array(stars)].map((_, index) => (
                                                <i key={index} className="icofont-star text-size-15 text-yellow" />
                                            ))
                                        )}
                                        <span className="text-xs text-lightGrey6">
                                            ({courseInfo.reviews.length})
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <Link
                                        className="text-sm lg:text-base text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                        to={`/courses/${courseInfo._id}`}
                                    >
                                        Know Details <i className="icofont-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}