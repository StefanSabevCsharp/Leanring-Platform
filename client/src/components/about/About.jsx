export default function About() {
  return (
    <section>
      <div className="container">
        {/* about section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px">
          {/* about left */}
          <div
            className="relative z-0 mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0 overflow-visible"
            data-aos="fade-up"
          >
            <div className="tilt">
              <img
                className="md:ml-[70px]"
                src="assets/images/about/about_2.png"
                alt="Our Learning Center"
              />
              <img
                className="absolute right-0 sm:right-[-17px] md:right-36 lg:right-4 bottom-[91px] md:bottom-0"
                src="assets/images/about/about_3.png"
                alt="Students at work"
              />
              <img
                className="absolute top-[-18px] left-[30px] animate-move-hor z-[-1]"
                src="assets/images/about/about_4.png"
                alt="Our community"
              />
              <img
                className="absolute top-[30%] left-0 z-[-1]"
                src="assets/images/about/about_11.png"
                alt="Supportive learning environment"
              />
            </div>
            {/* experience */}
            <div className="px-10px py-3 md:py-25px border-l-4 border-primaryColor shadow-experience absolute bottom-0 left-0 bg-white dark:bg-whiteColor-dark animate-move-var w-[290px]">
              <div className="counter flex items-center">
                <p className="text-[40px] text-primaryColor font-bold uppercase pr-10px leading-1">
                  <span data-countup-number={25}>25</span>+
                </p>
                <p className="text-blackColor dark:text-blackColor-dark font-bold leading-26px">
                  YEARS OF EDUCATIONAL EXCELLENCE
                </p>
              </div>
            </div>
          </div>
          {/* about right */}
          <div data-aos="fade-up">
            <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
              About Us
            </span>
            <h3 className="text-3xl md:text-size-45 leading-10 md:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
              Welcome to the <br />
              <span className="relative after:w-full after:h-[7px] after:bg-secondaryColor after:absolute after:left-0 after:bottom-3 md:after:bottom-5">
                Global <br />
              </span>
              Learning Hub
            </h3>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-6 pl-3 border-l-2 border-primaryColor">
              With over 25 years of experience, our center has been at the
              forefront of innovative education. We blend proven teaching
              methods with the latest technology to provide a holistic and
              inclusive learning experience that reaches students across the
              globe.
            </p>
            <ul className="space-y-5">
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                  Trusted and experienced educators and industry experts
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                  A wide array of courses tailored for career advancement
                </p>
              </li>
              <li className="flex items-center group">
                <i className="icofont-check px-2 py-2 text-primaryColor bg-whitegrey3 bg-opacity-40 group-hover:bg-primaryColor group-hover:text-white group-hover:opacity-100 mr-15px dark:bg-whitegrey1-dark" />
                <p className="text-sm md:text-base font-medium text-blackColor dark:text-blackColor-dark">
                  Community-driven support and collaborative learning
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* about counter */}
        <div className="counter flex flex-wrap py-[70px] lg:py-20 gap-y-30px lg:gap-y-0">
          <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
            <div className="flex gap-4">
              <div>
                <img src="assets/images/counter/counter__1.png" alt="Achievements icon" />
              </div>
              <div>
                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <span data-countup-number={27}>27</span>
                  <span>+</span>
                </p>
                <p className="uppercase text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Achievements
                </p>
              </div>
            </div>
          </div>
          <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
            <div className="flex gap-4">
              <div>
                <img src="assets/images/counter/counter__2.png" alt="Students icon" />
              </div>
              <div>
                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <span data-countup-number={145}>145</span>
                  <span>+</span>
                </p>
                <p className="uppercase text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Students Enrolled
                </p>
              </div>
            </div>
          </div>
          <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
            <div className="flex gap-4">
              <div>
                <img src="assets/images/counter/counter__3.png" alt="Instructors icon" />
              </div>
              <div>
                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <span data-countup-number={10}>10</span>
                  <span>k</span>
                </p>
                <p className="uppercase text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Expert Instructors
                </p>
              </div>
            </div>
          </div>
          <div className="basis-full sm:basis-1/2 lg:basis-1/4" data-aos="fade-up">
            <div className="flex gap-4">
              <div>
                <img src="assets/images/counter/counter__4.png" alt="Global reach icon" />
              </div>
              <div>
                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                  <span data-countup-number={214}>214</span>
                  <span>+</span>
                </p>
                <p className="uppercase text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                  Countries Reached
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
