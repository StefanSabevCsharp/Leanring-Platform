import CourseCard from "../courseCard/CourseCard";

export default function Courses() {
    
  return (
    <section>
  <div className="pt-50px pb-10 md:pt-70px md:pb-50px lg:pt-20 2xl:pt-100px 2xl:pb-70px bg-whiteColor dark:bg-whiteColor-dark">
    <div className="filter-container container">
      <div className="flex gap-15px lg:gap-30px flex-wrap lg:flex-nowrap items-center">
        {/* courses Left */}
        <div className="basis-full lg:basis-[500px]" data-aos="fade-up">
          <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
            Course List
          </span>
          <h3
            className="text-3xl md:text-[35px] lg:text-size-42 leading-[45px] 2xl:leading-[45px] md:leading-[50px] font-bold text-blackColor dark:text-blackColor-dark"
            data-aos="fade-up"
          >
            Perfect Online Course Your Carrer
          </h3>
        </div>
        {/* courses right */}
        <div className="basis-full lg:basis-[700px]">
          <ul
            className="filter-controllers flex flex-wrap sm:flex-nowrap justify-start lg:justify-end button-group filters-button-group"
            data-aos="fade-up"
          >
            <li>
              <button
                data-filter="*"
                className="is-checked dark:is-checked pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
              >
                See All
              </button>
            </li>
            <li>
              <button
                data-filter=".filter1"
                className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
              >
                Data science
              </button>
            </li>
            <li>
              <button
                data-filter=".filter2"
                className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
              >
                Engineering
              </button>
            </li>
            <li>
              <button
                data-filter=".filter3"
                className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
              >
                Featured
              </button>
            </li>
            <li>
              <button
                data-filter=".filter4"
                className="text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
              >
                Architecture
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* course cards */}
      <div
        className="container p-0 filter-contents flex flex-wrap sm:-mx-15px mt-7 lg:mt-10"
        data-aos="fade-up"
      >
       
           {/* {[1,2,3,4,5,6].map((item, index) => <CourseCard key={index} />)} */}
            {/* //TODO: Render courses instead of hardcoding */}
        
        {/* card 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item filter1 filter3">
          <div className="tab-content-wrapper sm:px-15px mb-30px">
            <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
              {/* card image */}
              <div className="relative mb-4">
                <a
                  href="course-details.html"
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
                    <span className="text-xs text-lightGrey6">(44)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item filter2 filter3">
          <div className="tab-content-wrapper sm:px-15px mb-30px">
            <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
              {/* card image */}
              <div className="relative mb-4">
                <a
                  href="course-details.html"
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
                  href="course-details.html"
                  className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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
        <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item filter4 filter5">
          <div className="tab-content-wrapper sm:px-15px mb-30px">
            <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
              {/* card image */}
              <div className="relative mb-4">
                <a
                  href="course-details.html"
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
                  href="course-details.html"
                  className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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
        <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item filter4">
          <div className="tab-content-wrapper sm:px-15px mb-30px">
            <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
              {/* card image */}
              <div className="relative mb-4">
                <a
                  href="course-details.html"
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
                  href="course-details.html"
                  className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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
        <div className="w-full sm:w-1/2 lg:w-1/3 group group grid-item filter1 filter3">
          <div className="tab-content-wrapper sm:px-15px mb-30px">
            <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
              {/* card image */}
              <div className="relative mb-4">
                <a
                  href="course-details.html"
                  className="w-full overflow-hidden rounded"
                >
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
                  href="course-details.html"
                  className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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
        <div className="w-full sm:w-1/2 lg:w-1/3 group grid-item filter2 filter5">
          <div className="tab-content-wrapper sm:px-15px mb-30px">
            <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
              {/* card image */}
              <div className="relative mb-4">
                <a
                  href="course-details.html"
                  className="w-full overflow-hidden rounded"
                >
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
                  href="course-details.html"
                  className="text-xl font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
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
      </div>
    </div>
  </div>
</section>

  );
}