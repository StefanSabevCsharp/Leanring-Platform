export default function BigBlogCard() {
    return (
        <div
            className="lg:col-start-1 lg:col-span-8 group shadow-blog"
            data-aos="fade-up"
        >
            {/* blog thumbnail */}
            <div className="overflow-hidden relative">
                <img
                    src="assets/images/blog/blog_1.png"
                    alt=""
                    className="w-full group-hover:scale-110 transition-all duration-300"
                />
                <div className="text-base md:text-3xl leading-5 md:leading-9 font-semibold text-white px-15px py-5px md:px-6 md:py-2 bg-primaryColor rounded text-center absolute top-5 left-5">
                    20 <br />
                    Oct
                </div>
            </div>
            {/* blog content */}
            <div className="p-5 md:p-35px md:pt-10">
                <h3 className="text-2xl md:text-4xl leading-30px md:leading-45px font-bold text-blackColor hover:text-primaryColor pb-25px dark:text-blackColor-dark dark:hover:text-primaryColor">
                    <a href="blog-details.html">
                        It is a long established fact that a reader will be Standard Part
                    </a>
                </h3>
                <p className="text-base text-contentColor dark:text-contentColor-dark mb-30px">
                    A wonderful serenity has taken possssion of my entire souing like
                    these sweet morning spring whch enjoy with my whole heart I am
                    alone, and feel the charm of existenceths spot whch was create For
                    the bliss of souls like mineing am so happy my dear frend so absori
                    bed in the exquste sens of mere. A wonderful serenity has taken
                    posseson of my entire soung like these sweet mornngs spring whch
                    enjoy …
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div>
                            <img
                                src="assets/images/blog/blog_2.png"
                                alt=""
                                className="w-11 h-11 rounded-full"
                            />
                        </div>
                        <div className="text-sm md:text-lg text-darkdeep5 dark:text-darkdeep5-dark">
                            By:
                            <span className="text-blackColor dark:text-blackColor-dark">
                                Mirnsdo Jons
                            </span>
                        </div>
                    </div>
                    {/* social */}
                    <div>
                        <ul className="flex gap-1">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm md:text-size-15 w-5 h-5 md:w-[39px] md:h-[39px] flex items-center justify-center border border-borderColor text-darkdeep4 hover:text-primaryColor dark:border-borderColor-dark rounded"
                                >
                                    <i className="icofont-facebook" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm md:text-size-15 w-5 h-5 md:w-[39px] md:h-[39px] flex items-center justify-center border border-borderColor text-darkdeep4 hover:text-primaryColor dark:border-borderColor-dark rounded"
                                >
                                    <i className="icofont-youtube-play" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm md:text-size-15 w-5 h-5 md:w-[39px] md:h-[39px] flex items-center justify-center border border-borderColor text-darkdeep4 hover:text-primaryColor dark:border-borderColor-dark rounded"
                                >
                                    <i className="icofont-instagram" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm md:text-size-15 w-5 h-5 md:w-[39px] md:h-[39px] flex items-center justify-center border border-borderColor text-darkdeep4 hover:text-primaryColor dark:border-borderColor-dark rounded"
                                >
                                    <i className="icofont-twitter" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}