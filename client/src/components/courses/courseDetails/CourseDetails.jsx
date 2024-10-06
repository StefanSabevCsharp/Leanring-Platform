export default function CourseDetails() {

    return (
        <section>
            <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
                    <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
                        {/* course 1 */}
                        <div data-aos="fade-up">
                            {/* course thumbnail */}
                            <div className="overflow-hidden relative mb-5">
                                <img
                                    src="/pictures/testcourse.jpg"
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                            {/* course content */}
                            <div>
                                <div
                                    className="flex items-center justify-between flex-wrap gap-6 mb-30px"
                                    data-aos="fade-up"
                                >
                                    <div className="flex items-center gap-6">
                                        <button className="text-sm text-whiteColor bg-primaryColor border border-primaryColor px-26px py-0.5 leading-23px font-semibold hover:text-primaryColor hover:bg-whiteColor rounded inline-block dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor">
                                            Featured
                                        </button>
                                        <button className="text-sm text-whiteColor bg-secondaryColor border border-secondaryColor px-22px py-0.5 leading-23px font-semibold hover:text-secondaryColor hover:bg-whiteColor rounded inline-block dark:hover:bg-whiteColor-dark dark:hover:text-secondaryColor">
                                            Ux Design
                                        </button>
                                    </div>
                                    <div>
                                        <p className="text-sm text-contentColor dark:text-contentColor-dark font-medium">
                                            Last Update:
                                            <span className="text-blackColor dark:text-blackColor-dark">
                                                Sep 29, 2024
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                {/* titile */}
                                <h4
                                    className="text-size-32 md:text-4xl font-bold text-blackColor dark:text-blackColor-dark mb-15px leading-43px md:leading-14.5"
                                    data-aos="fade-up"
                                >
                                    Making Music with Other People
                                </h4>
                                {/* price and rating */}
                                <div
                                    className="flex gap-5 flex-wrap items-center mb-30px"
                                    data-aos="fade-up"
                                >
                                    <div className="text-size-21 font-medium text-primaryColor font-inter leading-25px">
                                        $32.00
                                        <del className="text-sm text-lightGrey4 font-semibold">
                                            / $67.00
                                        </del>
                                    </div>
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
                                    <div className="text-start md:text-end">
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <span className="text-xs text-lightGrey6">(44)</span>
                                    </div>
                                </div>
                                <p
                                    className="text-sm md:text-lg text-contentColor dark:contentColor-dark mb-25px !leading-30px"
                                    data-aos="fade-up"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                    vulputate vestibulum rhoncus, dolor eget viverra pretium, dolor
                                    tellus aliquet nunc, vitae ultricies erat elit eu lacus.
                                    Vestibulum non justo consectetur, cursus ante, tincidunt sapien.
                                    Nulla quis diam sit amet turpis interd enim. Vivamus faucibus ex
                                    sed nibh egestas elementum. Mauris et bibendum dui. Aenean
                                    consequat pulvinar luctus. Suspendisse consectetur tristique
                                </p>
                                {/* details */}
                                <div>
                                    <h4
                                        className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px"
                                        data-aos="fade-up"
                                    >
                                        Course Details
                                    </h4>
                                    <div
                                        className="bg-darkdeep3 dark:bg-darkdeep3-dark mb-30px grid grid-cols-1 md:grid-cols-2"
                                        data-aos="fade-up"
                                    >
                                        <ul className="p-10px md:py-55px md:pl-50px md:pr-70px lg:py-35px lg:px-30px 2xl:py-55px 2xl:pl-50px 2xl:pr-70px border-r-2 border-borderColor dark:border-borderColor-dark space-y-[10px]">
                                            <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Instructor :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        Mirnsdo.H
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Lectures :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        120 sub
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Duration :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        20h 41m 32s
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Enrolled :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        2 students
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Total :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        222 students
                                                    </span>
                                                </p>
                                            </li>
                                        </ul>
                                        <ul className="p-10px md:py-55px md:pl-50px md:pr-70px lg:py-35px lg:px-30px 2xl:py-55px 2xl:pl-50px 2xl:pr-70px border-r-2 border-borderColor dark:border-borderColor-dark space-y-[10px]">
                                            <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Course level :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        Intermediate
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Language :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        English spanish
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Price Discount :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        -20%
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Regular Price :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        $228/Mo
                                                    </span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Course Status :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        Available
                                                    </span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* course tab */}
                                <div data-aos="fade-up" className="tab course-details-tab">
                                    <div className="tab-links flex flex-wrap md:flex-nowrap mb-30px rounded gap-0.5">
                                        <button className="is-checked relative p-10px md:px-25px md:py-15px lg:py-3 2xl:py-15px 2xl:px-45px text-blackColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor flex items-center">
                                            <i className="icofont-paper mr-2" /> Description
                                        </button>
                                        <button className="is-checked relative p-10px md:px-25px md:py-15px lg:py-3 2xl:py-15px 2xl:px-45px text-blackColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor flex items-center">
                                            <i className="icofont-star mr-2" /> Reviews
                                        </button>
                                        <button className="is-checked relative p-10px md:px-25px md:py-15px lg:py-3 2xl:py-15px 2xl:px-45px text-blackColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor flex items-center">
                                            <i className="icofont-teacher mr-2" /> Instructor
                                        </button>
                                    </div>
                                    <div className="tab-contents">
                                        {/* curriculum */}
                                       
                                        {/* description */}
                                        <div className="">
                                            <h4
                                                className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark mb-15px !leading-14"
                                                data-aos="fade-up"
                                            >
                                                Experience is over the world visit
                                            </h4>
                                            <p
                                                className="text-lg text-darkdeep4 mb-5 !leading-30px"
                                                data-aos="fade-up"
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                                                viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                                                erat elit eu lacus. Vestibulum non justo consectetur, cursus
                                                ante, tincidunt sapien. Nulla quis diam sit amet turpis
                                                interdum accumsan quis nec enim. Vivamus faucibus ex sed
                                                nibh egestas elementum. Mauris et bibendum dui. Aenean
                                                consequat pulvinar luctus
                                            </p>
                                            <p
                                                className="text-lg text-darkdeep4 mb-5 !leading-30px"
                                                data-aos="fade-up"
                                            >
                                                We have covered many special events such as fireworks,
                                                fairs, parades, races, walks, awards ceremonies, fashion
                                                shows, sporting events, and even a memorial service.
                                            </p>
                                            <p
                                                className="text-lg text-darkdeep4 mb-5 !leading-30px"
                                                data-aos="fade-up"
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                                                viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                                                erat elit eu lacus. Vestibulum non justo consectetur, cursus
                                                ante, tincidunt sapien. Nulla quis diam sit amet turpis
                                                interdum accumsan quis nec enim. Vivamus faucibus ex sed
                                                nibh egestas elementum. Mauris et bibendum dui. Aenean
                                                consequat pulvinar luctus.
                                            </p>
                                        </div>
                                        {/* reviews  */}
                                        <div className="hidden">
                                            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-x-30px gap-y-5">
                                                <div className="lg:col-start-1 lg:col-span-4 px-10px py-30px bg-whiteColor dark:bg-whiteColor-dark shadow-review text-center">
                                                    <p className="text-7xl font-extrabold text-blackColor dark:text-blackColor-dark leading-90px">
                                                        5.0
                                                    </p>
                                                    <div className="text-secondaryColor">
                                                        <i className="icofont-star" />
                                                        <i className="icofont-star" />
                                                        <i className="icofont-star" />
                                                        <i className="icofont-star" />
                                                        <i className="icofont-star" />
                                                    </div>
                                                    <p className="text-blackColor dark:text-blackColor-dark leading-26px font-medium">
                                                        (17 Reviews)
                                                    </p>
                                                </div>
                                                {/* progress bar */}
                                                <div className="lg:col-start-5 lg:col-span-8 px-15px">
                                                    <ul className="flex flex-col gap-y-3">
                                                        <li className="flex items-center text-blackColor dark:text-blackColor-dark">
                                                            <div>
                                                                <span>5</span>
                                                                <span>
                                                                    <i className="icofont-star text-secondaryColor" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow relative mx-10px md:mr-10 lg:mr-10px">
                                                                <span className="h-10px w-full bg-borderColor dark:bg-borderColor-dark rounded-full block" />
                                                                <span className="absolute left-0 top-0 h-10px w-full bg-secondaryColor rounded-full" />
                                                            </div>
                                                            <div>
                                                                <span>10</span>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-center text-blackColor dark:text-blackColor-dark">
                                                            <div>
                                                                <span>4</span>
                                                                <span>
                                                                    <i className="icofont-star text-secondaryColor" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow relative mx-10px md:mr-10 lg:mr-10px">
                                                                <span className="h-10px w-full bg-borderColor dark:bg-borderColor-dark rounded-full block" />
                                                                <span className="absolute left-0 top-0 h-10px w-4/5 bg-secondaryColor rounded-full" />
                                                            </div>
                                                            <div>
                                                                <span>5</span>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-center text-blackColor dark:text-blackColor-dark">
                                                            <div>
                                                                <span>3</span>
                                                                <span>
                                                                    <i className="icofont-star text-secondaryColor" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow relative mx-10px md:mr-10 lg:mr-10px">
                                                                <span className="h-10px w-full bg-borderColor dark:bg-borderColor-dark rounded-full block" />
                                                                <span className="absolute left-0 top-0 h-10px w-60% bg-secondaryColor rounded-full" />
                                                            </div>
                                                            <div>
                                                                <span>3</span>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-center text-blackColor dark:text-blackColor-dark">
                                                            <div>
                                                                <span>2</span>
                                                                <span>
                                                                    <i className="icofont-star text-secondaryColor" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow relative mx-10px md:mr-10 lg:mr-10px">
                                                                <span className="h-10px w-full bg-borderColor dark:bg-borderColor-dark rounded-full block" />
                                                                <span className="absolute left-0 top-0 h-10px w-30% bg-secondaryColor rounded-full" />
                                                            </div>
                                                            <div>
                                                                <span>2</span>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-center text-blackColor dark:text-blackColor-dark">
                                                            <div>
                                                                <span>1</span>
                                                                <span>
                                                                    <i className="icofont-star text-secondaryColor" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow relative mx-10px md:mr-10 lg:mr-10px">
                                                                <span className="h-10px w-full bg-borderColor dark:bg-borderColor-dark rounded-full block" />
                                                                <span className="absolute left-0 top-0 h-10px w-10% bg-secondaryColor rounded-full" />
                                                            </div>
                                                            <div>
                                                                <span>1</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* client reviews */}
                                            <div className="mt-60px mb-10">
                                                <h4 className="text-lg text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-secondaryColor before:absolute before:bottom-[5px] before:left-0 leading-1.2 mb-25px">
                                                    Customer Reviews
                                                </h4>
                                                <ul>
                                                    <li className="flex gap-30px pt-35px border-t border-borderColor2 dark:border-borderColor2-dark">
                                                        <div className="flex-shrink-0">
                                                            <div>
                                                                <img
                                                                    src="assets/images/teacher/teacher__2.png"
                                                                    alt=""
                                                                    className="w-25 h-25 rounded-full"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <h4>
                                                                        <a
                                                                            href="#"
                                                                            className="text-lg font-semibold text-blackColor hover:text-secondaryColor dark:text-blackColor-dark dark:hover:text-condaryColor leading-1.2"
                                                                        >
                                                                            Adam Smit
                                                                        </a>
                                                                    </h4>
                                                                    <div className="text-secondaryColor leading-1.8">
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                    </div>
                                                                </div>
                                                                <div className="author__icon">
                                                                    <p className="text-sm font-bold text-blackColor dark:text-blackColor-dark leading-9 px-25px mb-5px border-2 border-borderColor2 dark:border-borderColo2-dark hover:border-secondaryColor dark:hover:border-secondaryColor rounded-full transition-all duration-300">
                                                                        September 2, 2024
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-contentColor dark:text-contentColor-dark leading-23px mb-15px">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                elit. Doloribus, omnis fugit corporis iste magnam
                                                                ratione.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="flex gap-30px pt-35px border-t border-borderColor2 dark:border-borderColor2-dark">
                                                        <div className="flex-shrink-0">
                                                            <div>
                                                                <img
                                                                    src="assets/images/teacher/teacher__1.png"
                                                                    alt=""
                                                                    className="w-25 h-25 rounded-full"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <h4>
                                                                        <a
                                                                            href="#"
                                                                            className="text-lg font-semibold text-blackColor hover:text-secondaryColor dark:text-blackColor-dark dark:hover:text-condaryColor leading-1.2"
                                                                        >
                                                                            Adam Smit
                                                                        </a>
                                                                    </h4>
                                                                    <div className="text-secondaryColor leading-1.8">
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                    </div>
                                                                </div>
                                                                <div className="author__icon">
                                                                    <p className="text-sm font-bold text-blackColor dark:text-blackColor-dark leading-9 px-25px mb-5px border-2 border-borderColor2 dark:border-borderColo2-dark hover:border-secondaryColor dark:hover:border-secondaryColor rounded-full transition-all duration-300">
                                                                        September 2, 2024
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-contentColor dark:text-contentColor-dark leading-23px mb-15px">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                elit. Doloribus, omnis fugit corporis iste magnam
                                                                ratione.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li className="flex gap-30px pt-35px border-t border-borderColor2 dark:border-borderColor2-dark">
                                                        <div className="flex-shrink-0">
                                                            <div>
                                                                <img
                                                                    src="assets/images/teacher/teacher__3.png"
                                                                    alt=""
                                                                    className="w-25 h-25 rounded-full"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <h4>
                                                                        <a
                                                                            href="#"
                                                                            className="text-lg font-semibold text-blackColor hover:text-secondaryColor dark:text-blackColor-dark dark:hover:text-condaryColor leading-1.2"
                                                                        >
                                                                            Adam Smit
                                                                        </a>
                                                                    </h4>
                                                                    <div className="text-secondaryColor leading-1.8">
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                        <i className="icofont-star" />
                                                                    </div>
                                                                </div>
                                                                <div className="author__icon">
                                                                    <p className="text-sm font-bold text-blackColor dark:text-blackColor-dark leading-9 px-25px mb-5px border-2 border-borderColor2 dark:border-borderColo2-dark hover:border-secondaryColor dark:hover:border-secondaryColor rounded-full transition-all duration-300">
                                                                        September 2, 2024
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-contentColor dark:text-contentColor-dark leading-23px mb-15px">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                elit. Doloribus, omnis fugit corporis iste magnam
                                                                ratione.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* add reviews */}
                                            <div className="p-5 md:p-50px mb-50px bg-lightGrey12 dark:bg-transparent dark:shadow-brand-dark">
                                                <h4
                                                    className="text-2xl font-bold text-blackColor dark:text-blackColor-dark mb-15px !leading-1.2"
                                                    data-aos="fade-up"
                                                >
                                                    Add a Review
                                                </h4>
                                                <div className="flex gap-15px items-center mb-30px">
                                                    <h6 className="font-bold text-blackColor dark:text-blackColor-dark !leading-[19.2px]">
                                                        Your Ratings:
                                                    </h6>
                                                    <div className="text-secondaryColor leading-1.8">
                                                        <i className="icofont-star hover:text-primaryColor" />
                                                        <i className="icofont-star hover:text-primaryColor" />
                                                        <i className="icofont-star hover:text-primaryColor" />
                                                        <i className="icofont-star hover:text-primaryColor" />
                                                        <i className="icofont-star hover:text-primaryColor" />
                                                    </div>
                                                </div>
                                                <form className="pt-5" data-aos="fade-up">
                                                    <textarea
                                                        placeholder="Type you comments...."
                                                        className="w-full p-5 mb-8 bg-transparent text-sm text-blackColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border border-transparent dark:border-borderColor2-dark placeholder:text-placeholder k"
                                                        cols={30}
                                                        rows={6}
                                                        defaultValue={""}
                                                    />
                                                    <div className="grid grid-cols-1 mb-10 gap-10">
                                                        <input
                                                            type="text"
                                                            placeholder="Type your name...."
                                                            className="w-full pl-5 bg-transparent text-sm focus:outline-none text-blackColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border border-transparent dark:border-borderColor2-dark placeholder:text-placeholder placeholder:opacity-80 h-15 leading-15 font-medium rounded"
                                                        />
                                                        <input
                                                            type="email"
                                                            placeholder="Type your email...."
                                                            className="w-full pl-5 bg-transparent text-sm focus:outline-none text-blackColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border border-transparent dark:border-borderColor2-dark placeholder:text-placeholder placeholder:opacity-80 h-15 leading-15 font-medium rounded"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-1 mb-10 gap-10">
                                                        <input
                                                            type="text"
                                                            placeholder="Type your website...."
                                                            className="w-full pl-5 bg-transparent text-sm focus:outline-none text-blackColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark placeholder:text-placeholder border border-transparent dark:border-borderColor2-dark placeholder:opacity-80 h-15 leading-15 font-medium rounded"
                                                        />
                                                    </div>
                                                    <div>
                                                        <input type="checkbox" />
                                                        <span className="text-size-15 text-darkBlue dark:text-darkBlue-dark">
                                                            Save my name, email, and website in this browser for
                                                            the next time I comment.
                                                        </span>
                                                    </div>
                                                    <div className="mt-30px">
                                                        <button
                                                            type="submit"
                                                            className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="hidden">
                                            <div
                                                className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px flex flex-col md:flex-row shadow-autor"
                                                data-aos="fade-up"
                                            >
                                                {/* athor avatar */}
                                                <div className="flex mb-30px mr-5 flex-shrink-0">
                                                    <img
                                                        src="assets/images/blog/blog_10.png"
                                                        alt=""
                                                        className="w-24 h-24 rounded-full"
                                                    />
                                                </div>
                                                <div>
                                                    {/* author name */}
                                                    <div className="mb-3">
                                                        <h3 className="mb-7px">
                                                            <a
                                                                href="instructor-details.html"
                                                                className="text-xl font-bold text-blackColor2 dark:text-blackColor2-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                            >
                                                                Rosalina D. Willaim
                                                            </a>
                                                        </h3>
                                                        <p className="text-xs text-contentColor2 dark:text-contentColor2-dark">
                                                            Blogger/Photographer
                                                        </p>
                                                    </div>
                                                    {/* description */}
                                                    <p className="text-sm text-contentColor dark:text-contentColor-dark mb-15px leading-26px">
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the
                                                        industry's standard dummy text ever since the 1500s,
                                                        when an unknown printer took a galley
                                                    </p>
                                                    {/* social */}
                                                    <div>
                                                        <ul className="flex gap-10px items-center">
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                                >
                                                                    <i className="icofont-facebook" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                                >
                                                                    <i className="icofont-youtube-play" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                                >
                                                                    <i className="icofont-instagram" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                                >
                                                                    <i className="icofont-twitter" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                {/* tag and share  */}
                                <div
                                    className="flex justify-between items-center flex-wrap py-10 mb-10 border-y border-borderColor2 dark:border-borderColor2-dark gap-y-10px"
                                    data-aos="fade-up"
                                >
                                    <div>
                                        <ul className="flex flex-wrap gap-10px">
                                            <li>
                                                <p className="text-lg md:text-size-22 leading-7 md:leading-30px text-blackColor dark:text-blackColor-dark font-bold">
                                                    Tag
                                                </p>
                                            </li>
                                            <li>
                                                <a
                                                    href="blog-details.html"
                                                    className="px-2 py-5px md:px-3 md:py-9px text-contentColor text-size-11 md:text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor rounded"
                                                >
                                                    Business
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="blog-details.html"
                                                    className="px-2 py-5px md:px-3 md:py-9px text-contentColor text-size-11 md:text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor rounded"
                                                >
                                                    DESIGN
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="blog-details.html"
                                                    className="px-2 py-5px md:px-3 md:py-9px text-contentColor text-size-11 md:text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor rounded"
                                                >
                                                    APPS
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="blog-details.html"
                                                    className="px-2 py-5px md:px-3 md:py-9px text-contentColor text-size-11 md:text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor rounded"
                                                >
                                                    DATA
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        {/* social */}
                                        <div>
                                            <ul className="flex gap-10px justify-center items-center">
                                                <li>
                                                    <p className="text-lg md:text-size-22 leading-7 md:leading-30px text-blackColor dark:text-blackColor-dark font-bold">
                                                        Share
                                                    </p>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="h-35px w-35px leading-35px md:w-38px md:h-38px md:leading-38px text-size-11 md:text-xs text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                    >
                                                        <i className="icofont-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="h-35px w-35px leading-35px md:w-38px md:h-38px md:leading-38px text-size-11 md:text-xs text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                    >
                                                        <i className="icofont-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="h-35px w-35px leading-35px md:w-38px md:h-38px md:leading-38px text-size-11 md:text-xs text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                    >
                                                        <i className="icofont-instagram" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* other courses */}
                                <div className="mt-50px mb-30px" data-aos="fade-up">
                                    {/* other courses heading */}
                                    <div className="flex items-center justify-between mb-10px">
                                        <h4 className="text-3xl font-bold text-blackColor dark:text-blackColor-dark leading-1.2">
                                            Author More Courses
                                        </h4>
                                        <a
                                            href="course.html"
                                            className="text-contentColor dark:text-contentColor-dark"
                                        >
                                            More Courses...
                                        </a>
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
                                                                <div className="relative mb-4 overflow-hidden">
                                                                    <a href="course.html" className="w-full">
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
                                                                <div className="relative mb-4 overflow-hidden">
                                                                    <a href="course.html" className="w-full">
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
                                {/* previous comment area */}
                                <div className="pt-50px pb-15px border-y border-borderColor2 dark:border-borderColor2-dark">
                                    <h4
                                        className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark mb-30px !leading-30px"
                                        data-aos="fade-up"
                                    >
                                        (04) Comment
                                    </h4>
                                    <ul>
                                        <li className="flex gap-30px mb-10" data-aos="fade-up">
                                            <div className="flex-shrink-0">
                                                <div>
                                                    <img
                                                        src="assets/images/blog-details/blog-details__1.png"
                                                        alt=""
                                                        className="w-20 h-20 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h4>
                                                            <a
                                                                href="#"
                                                                className="text-lg font-semibold text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor leading-25px"
                                                            >
                                                                Rohan De Spond
                                                            </a>
                                                        </h4>
                                                        <p className="text-xs font-medium text-contentColor dark:text-contentColor-dark leading-29px uppercase mb-5px">
                                                            25 JANUARY 2024
                                                        </p>
                                                    </div>
                                                    <div className="author__icon">
                                                        <button className="group">
                                                            <svg
                                                                width={26}
                                                                height={19}
                                                                viewBox="0 0 26 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    className="group-hover:fill-primaryColor dark:fill-blackColor-dark dark:group-hover:fill-primaryColor block"
                                                                    d="M5.91943 10.2031L12.1694 16.4531C13.3413 17.625 15.3726 16.8047 15.3726 15.125V12.3516C19.9819 12.5469 20.0991 13.5625 19.4351 15.8672C18.9272 17.5469 20.8413 18.9141 22.2866 17.9375C24.2788 16.5703 25.3726 14.8516 25.3726 12.3516C25.3726 6.76562 20.3726 5.67188 15.3726 5.47656V2.66406C15.3726 0.984375 13.3413 0.164062 12.1694 1.33594L5.91943 7.58594C5.17725 8.28906 5.17725 9.5 5.91943 10.2031ZM7.24756 8.875L13.4976 2.625V7.3125C18.1851 7.3125 23.4976 7.58594 23.4976 12.3516C23.4976 14.5391 22.3647 15.6328 21.2319 16.375C22.8335 11.0625 18.8491 10.4375 13.4976 10.4375V15.125L7.24756 8.875ZM0.919434 7.58594C0.177246 8.28906 0.177246 9.5 0.919434 10.2031L7.16943 16.4531C7.95068 17.2734 9.12256 17.1562 9.82568 16.4531L2.24756 8.875L9.82568 1.33594C9.12256 0.632812 7.95068 0.515625 7.16943 1.33594L0.919434 7.58594Z"
                                                                    fill="#121416"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-contentColor dark:text-contentColor-dark leading-23px mb-15px">
                                                    There are many variations of passages of Lorem Ipsum
                                                    available, but the majority have. There are many
                                                    variations of passages of Lorem Ipsum available, but the
                                                    majority have
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            className="flex gap-30px mb-10 lg:pl-100px"
                                            data-aos="fade-up"
                                        >
                                            <div className="flex-shrink-0">
                                                <div>
                                                    <img
                                                        src="assets/images/blog-details/blog-details__2.png"
                                                        alt=""
                                                        className="w-20 h-20 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h4>
                                                            <a
                                                                href="#"
                                                                className="text-lg font-semibold text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor leading-25px"
                                                            >
                                                                Rohan De Spond
                                                            </a>
                                                        </h4>
                                                        <p className="text-xs font-medium text-contentColor dark:text-contentColor-dark leading-29px uppercase mb-5px">
                                                            25 JANUARY 2024
                                                        </p>
                                                    </div>
                                                    <div className="author__icon">
                                                        <button className="group">
                                                            <svg
                                                                width={26}
                                                                height={19}
                                                                viewBox="0 0 26 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    className="group-hover:fill-primaryColor dark:fill-blackColor-dark dark:group-hover:fill-primaryColor block"
                                                                    d="M5.91943 10.2031L12.1694 16.4531C13.3413 17.625 15.3726 16.8047 15.3726 15.125V12.3516C19.9819 12.5469 20.0991 13.5625 19.4351 15.8672C18.9272 17.5469 20.8413 18.9141 22.2866 17.9375C24.2788 16.5703 25.3726 14.8516 25.3726 12.3516C25.3726 6.76562 20.3726 5.67188 15.3726 5.47656V2.66406C15.3726 0.984375 13.3413 0.164062 12.1694 1.33594L5.91943 7.58594C5.17725 8.28906 5.17725 9.5 5.91943 10.2031ZM7.24756 8.875L13.4976 2.625V7.3125C18.1851 7.3125 23.4976 7.58594 23.4976 12.3516C23.4976 14.5391 22.3647 15.6328 21.2319 16.375C22.8335 11.0625 18.8491 10.4375 13.4976 10.4375V15.125L7.24756 8.875ZM0.919434 7.58594C0.177246 8.28906 0.177246 9.5 0.919434 10.2031L7.16943 16.4531C7.95068 17.2734 9.12256 17.1562 9.82568 16.4531L2.24756 8.875L9.82568 1.33594C9.12256 0.632812 7.95068 0.515625 7.16943 1.33594L0.919434 7.58594Z"
                                                                    fill="#121416"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-contentColor dark:text-contentColor-dark leading-23px mb-15px">
                                                    There are many variations of passages of Lorem Ipsum
                                                    available, but the majority have. There are many
                                                    variations of passages of Lorem Ipsum available, but the
                                                    majority have
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex gap-30px mb-10" data-aos="fade-up">
                                            <div className="flex-shrink-0">
                                                <div>
                                                    <img
                                                        src="assets/images/blog-details/blog-details__3.png"
                                                        alt=""
                                                        className="w-20 h-20 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h4>
                                                            <a
                                                                href="#"
                                                                className="text-lg font-semibold text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor leading-25px"
                                                            >
                                                                Rohan De Spond
                                                            </a>
                                                        </h4>
                                                        <p className="text-xs font-medium text-contentColor dark:text-contentColor-dark leading-29px uppercase mb-5px">
                                                            25 JANUARY 2024
                                                        </p>
                                                    </div>
                                                    <div className="author__icon">
                                                        <button className="group">
                                                            <svg
                                                                width={26}
                                                                height={19}
                                                                viewBox="0 0 26 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    className="group-hover:fill-primaryColor dark:fill-blackColor-dark dark:group-hover:fill-primaryColor block"
                                                                    d="M5.91943 10.2031L12.1694 16.4531C13.3413 17.625 15.3726 16.8047 15.3726 15.125V12.3516C19.9819 12.5469 20.0991 13.5625 19.4351 15.8672C18.9272 17.5469 20.8413 18.9141 22.2866 17.9375C24.2788 16.5703 25.3726 14.8516 25.3726 12.3516C25.3726 6.76562 20.3726 5.67188 15.3726 5.47656V2.66406C15.3726 0.984375 13.3413 0.164062 12.1694 1.33594L5.91943 7.58594C5.17725 8.28906 5.17725 9.5 5.91943 10.2031ZM7.24756 8.875L13.4976 2.625V7.3125C18.1851 7.3125 23.4976 7.58594 23.4976 12.3516C23.4976 14.5391 22.3647 15.6328 21.2319 16.375C22.8335 11.0625 18.8491 10.4375 13.4976 10.4375V15.125L7.24756 8.875ZM0.919434 7.58594C0.177246 8.28906 0.177246 9.5 0.919434 10.2031L7.16943 16.4531C7.95068 17.2734 9.12256 17.1562 9.82568 16.4531L2.24756 8.875L9.82568 1.33594C9.12256 0.632812 7.95068 0.515625 7.16943 1.33594L0.919434 7.58594Z"
                                                                    fill="#121416"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-contentColor dark:text-contentColor-dark leading-23px mb-15px">
                                                    There are many variations of passages of Lorem Ipsum
                                                    available, but the majority have. There are many
                                                    variations of passages of Lorem Ipsum available, but the
                                                    majority have
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            className="flex gap-30px mb-10 lg:pl-100px"
                                            data-aos="fade-up"
                                        >
                                            <div className="flex-shrink-0">
                                                <div>
                                                    <img
                                                        src="assets/images/blog-details/blog-details__4.png"
                                                        alt=""
                                                        className="w-20 h-20 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h4>
                                                            <a
                                                                href="#"
                                                                className="text-lg font-semibold text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor leading-25px"
                                                            >
                                                                Rohan De Spond
                                                            </a>
                                                        </h4>
                                                        <p className="text-xs font-medium text-contentColor dark:text-contentColor-dark leading-29px uppercase mb-5px">
                                                            25 JANUARY 2024
                                                        </p>
                                                    </div>
                                                    <div className="author__icon">
                                                        <button className="group">
                                                            <svg
                                                                width={26}
                                                                height={19}
                                                                viewBox="0 0 26 19"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    className="group-hover:fill-primaryColor dark:fill-blackColor-dark dark:group-hover:fill-primaryColor block"
                                                                    d="M5.91943 10.2031L12.1694 16.4531C13.3413 17.625 15.3726 16.8047 15.3726 15.125V12.3516C19.9819 12.5469 20.0991 13.5625 19.4351 15.8672C18.9272 17.5469 20.8413 18.9141 22.2866 17.9375C24.2788 16.5703 25.3726 14.8516 25.3726 12.3516C25.3726 6.76562 20.3726 5.67188 15.3726 5.47656V2.66406C15.3726 0.984375 13.3413 0.164062 12.1694 1.33594L5.91943 7.58594C5.17725 8.28906 5.17725 9.5 5.91943 10.2031ZM7.24756 8.875L13.4976 2.625V7.3125C18.1851 7.3125 23.4976 7.58594 23.4976 12.3516C23.4976 14.5391 22.3647 15.6328 21.2319 16.375C22.8335 11.0625 18.8491 10.4375 13.4976 10.4375V15.125L7.24756 8.875ZM0.919434 7.58594C0.177246 8.28906 0.177246 9.5 0.919434 10.2031L7.16943 16.4531C7.95068 17.2734 9.12256 17.1562 9.82568 16.4531L2.24756 8.875L9.82568 1.33594C9.12256 0.632812 7.95068 0.515625 7.16943 1.33594L0.919434 7.58594Z"
                                                                    fill="#121416"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-contentColor dark:text-contentColor-dark leading-23px mb-15px">
                                                    There are many variations of passages of Lorem Ipsum
                                                    available, but the majority have. There are many
                                                    variations of passages of Lorem Ipsum available, but the
                                                    majority have
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* write comment area */}
                                <div className="pt-50px">
                                    <h4
                                        className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark mb-30px !leading-30px"
                                        data-aos="fade-up"
                                    >
                                        Write your comment
                                    </h4>
                                    <form className="pt-5" data-aos="fade-up">
                                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-30px mb-10 gap-10">
                                            <input
                                                type="text"
                                                placeholder="Enter your name*"
                                                className="w-full pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor2 dark:border-borderColor2-dark placeholder:text-placeholder placeholder:opacity-80 h-15 leading-15 font-medium rounded"
                                                data-aos="fade-up"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Enter your email*"
                                                className="w-full pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor2 dark:border-borderColor2-dark placeholder:text-placeholder placeholder:opacity-80 h-15 leading-15 font-medium rounded"
                                                data-aos="fade-up"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-30px mb-10 gap-10">
                                            <input
                                                type="text"
                                                placeholder="Enter your number*"
                                                className="w-full pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor2 dark:border-borderColor2-dark placeholder:text-placeholder placeholder:opacity-80 h-15 leading-15 font-medium rounded"
                                                data-aos="fade-up"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Website*"
                                                className="w-full pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor2 dark:border-borderColor2-dark placeholder:text-placeholder placeholder:opacity-80 h-15 leading-15 font-medium rounded"
                                                data-aos="fade-up"
                                            />
                                        </div>
                                        <textarea
                                            className="w-full p-5 mb-2 bg-transparent text-sm text-contentColor dark:text-contentColor-dark border border-borderColor2 dark:border-borderColor2-dark rounded"
                                            data-aos="fade-up"
                                            cols={30}
                                            rows={8}
                                            defaultValue={"Enter your Massage*"}
                                        />
                                        <div data-aos="fade-up " className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                            <span className="text-size-15 text-contentColor dark:text-contentColor-dark font-medium text-center">
                                                Save my name, email, and website in this browser for the
                                                next time I comment.
                                            </span>
                                        </div>
                                        <div className="mt-30px text-center" data-aos="fade-up">
                                            <button
                                                type="submit"
                                                className="text-size-15 text-whiteColor bg-primaryColor px-70px py-13px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                                            >
                                                Post a Comment
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* course sidebar */}
                    <div className="lg:col-start-9 lg:col-span-4">
                        <div className="flex flex-col">
                            {/* enroll section */}
                            <div
                                className="py-33px px-25px shadow-event mb-30px bg-whiteColor dark:bg-whiteColor-dark rounded-md"
                                data-aos="fade-up"
                            >
                                {/* meeting thumbnail */}
                                {/* <div className="overflow-hidden relative mb-5">
                                    <img
                                        src="assets/images/blog/blog_7.png"
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center z-10">
                                        <div>
                                            <button
                                                data-url="https://www.youtube.com/watch?v=vHdclsdkp28"
                                                className="lvideo relative w-15 h-15 md:h-20 md:w-20 lg:w-15 lg:h-15 2xl:h-70px 2xl:w-70px 3xl:h-20 3xl:w-20 bg-secondaryColor rounded-full flex items-center justify-center"
                                            >
                                                <span className="animate-buble absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-secondaryColor rounded-full" />
                                                <span className="animate-buble2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-[180px] h-[180px] border-secondaryColor rounded-full" />
                                                <img src="assets/images/icon/video.png" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="flex justify-between mb-5">
                                    <div className="text-size-21 font-bold text-primaryColor font-inter leading-25px">
                                        $32.00
                                        <del className="text-sm text-lightGrey4 font-semibold">
                                            / $67.00
                                        </del>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="uppercase text-sm font-semibold text-secondaryColor2 leading-27px px-2 bg-whitegrey1 dark:bg-whitegrey1-dark"
                                        >
                                            68% OFF
                                        </a>
                                    </div>
                                </div>
                                <div className="mb-5" data-aos="fade-up">
                                    <button
                                        type="submit"
                                        className="w-full text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border mb-10px leading-1.8 border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                                    >
                                        Add To Cart
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-full text-size-15 text-whiteColor bg-secondaryColor px-25px py-10px mb-10px leading-1.8 border border-secondaryColor hover:text-secondaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-secondaryColor dark:hover:bg-whiteColor-dark"
                                    >
                                        Buy Now
                                    </button>
                                    <span className="text-size-13 text-contentColor dark:text-contentColor-dark leading-1.8">
                                        <i className="icofont-ui-rotation" /> 45-Days Money-Back
                                        Guarantee
                                    </span>
                                </div>
                                <ul>
                                    <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Instructor:
                                        </p>
                                        <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                            D. Willaim
                                        </p>
                                    </li>
                                    <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Start Date
                                        </p>
                                        <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                            05 Dec 2024
                                        </p>
                                    </li>
                                    <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Total Duration
                                        </p>
                                        <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                            08Hrs 32Min
                                        </p>
                                    </li>
                                    <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Enrolled
                                        </p>
                                        <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                            100
                                        </p>
                                    </li>
                                    <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Lectures
                                        </p>
                                        <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                            30
                                        </p>
                                    </li>
                                    <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Skill Level
                                        </p>
                                        <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                            Basic
                                        </p>
                                    </li>
                                    <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Language
                                        </p>
                                        <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                            Spanish
                                        </p>
                                    </li>
                                    <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Quiz
                                        </p>
                                        <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                            Yes
                                        </p>
                                    </li>
                                    <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                        <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                            Certificate
                                        </p>
                                        <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                            Yes
                                        </p>
                                    </li>
                                </ul>
                                <div className="mt-5" data-aos="fade-up">
                                    <p className="text-sm text-contentColor dark:text-contentColor-dark leading-1.8 text-center mb-5px">
                                        More inquery about course
                                    </p>
                                    <button
                                        type="submit"
                                        className="w-full text-xl text-primaryColor bg-whiteColor px-25px py-10px mb-10px font-bold leading-1.8 border border-primaryColor hover:text-whiteColor hover:bg-primaryColor inline-block rounded group dark:bg-whiteColor-dark dark:text-whiteColor dark:hover:bg-primaryColor"
                                    >
                                        <i className="icofont-phone" /> +47 333 78 901
                                    </button>
                                </div>
                            </div>
                            {/* social area */}
                            {/* <div
                                className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                                data-aos="fade-up"
                            >
                                <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                                    Follow Us
                                </h4>
                                <div>
                                    <ul className="flex gap-4 items-center">
                                        <li>
                                            <a
                                                href="#"
                                                className="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                                            >
                                                <i className="icofont-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                                            >
                                                <i className="icofont-youtube-play" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                                            >
                                                <i className="icofont-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                                            >
                                                <i className="icofont-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="w-38px h-38px leading-38px text-center text-blackColor2 bg-whitegrey2 hover:text-whiteColor hover:bg-primaryColor dark:bg-whitegrey2-dark dark:text-blackColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor rounded"
                                            >
                                                <i className="icofont-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* popular course */}
                            {/* <div
                                className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                                data-aos="fade-up"
                            >
                                <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                                    Populer Course
                                </h4>
                                <ul className="flex flex-col gap-y-25px">
                                    <li className="flex items-center">
                                        <div className="w-[91px] h-auto mr-5 flex-shrink-0">
                                            <a href="#" className="w-full">
                                                <img
                                                    src="assets/images/blog-details/blog-details__6.png"
                                                    alt=""
                                                    className="w-full"
                                                />
                                            </a>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-sm text-primaryColor font-medium leading-[17px]">
                                                $32,000
                                            </h3>
                                            <a
                                                href="#"
                                                className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor font-semibold leading-22px"
                                            >
                                                Making Music with Other People
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-[91px] h-auto mr-5 flex-shrink-0">
                                            <a href="#" className="w-full">
                                                <img
                                                    src="assets/images/blog-details/blog-details__7.png"
                                                    alt=""
                                                    className="w-full"
                                                />
                                            </a>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-sm text-primaryColor font-medium leading-[17px]">
                                                $32,000
                                            </h3>
                                            <a
                                                href="#"
                                                className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor font-semibold leading-22px"
                                            >
                                                Making Music with Other People
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-[91px] h-auto mr-5 flex-shrink-0">
                                            <a href="#" className="w-full">
                                                <img
                                                    src="assets/images/blog-details/blog-details__8.png"
                                                    alt=""
                                                    className="w-full"
                                                />
                                            </a>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-sm text-primaryColor font-medium leading-[17px]">
                                                $32,000
                                            </h3>
                                            <a
                                                href="#"
                                                className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor font-semibold leading-22px"
                                            >
                                                Making Music with Other People
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                            {/* contact form */}
                            {/* <div
                                className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                                data-aos="fade-up"
                            >
                                <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                                    Get in Touch
                                </h4>
                                <form className="space-y-5">
                                    <input
                                        type="text"
                                        placeholder="Enter Name*"
                                        className="w-full text-contentColor leading-7 pb-10px bg-transparent focus:outline-none placeholder:text-placeholder placeholder:opacity-80 border-b border-borderColor2 dark:text-contentColor-dark dark:border-borderColor2-dark"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Enter your mail*"
                                        className="w-full text-contentColor leading-7 pb-10px bg-transparent focus:outline-none placeholder:text-placeholder placeholder:opacity-80 border-b border-borderColor2 dark:text-contentColor-dark dark:border-borderColor2-dark"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Message*"
                                        className="w-full text-contentColor leading-7 pb-10px bg-transparent focus:outline-none placeholder:text-placeholder placeholder:opacity-80 border-b border-borderColor2 dark:text-contentColor-dark dark:border-borderColor2-dark"
                                    />
                                    <button
                                        type="submit"
                                        className="text-size-15 text-whiteColor uppercase bg-primaryColor border border-primaryColor px-55px py-13px hover:text-primaryColor hover:bg-whiteColor rounded inline-block dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div> */}
                            {/* tags */}
                            {/* <div
                                className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                                data-aos="fade-up"
                            >
                                <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                                    Popular tag
                                </h4>
                                <ul className="flex flex-wrap gap-x-5px">
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="m-5px px-19px py-3px text-contentColor text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor leading-30px dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor"
                                        >
                                            Business
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="m-5px px-19px py-3px text-contentColor text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor leading-30px dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor"
                                        >
                                            DESIGN
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="m-5px px-19px py-3px text-contentColor text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor leading-30px dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor"
                                        >
                                            APPS
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="m-5px px-19px py-3px text-contentColor text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor leading-30px dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor"
                                        >
                                            LANDING PAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="m-5px px-19px py-3px text-contentColor text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor leading-30px dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor"
                                        >
                                            DATA
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="m-5px px-19px py-3px text-contentColor text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor leading-30px dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor"
                                        >
                                            BOOK
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="m-5px px-19px py-3px text-contentColor text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor leading-30px dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor"
                                        >
                                            DESIGN
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="m-5px px-19px py-3px text-contentColor text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor leading-30px dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor"
                                        >
                                            BOOK
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="m-5px px-19px py-3px text-contentColor text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor leading-30px dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor"
                                        >
                                            LANDING PAGE
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details.html"
                                            className="m-5px px-19px py-3px text-contentColor text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor leading-30px dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor"
                                        >
                                            DATA
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}