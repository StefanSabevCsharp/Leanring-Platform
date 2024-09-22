import { useState } from "react";
import CoursesBanner from "./coursesBanner/coursesBanner";

export default function CoursesPage() {
    const [isActive, setIsActive] = useState(false);
    //todo: pochnah da pravq active i ne activ na butona
    return (
        <>
            {/* banner section */}
            <CoursesBanner />
            {/* courses section */}
            <div>
                <div className="container tab py-10 md:py-50px lg:py-60px 2xl:py-100px">
                    {/* courses header */}
                    <div
                        className="courses-header flex justify-between items-center flex-wrap px-13px py-10px border border-borderColor dark:border-borderColor-dark mb-30px gap-y-5"
                        data-aos="fade-up"
                    >
                        <div>
                            <p className="text-blackColor dark:text-blackColor-dark">
                                Showing 1–12 of 54 Results
                            </p>
                        </div>
                        <div className="flex items-center">
                            <div className="tab-links transition-all duraton-300 text-contentColor dark:text-contentColor-dark flex gap-11px">
                                <button onClick={() => setIsActive(true)} className={isActive ? "inline-block hover:text-primaryColor active" : "inline-block hover:text-primaryColor"}>
                                    <i className="icofont-layout" />
                                </button>
                                <button onClick={() => setIsActive(false)} className={!isActive ? "inline-block hover:text-primaryColor active" : "inline-block hover:text-primaryColor"}>
                                    <i className="icofont-listine-dots" />
                                </button>
                            </div>
                            <div className="pl-50px sm:pl-20 pr-10px">
                                <select className="text-blackColor bg-whiteColor py-3px pr-2 pl-3 rounded-md outline-none border-4 border-transparent focus:border-blue-light box-border">
                                    <option value="Short by New">Short by New</option>
                                    <option value="Short by New">Short by New</option>
                                    <option value="One">One</option>
                                    <option value="Tow">Tow</option>
                                    <option value="Three">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* courses */}
                    <div className="tab-contents">
                        {/* grid ordered cards */}
                        {isActive && (<div className="transition-all duration-300">
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-30px">
                                {/* card 1 */}
                                <div className="group">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
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
                                                                23 Lesson
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                1 hr 30 min
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="course-details.html"
                                                    className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                >
                                                    Foundation course to under stand about softwere
                                                </a>
                                                {/* price */}
                                                <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                                    $32.00
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
                                                                src="assets/images/grid/grid_small_1.jpg"
                                                                alt=""
                                                            />
                                                            <span className="flex">Micle john</span>
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
                                            <div className="relative mb-4 overflow-hidden">
                                                <a href="course.html" className="w-full">
                                                    <img
                                                        src="assets/images/grid/grid_2.png"
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
                                                    href="course.html"
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
                                                                src="assets/images/grid/grid_small_2.jpg"
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
                                {/* card 3 */}
                                <div className="group">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4 overflow-hidden">
                                                <a href="course.html" className="w-full">
                                                    <img
                                                        src="assets/images/grid/grid_3.png"
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
                                                    href="course.html"
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
                                                                src="assets/images/grid/grid_small_3.jpg"
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
                                            <div className="relative mb-4 overflow-hidden">
                                                <a href="course.html" className="w-full">
                                                    <img
                                                        src="assets/images/grid/grid_4.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-greencolor2 rounded font-semibold">
                                                            Ui &amp; UX Design
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
                                                    href="course.html"
                                                    className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                >
                                                    Design course to under stand about solution
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
                                                                src="assets/images/grid/grid_small_4.jpg"
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
                                {/* card 5 */}
                                <div className="group">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4 overflow-hidden">
                                                <a href="course.html" className="w-full">
                                                    <img
                                                        src="assets/images/grid/grid_5.png"
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
                                                    href="course.html"
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
                                                                src="assets/images/grid/grid_small_1.jpg"
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
                                {/* card 6 */}
                                <div className="group">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4 overflow-hidden">
                                                <a href="course.html" className="w-full">
                                                    <img
                                                        src="assets/images/grid/grid_6.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-yellow rounded font-semibold">
                                                            Big Data
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
                                                                30 Lesson
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
                                                    href="course.html"
                                                    className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                >
                                                    Big data to under stand about solution pacage
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
                                                                src="assets/images/grid/grid_small_1.jpg"
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
                                {/* card 7 */}
                                <div className="group">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
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
                                                                23 Lesson
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div>
                                                            <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                        </div>
                                                        <div>
                                                            <span className="text-sm text-black dark:text-blackColor-dark">
                                                                1 hr 30 min
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a
                                                    href="course-details.html"
                                                    className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                >
                                                    Foundation course to under stand about softwere
                                                </a>
                                                {/* price */}
                                                <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
                                                    $32.00
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
                                                                src="assets/images/grid/grid_small_1.jpg"
                                                                alt=""
                                                            />
                                                            <span className="flex">Micle john</span>
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
                                {/* card 8 */}
                                <div className="group">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4 overflow-hidden">
                                                <a href="course.html" className="w-full">
                                                    <img
                                                        src="assets/images/grid/grid_2.png"
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
                                                    href="course.html"
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
                                                                src="assets/images/grid/grid_small_2.jpg"
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
                                {/* card 9 */}
                                <div className="group">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                            {/* card image */}
                                            <div className="relative mb-4 overflow-hidden">
                                                <a href="course.html" className="w-full">
                                                    <img
                                                        src="assets/images/grid/grid_3.png"
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
                                                    href="course.html"
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
                                                                src="assets/images/grid/grid_small_3.jpg"
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
                            </div>
                        </div>
                        )}

                        {/* list ordered cards */}

                        {!isActive && (<div className="transition-all duration-300">
                            <div className="flex flex-col gap-30px">
                                {/* card 1 */}
                                <div className="w-full group grid-item rounded">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
                                        <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                                            {/* card image */}
                                            <div className="relative overflow-hidden w-full md:w-35%">
                                                <a href="course.html" className="w-full overflow-hidden">
                                                    <img
                                                        src="assets/images/grid/grid_1.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110 block"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor rounded font-semibold capitalize">
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
                                            <div className="w-full md:w-65%">
                                                <div className="pl-0 md:pl-5 lg:pl-30px 2xl:pl-90px">
                                                    <div className="grid grid-cols-2 mb-15px">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-black dark:text-blackColor-dark">
                                                                    23 Lesson
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-black dark:text-blackColor-dark">
                                                                    1 hr 30 min
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="course-details.html"
                                                        className="text-xl 2xl:text-size-34 leading-25px md:leading-30px 3xl:leading-37px font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                    >
                                                        Become a product Manager learn the skills &amp; job.
                                                    </a>
                                                    {/* price */}
                                                    <div className="text-lg font-semibold text-black-brerry-light font-inter mb-5">
                                                        $32.00
                                                        <del className="text-sm text-lightGrey4 font-semibold">
                                                            / $67.00
                                                        </del>
                                                        <span className="ml-6 text-base font-semibold text-greencolor2">
                                                            Free.
                                                        </span>
                                                    </div>
                                                    {/* bottom */}
                                                    <div className="flex flex-wrap justify-between sm:flex-nowrap items-center gap-y-2 pt-15px border-t border-borderColor">
                                                        {/* author and rating*/}
                                                        <div className="flex items-center flex-wrap">
                                                            <div>
                                                                <a
                                                                    href="instructor-details.html"
                                                                    className="text-sm font-medium font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                                >
                                                                    <img
                                                                        className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                        src="assets/images/grid/grid_small_1.jpg"
                                                                        alt=""
                                                                    />
                                                                    <span className="flex">Micle john</span>
                                                                </a>
                                                            </div>
                                                            <div className="text-start md:text-end ml-35px">
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <span className="text-xs text-lightGrey6">
                                                                    (44)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a
                                                                className="text-sm lg:text-base text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                                href="course-details.html"
                                                            >
                                                                Know Details <i className="icofont-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 2 */}
                                <div className="w-full group grid-item rounded">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
                                        <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                                            {/* card image */}
                                            <div className="relative overflow-hidden w-full md:w-35%">
                                                <a href="course.html" className="w-full overflow-hidden">
                                                    <img
                                                        src="assets/images/grid/grid_3.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110 block"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold capitalize">
                                                            gridDevelopment
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
                                            <div className="w-full md:w-65%">
                                                <div className="pl-0 md:pl-5 lg:pl-30px 2xl:pl-90px">
                                                    <div className="grid grid-cols-2 mb-15px">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-black dark:text-blackColor-dark">
                                                                    23 Lesson
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-black dark:text-blackColor-dark">
                                                                    1 hr 30 min
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="course-details.html"
                                                        className="text-xl 2xl:text-size-34 leading-25px md:leading-30px 3xl:leading-37px font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                    >
                                                        Strategy law and with for organization Foundation
                                                    </a>
                                                    {/* price */}
                                                    <div className="text-lg font-semibold text-black-brerry-light font-inter mb-5">
                                                        $32.00
                                                        <del className="text-sm text-lightGrey4 font-semibold">
                                                            / $67.00
                                                        </del>
                                                        <span className="ml-6 text-base font-semibold text-greencolor2">
                                                            Free.
                                                        </span>
                                                    </div>
                                                    {/* bottom */}
                                                    <div className="flex flex-wrap justify-between sm:flex-nowrap items-center gap-y-2 pt-15px border-t border-borderColor">
                                                        {/* author and rating*/}
                                                        <div className="flex items-center flex-wrap">
                                                            <div>
                                                                <a
                                                                    href="instructor-details.html"
                                                                    className="text-sm font-medium font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                                >
                                                                    <img
                                                                        className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                        src="assets/images/grid/grid_small_1.jpg"
                                                                        alt=""
                                                                    />
                                                                    <span className="flex">Micle john</span>
                                                                </a>
                                                            </div>
                                                            <div className="text-start md:text-end ml-35px">
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <span className="text-xs text-lightGrey6">
                                                                    (44)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a
                                                                className="text-sm lg:text-base text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                                href="course-details.html"
                                                            >
                                                                Know Details <i className="icofont-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 3 */}
                                <div className="w-full group grid-item rounded">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
                                        <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                                            {/* card image */}
                                            <div className="relative overflow-hidden w-full md:w-35%">
                                                <a href="course.html" className="w-full overflow-hidden">
                                                    <img
                                                        src="assets/images/grid/grid_2.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110 block"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold capitalize">
                                                            gridMechanical
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
                                            <div className="w-full md:w-65%">
                                                <div className="pl-0 md:pl-5 lg:pl-30px 2xl:pl-90px">
                                                    <div className="grid grid-cols-2 mb-15px">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-black dark:text-blackColor-dark">
                                                                    23 Lesson
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-black dark:text-blackColor-dark">
                                                                    1 hr 30 min
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="course-details.html"
                                                        className="text-xl 2xl:text-size-34 leading-25px md:leading-30px 3xl:leading-37px font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                    >
                                                        Foundation course to under stand about softwere
                                                    </a>
                                                    {/* price */}
                                                    <div className="text-lg font-semibold text-black-brerry-light font-inter mb-5">
                                                        $32.00
                                                        <del className="text-sm text-lightGrey4 font-semibold">
                                                            / $67.00
                                                        </del>
                                                        <span className="ml-6 text-base font-semibold text-greencolor2">
                                                            Free.
                                                        </span>
                                                    </div>
                                                    {/* bottom */}
                                                    <div className="flex flex-wrap justify-between sm:flex-nowrap items-center gap-y-2 pt-15px border-t border-borderColor">
                                                        {/* author and rating*/}
                                                        <div className="flex items-center flex-wrap">
                                                            <div>
                                                                <a
                                                                    href="instructor-details.html"
                                                                    className="text-sm font-medium font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                                >
                                                                    <img
                                                                        className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                        src="assets/images/grid/grid_small_1.jpg"
                                                                        alt=""
                                                                    />
                                                                    <span className="flex">Micle john</span>
                                                                </a>
                                                            </div>
                                                            <div className="text-start md:text-end ml-35px">
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <span className="text-xs text-lightGrey6">
                                                                    (44)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a
                                                                className="text-sm lg:text-base text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                                href="course-details.html"
                                                            >
                                                                Know Details <i className="icofont-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 4 */}
                                <div className="w-full group grid-item rounded">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
                                        <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                                            {/* card image */}
                                            <div className="relative overflow-hidden w-full md:w-35%">
                                                <a href="course.html" className="w-full overflow-hidden">
                                                    <img
                                                        src="assets/images/grid/grid_4.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110 block"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-greencolor2 rounded font-semibold capitalize">
                                                            Ui &amp; UX Design
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
                                            <div className="w-full md:w-65%">
                                                <div className="pl-0 md:pl-5 lg:pl-30px 2xl:pl-90px">
                                                    <div className="grid grid-cols-2 mb-15px">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-black dark:text-blackColor-dark">
                                                                    23 Lesson
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-black dark:text-blackColor-dark">
                                                                    1 hr 30 min
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="course-details.html"
                                                        className="text-xl 2xl:text-size-34 leading-25px md:leading-30px 3xl:leading-37px font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                    >
                                                        The business Intelligence analyst with Course &amp; 2024
                                                    </a>
                                                    {/* price */}
                                                    <div className="text-lg font-semibold text-black-brerry-light font-inter mb-5">
                                                        $32.00
                                                        <del className="text-sm text-lightGrey4 font-semibold">
                                                            / $67.00
                                                        </del>
                                                        <span className="ml-6 text-base font-semibold text-greencolor2">
                                                            Free.
                                                        </span>
                                                    </div>
                                                    {/* bottom */}
                                                    <div className="flex flex-wrap justify-between sm:flex-nowrap items-center gap-y-2 pt-15px border-t border-borderColor">
                                                        {/* author and rating*/}
                                                        <div className="flex items-center flex-wrap">
                                                            <div>
                                                                <a
                                                                    href="instructor-details.html"
                                                                    className="text-sm font-medium font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                                >
                                                                    <img
                                                                        className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                        src="assets/images/grid/grid_small_1.jpg"
                                                                        alt=""
                                                                    />
                                                                    <span className="flex">Micle john</span>
                                                                </a>
                                                            </div>
                                                            <div className="text-start md:text-end ml-35px">
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <span className="text-xs text-lightGrey6">
                                                                    (44)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a
                                                                className="text-sm lg:text-base text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                                href="course-details.html"
                                                            >
                                                                Know Details <i className="icofont-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card 5 */}
                                <div className="w-full group grid-item rounded">
                                    <div className="tab-content-wrapper" data-aos="fade-up">
                                        <div className="p-15px lg:pr-30px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark flex flex-wrap md:flex-nowrap rounded">
                                            {/* card image */}
                                            <div className="relative overflow-hidden w-full md:w-35%">
                                                <a href="course.html" className="w-full overflow-hidden">
                                                    <img
                                                        src="assets/images/grid/grid_5.png"
                                                        alt=""
                                                        className="w-full transition-all duration-300 group-hover:scale-110 block"
                                                    />
                                                </a>
                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                    <div>
                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold capitalize">
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
                                            <div className="w-full md:w-65%">
                                                <div className="pl-0 md:pl-5 lg:pl-30px 2xl:pl-90px">
                                                    <div className="grid grid-cols-2 mb-15px">
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="icofont-book-alt pr-5px text-primaryColor text-lg" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-black dark:text-blackColor-dark">
                                                                    23 Lesson
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div>
                                                                <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                                                            </div>
                                                            <div>
                                                                <span className="text-sm text-black dark:text-blackColor-dark">
                                                                    1 hr 30 min
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="course-details.html"
                                                        className="text-xl 2xl:text-size-34 leading-25px md:leading-30px 3xl:leading-37px font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                    >
                                                        Become a product Manager learn the skills &amp; job.
                                                    </a>
                                                    {/* price */}
                                                    <div className="text-lg font-semibold text-black-brerry-light font-inter mb-5">
                                                        $32.00
                                                        <del className="text-sm text-lightGrey4 font-semibold">
                                                            / $67.00
                                                        </del>
                                                        <span className="ml-6 text-base font-semibold text-greencolor2">
                                                            Free.
                                                        </span>
                                                    </div>
                                                    {/* bottom */}
                                                    <div className="flex flex-wrap justify-between sm:flex-nowrap items-center gap-y-2 pt-15px border-t border-borderColor">
                                                        {/* author and rating*/}
                                                        <div className="flex items-center flex-wrap">
                                                            <div>
                                                                <a
                                                                    href="instructor-details.html"
                                                                    className="text-sm font-medium font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                                >
                                                                    <img
                                                                        className="w-[30px] h-[30px] rounded-full mr-15px"
                                                                        src="assets/images/grid/grid_small_1.jpg"
                                                                        alt=""
                                                                    />
                                                                    <span className="flex">Micle john</span>
                                                                </a>
                                                            </div>
                                                            <div className="text-start md:text-end ml-35px">
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <i className="icofont-star text-size-15 text-yellow" />
                                                                <span className="text-xs text-lightGrey6">
                                                                    (44)
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a
                                                                className="text-sm lg:text-base text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                                                                href="course-details.html"
                                                            >
                                                                Know Details <i className="icofont-arrow-right" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}

                    </div>
                    {/* pagination */}
                    <div>
                        <ul className="flex items-center justify-center gap-15px mt-60px mb-30px">
                            <li>
                                <a
                                    href="#"
                                    className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor cursor-not-allowed"
                                >
                                    <i className="icofont-double-left" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-whiteColor hover:text-whiteColor bg-primaryColor hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-primaryColor dark:hover:bg-primaryColor"
                                >
                                    1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor"
                                >
                                    2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor"
                                >
                                    3
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-blackColor2 hover:text-whiteColor bg-whitegrey1 hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor"
                                >
                                    <i className="icofont-double-right" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
}