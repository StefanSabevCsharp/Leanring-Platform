import CourseCard from "../../../courseCard/CourseCard";

export default function Wishlist() {
    return (
        <div className="lg:col-start-4 lg:col-span-9">
            {/* courses area */}
            <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
                {/* heading */}
                <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
                    <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                        Wishlist
                    </h2>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-30px">
                        {[1,2,3,4,5].map((number) => (
                            <div className="group">
                            <div className="tab-content-wrapper" data-aos="fade-up">
                                <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                    {/* card image */}
                                    <div className="relative mb-4">
                                        <a
                                            href="../../course-details.html"
                                            className="w-full overflow-hidden rounded"
                                        >
                                            <img
                                                src="../../assets/images/grid/grid_2.png"
                                                alt=""
                                                className="w-full transition-all duration-300 group-hover:scale-110"
                                            />
                                        </a>
                                        <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                            <div>
                                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold">
                                                    Mechanical
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
                                                    <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                </div>
                                                <div>
                                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                                        29 Lesson
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div>
                                                    <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                </div>
                                                <div>
                                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                                        2 hr 10 min
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href="../../course-details.html"
                                            className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                        >
                                            Nidnies course to under stand about softwere
                                        </a>
                                        {/* price */}
                                        <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                            $32.00
                                            <del className="text-sm text-lightGrey4 font-semibold">
                                                / $67.00
                                            </del>
                                            <span className="ml-6">
                                                <del className="text-base font-semibold text-greencolor">
                                                    Free
                                                </del>
                                            </span>
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
                                                        src="../../assets/images/grid/grid_small_2.jpg"
                                                        alt=""
                                                    />
                                                    Rinis Jhon
                                                </a>
                                            </div>
                                            <div className="text-start md:text-end">
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <span className="text-xs text-lightGrey6">(44)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        {/* card 1 */}
                        <div className="group">
                            <div className="tab-content-wrapper" data-aos="fade-up">
                                <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                    {/* card image */}
                                    <div className="relative mb-4">
                                        <a
                                            href="../../course-details.html"
                                            className="w-full overflow-hidden rounded"
                                        >
                                            <img
                                                src="../../assets/images/grid/grid_2.png"
                                                alt=""
                                                className="w-full transition-all duration-300 group-hover:scale-110"
                                            />
                                        </a>
                                        <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                            <div>
                                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold">
                                                    Mechanical
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
                                                    <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                </div>
                                                <div>
                                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                                        29 Lesson
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div>
                                                    <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                </div>
                                                <div>
                                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                                        2 hr 10 min
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href="../../course-details.html"
                                            className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                        >
                                            Nidnies course to under stand about softwere
                                        </a>
                                        {/* price */}
                                        <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                            $32.00
                                            <del className="text-sm text-lightGrey4 font-semibold">
                                                / $67.00
                                            </del>
                                            <span className="ml-6">
                                                <del className="text-base font-semibold text-greencolor">
                                                    Free
                                                </del>
                                            </span>
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
                                                        src="../../assets/images/grid/grid_small_2.jpg"
                                                        alt=""
                                                    />
                                                    Rinis Jhon
                                                </a>
                                            </div>
                                            <div className="text-start md:text-end">
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <span className="text-xs text-lightGrey6">(44)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="group">
                            <div className="tab-content-wrapper" data-aos="fade-up">
                                <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                    {/* card image */}
                                    <div className="relative mb-4">
                                        <a
                                            href="../../course-details.html"
                                            className="w-full overflow-hidden rounded"
                                        >
                                            <img
                                                src="../../assets/images/grid/grid_3.png"
                                                alt=""
                                                className="w-full transition-all duration-300 group-hover:scale-110"
                                            />
                                        </a>
                                        <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                            <div>
                                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold">
                                                    Development
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
                                                    <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                </div>
                                                <div>
                                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                                        25 Lesson
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div>
                                                    <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                </div>
                                                <div>
                                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                                        1 hr 40 min
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href="../../course-details.html"
                                            className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                        >
                                            Minws course to under stand about solution
                                        </a>
                                        {/* price */}
                                        <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                            $40.00
                                            <del className="text-sm text-lightGrey4 font-semibold">
                                                / $67.00
                                            </del>
                                            <span className="ml-6">
                                                <del className="text-base font-semibold text-secondaryColor3">
                                                    Free
                                                </del>
                                            </span>
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
                                                        src="../../assets/images/grid/grid_small_3.jpg"
                                                        alt=""
                                                    />
                                                    Micle John
                                                </a>
                                            </div>
                                            <div className="text-start md:text-end">
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <span className="text-xs text-lightGrey6">(44)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="group">
                            <div className="tab-content-wrapper" data-aos="fade-up">
                                <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                    {/* card image */}
                                    <div className="relative mb-4">
                                        <a
                                            href="../../course-details.html"
                                            className="w-full overflow-hidden rounded"
                                        >
                                            <img
                                                src="../../assets/images/grid/grid_5.png"
                                                alt=""
                                                className="w-full transition-all duration-300 group-hover:scale-110"
                                            />
                                        </a>
                                        <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                            <div>
                                                <p className="text-xs text-whiteColor px-4 py-[3px] bg-orange rounded font-semibold">
                                                    Data &amp; Tech
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
                                                    <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                </div>
                                                <div>
                                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                                        36 Lesson
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div>
                                                    <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                </div>
                                                <div>
                                                    <span className="text-sm text-black dark:text-blackColor-dark">
                                                        3 hr 40 min
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            href="../../course-details.html"
                                            className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                        >
                                            Data course to under stand about solution
                                        </a>
                                        {/* price */}
                                        <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                            $40.00
                                            <del className="text-sm text-lightGrey4 font-semibold">
                                                / $67.00
                                            </del>
                                            <span className="ml-6">
                                                <del className="text-base font-semibold text-secondaryColor3">
                                                    Free
                                                </del>
                                            </span>
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
                                                        src="../../assets/images/grid/grid_small_1.jpg"
                                                        alt=""
                                                    />
                                                    <span className="flex flex-shrink-0">Micle Robin</span>
                                                </a>
                                            </div>
                                            <div className="text-start md:text-end">
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <i className="icofont-star text-size-15 text-yellow" />
                                                <span className="text-xs text-lightGrey6">(44)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}