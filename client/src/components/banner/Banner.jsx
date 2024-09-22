export default function Banner() {
    return (
        <section>
            {/* bannaer section */}
            <div className="container2-xl bg-darkdeep1 pt-50px md:pt-20 pb-205px md:pb-35 rounded-2xl relative overflow-hidden shadow-brand">
                <div className="container grid grid-cols-1 lg:grid-cols-2 items-center">
                    {/* banner Left */}
                    <div data-aos="fade-up">
                        <h3 className="uppercase text-secondaryColor text-size-15 mb-5px md:mb-15px font-inter tracking-5px">
                            EDUCATION SOLUTION
                        </h3>
                        <h1 className="text-3xl text-whiteColor md:text-6xl lg:text-size-50 2xl:text-6xl leading-10 md:leading-18 lg:leading-62px 2xl:leading-18 md:tracking-half lg:tracking-normal 2xl:tracking-half font-bold mb-15px">
                            Cloud-based LMS <br className="hidden md:block" />
                            Trusted by 1000+
                        </h1>
                        <p className="text-size-15md:text-lg text-white font-medium mb-45px">
                            Lorem Ipsum is simply dummy text of the printing typesetting industry.
                            Lorem Ipsum has been
                        </p>
                        <div>
                            <a
                                href="course.html"
                                className="text-sm md:text-size-15 font-semibold text-darkdeep2 bg-whiteColor border border-whiteColor px-5 md:px-30px py-3 md:py-4 hover:text-whiteColor hover:bg-darkblack rounded inline-block mr-6px md:mr-30px shadow-hero-action dark:bg-whiteColor-dark dark:hover:bg-whiteColor dark:text-whiteColor dark:hover:text-whiteColor-dark dark:border-none"
                            >
                                View Courses
                            </a>
                            <a
                                href="#"
                                className="text-sm md:text-size-15 font-semibold text-whiteColor py-3 md:py-4 hover:text-secondaryColor inline-block"
                            >
                                Find out more <i className="icofont-long-arrow-right" />
                            </a>
                        </div>
                    </div>
                    {/* banner right */}
                    <div data-aos="fade-up">
                        <div className="tilt relative">
                            <img
                                className="w-full"
                                src="assets/images/about/about_8.png"
                                alt=""
                            />
                            <img
                                className="absolute left-0 top-0 lg:top-4 right-0 mx-auto"
                                src="assets/images/about/about_1.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        className="absolute left-1/2 bottom-[15%] animate-spin-slow"
                        src="assets/images/register/register__2.png"
                        alt=""
                    />
                    <img
                        className="absolute left-[42%] sm:left-[65%] md:left-[42%] lg:left-[5%] top-[4%] sm:top-[1%] md:top-[4%] lg:top-[10%] animate-move-hor"
                        src="assets/images/herobanner/herobanner__6.png"
                        alt=""
                    />
                    <img
                        className="absolute right-[5%] bottom-[15%]"
                        src="assets/images/herobanner/herobanner__7.png"
                        alt=""
                    />
                    <img
                        className="absolute top-[5%] left-[45%]"
                        src="assets/images/herobanner/herobanner__7.png"
                        alt=""
                    />
                </div>
            </div>
        </section>

    );
}