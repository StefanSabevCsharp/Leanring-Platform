export default function News() {
  return (
    <section>
  <div className="container pt-100px pb-70px">
    {/* heading */}
    <div className="mb-5 md:mb-10" data-aos="fade-up">
      <div className="relative">
        <div>
          <div className="text-center">
            <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
              News &amp; Blogs
            </span>
          </div>
        </div>
        <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor text-center dark:text-blackColor-dark">
          Leatest News &amp; Blog
        </h3>
      </div>
    </div>
    {/* blogs */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
      {/* blog 1 */}
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
      {/* blog 2 & 3 */}
      <div className="lg:col-start-9 lg:col-span-4">
        <div className="flex flex-col gap-y-30px">
          {/* blog 2 */}
          <div className="group shadow-blog" data-aos="fade-up">
            {/* blog thumbnail */}
            <div className="overflow-hidden relative">
              <img
                src="assets/images/blog/blog_3.png"
                alt=""
                className="w-full group-hover:scale-110 transition-all duration-300"
              />
              <div className="text-base md:text-2xl leading-5 md:leading-30px font-semibold text-white px-15px py-5px md:px-22px md:py-7px bg-primaryColor rounded text-center absolute top-5 left-5">
                20 <br />
                Oct
              </div>
            </div>
            {/* blog content */}
            <div className="px-5 py-25px">
              <h3 className="text-2xl md:text-size-28 leading-30px md:leading-35px font-bold text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor">
                <a href="blog-details.html">
                  It is a long established fact that a reader will be Standard
                  Part
                </a>
              </h3>
            </div>
          </div>
          {/* blog 3 */}
          <div className="group shadow-blog" data-aos="fade-up">
            {/* blog thumbnail */}
            <div className="overflow-hidden relative">
              <img
                src="assets/images/blog/blog_4.png"
                alt=""
                className="w-full group-hover:scale-110 transition-all duration-300"
              />
              <div className="text-base md:text-2xl leading-5 md:leading-30px font-semibold text-white px-15px py-5px md:px-22px md:py-7px bg-primaryColor rounded text-center absolute top-5 left-5">
                20 <br />
                Oct
              </div>
            </div>
            {/* blog content */}
            <div className="px-5 py-25px">
              <h3 className="text-2xl md:text-size-28 leading-30px md:leading-35px font-bold text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor">
                <a href="blog-details.html">
                  It is a long established fact that a reader will be Standard
                  Part
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}