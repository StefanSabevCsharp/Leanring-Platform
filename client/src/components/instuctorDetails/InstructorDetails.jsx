import AbstractBanner from "../abstractBanner/AbstractBanner";

export default function InstructorDetails() {
    return (
        <>
        <AbstractBanner name="Instructor Details" path="Home" page="Instructor Details" />
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
                                <img src="assets/images/team/team__4.png" alt="" className="w-full" />
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
                                        Hiliary Ouse
                                    </h3>
                                    <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark">
                                        Teches Interior marketer
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
                                <div>
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
                                </div>
                            </div>
                            <div className="pt-7 mt-30px border-t border-borderColor dark:border-borderColor-dark">
                                <h4 className="text-xl text-blackColor dark:text-blackColor-dark font-semibold mb-1">
                                    Short Bio
                                </h4>
                                <p className="leading-7 text-contentColor dark:text-contentColor-dark">
                                    Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor
                                    blimey guvnor in my flat, up the duff Eaton car boot up the kyver
                                    pardon you A bit of how's your father David skive off sloshed, don't
                                    get shirty with me chip shop vagabond crikey bugger Queen's English
                                    chap. Matie boy nancy boy bite your arm off up the kyver old no
                                    biggie fantastic boot, David have it show off show off pick your
                                    nose and blow off lost the plot porkies bits and bobs only a quid
                                    bugger all mate, absolutely bladdered bamboozled it's your round
                                    don't get shirty with me down the pub well.
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
                                            <div className="swiper-slide">
                                                <div className="w-full group grid-item filter1 filter3">
                                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                                            {/* card image */}
                                                            <div className="relative mb-4">
                                                                <a
                                                                    href="course.html"
                                                                    className="w-full overflow-hidden rounded"
                                                                >
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
                                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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
                                            {/* card 2 */}
                                            <div className="swiper-slide">
                                                <div className="w-full group grid-item filter1 filter3">
                                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                                            {/* card image */}
                                                            <div className="relative mb-4">
                                                                <a
                                                                    href="course.html"
                                                                    className="w-full overflow-hidden rounded"
                                                                >
                                                                    <img
                                                                        src="assets/images/grid/grid_2.png"
                                                                        alt=""
                                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                                    />
                                                                </a>
                                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                                    <div>
                                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-yellow rounded font-semibold">
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
                                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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
                                            {/* card 3 */}
                                            <div className="swiper-slide">
                                                <div className="w-full group grid-item filter1 filter3">
                                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                                            {/* card image */}
                                                            <div className="relative mb-4">
                                                                <a
                                                                    href="course.html"
                                                                    className="w-full overflow-hidden rounded"
                                                                >
                                                                    <img
                                                                        src="assets/images/grid/grid_3.png"
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
                                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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
                                            {/* card 4 */}
                                            <div className="swiper-slide">
                                                <div className="w-full group grid-item filter1 filter3">
                                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                                            {/* card image */}
                                                            <div className="relative mb-4">
                                                                <a
                                                                    href="course.html"
                                                                    className="w-full overflow-hidden rounded"
                                                                >
                                                                    <img
                                                                        src="assets/images/grid/grid_4.png"
                                                                        alt=""
                                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                                    />
                                                                </a>
                                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                                    <div>
                                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-greencolor2 rounded font-semibold">
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
                                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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
                                            {/* card 5 */}
                                            <div className="swiper-slide">
                                                <div className="w-full group grid-item filter1 filter3">
                                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                                            {/* card image */}
                                                            <div className="relative mb-4">
                                                                <a
                                                                    href="course.html"
                                                                    className="w-full overflow-hidden rounded"
                                                                >
                                                                    <img
                                                                        src="assets/images/grid/kid_5.jpg"
                                                                        alt=""
                                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                                    />
                                                                </a>
                                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                                    <div>
                                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-secondaryColor2 rounded font-semibold">
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
                                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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
                                            {/* card 6 */}
                                            <div className="swiper-slide">
                                                <div className="w-full group grid-item filter1 filter3">
                                                    <div className="tab-content-wrapper sm:px-15px mb-30px">
                                                        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
                                                            {/* card image */}
                                                            <div className="relative mb-4">
                                                                <a
                                                                    href="course.html"
                                                                    className="w-full overflow-hidden rounded"
                                                                >
                                                                    <img
                                                                        src="assets/images/grid/kid_6.jpg"
                                                                        alt=""
                                                                        className="w-full transition-all duration-300 group-hover:scale-110"
                                                                    />
                                                                </a>
                                                                <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
                                                                    <div>
                                                                        <p className="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold">
                                                                            Mnided
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
                                                                    className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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