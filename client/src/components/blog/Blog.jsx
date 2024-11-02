import SingleBlogCard from "./singleBlogCard/SingleBlogCard";

export default function Blog() {
  return (
    <section>
  <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
      {/* blogs */}
      <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
        {/* blog 1 */}
        <SingleBlogCard />
       
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
                className="w-10 h-10 leading-10 md:w-50px md:h-50px md:leading-50px text-center text-whiteColor hover:text-whiteColor bg-primaryColor hover:bg-primaryColor dark:text-blackColor2-dark dark:hover:text-whiteColor dark:bg-whitegrey1-dark dark:hover:bg-primaryColor"
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
      {/* blog sidebar */}
      <div className="lg:col-start-9 lg:col-span-4">
        <div className="flex flex-col">
          {/* author details */}
          <div
            className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark text-center"
            data-aos="fade-up"
          >
            {/* athor avatar */}
            <div className="mb-30px flex justify-center">
              <img
                src="assets/images/blog/blog_10.png"
                alt=""
                className="w-24 h-24 rounded-full"
              />
            </div>
            {/* author name */}
            <div className="mb-3">
              <h3 className="mb-7px">
                <a
                  href="#"
                  className="text-xl font-bold text-blackColor2 dark:text-blackColor2-dark"
                >
                  Rosalina D. Willaim
                </a>
              </h3>
              <p className="text-xs text-contentColor2 dark:text-contentColor2-dark">
                Blogger/Photographer
              </p>
            </div>
            {/* description */}
            <p className="text-sm text-contentColor dark:text-contentColor-dark mb-15px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Veritatis
              distinctio suscipit reprehenderit atque
            </p>
            {/* social */}
            <div>
              <ul className="flex gap-10px justify-center items-center">
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
          {/* search input */}
          <div
            className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
            data-aos="fade-up"
          >
            <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
              Search here
            </h4>
            <form className="w-full px-4 py-15px text-sm text-contentColor bg-lightGrey10 dark:bg-lightGrey10-dark dark:text-contentColor-dark flex justify-center items-center leading-26px">
              <input
                type="text"
                placeholder="Search Produce"
                className="placeholder:text-placeholder bg-transparent focus:outline-none placeholder:opacity-80 w-full"
              />
              <button type="submit">
                <i className="icofont-search-1 text-base" />
              </button>
            </form>
          </div>
          {/* categories */}
          <div
            className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
            data-aos="fade-up"
          >
            <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
              categories
            </h4>
            <ul className="flex flex-col gap-y-4">
              <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor transition-all duration-300 text-sm font-medium px-4 py-2 border border-borderColor2 hover:border-primaryColor dark:border-borderColor2-dark dark:hover:border-primaryColor flex justify-between leading-7">
                <a href="#">Mobile Set</a> <a href="#">03</a>
              </li>
              <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor transition-all duration-300 text-sm font-medium px-4 py-2 border border-borderColor2 hover:border-primaryColor dark:border-borderColor2-dark dark:hover:border-primaryColor flex justify-between leading-7">
                <a href="#">Mobile Set</a> <a href="#">03</a>
              </li>
              <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor transition-all duration-300 text-sm font-medium px-4 py-2 border border-borderColor2 hover:border-primaryColor dark:border-borderColor2-dark dark:hover:border-primaryColor flex justify-between leading-7">
                <a href="#">Raxila Dish nonyte</a> <a href="#">09</a>
              </li>
              <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor transition-all duration-300 text-sm font-medium px-4 py-2 border border-borderColor2 hover:border-primaryColor dark:border-borderColor2-dark dark:hover:border-primaryColor flex justify-between leading-7">
                <a href="#">Fresh Vegetable</a> <a href="#">01</a>
              </li>
              <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor transition-all duration-300 text-sm font-medium px-4 py-2 border border-borderColor2 hover:border-primaryColor dark:border-borderColor2-dark dark:hover:border-primaryColor flex justify-between leading-7">
                <a href="#">Fruites</a> <a href="#">00</a>
              </li>
              <li className="text-contentColor hover:text-contentColor-dark hover:bg-primaryColor transition-all duration-300 text-sm font-medium px-4 py-2 border border-borderColor2 hover:border-primaryColor dark:border-borderColor2-dark dark:hover:border-primaryColor flex justify-between leading-7">
                <a href="#">Gesuriesey</a> <a href="#">26</a>
              </li>
            </ul>
          </div>
          {/* recent posts */}
          <div
            className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
            data-aos="fade-up"
          >
            <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
              Recent Post
            </h4>
            <ul className="flex flex-col gap-y-25px">
              <li className="flex items-center">
                <div className="w-2/5 pr-5 relative">
                  <a href="blog-details.html" className="w-full">
                    <img
                      src="assets/images/blog/blog_11.png"
                      alt=""
                      className="w-full"
                    />
                  </a>
                  <span className="text-xs font-medium text-whiteColor h-6 w-6 leading-6 text-center bg-primaryColor absolute top-0 left-0">
                    01
                  </span>
                </div>
                <div className="w-3/5">
                  <a
                    href="blog-details.html"
                    className="w-full text-sm text-contentColor font-medium leading-7 dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                  >
                    23 December 2024
                  </a>
                  <h3 className="font-bold leading-22px mb-15px">
                    <a
                      className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                      href="blog-details.html"
                    >
                      Show at the University
                    </a>
                  </h3>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-2/5 pr-5 relative">
                  <a href="blog-details.html" className="w-full">
                    <img
                      src="assets/images/blog/blog_12.png"
                      alt=""
                      className="w-full"
                    />
                  </a>
                  <span className="text-xs font-medium text-whiteColor h-6 w-6 leading-6 text-center bg-primaryColor absolute top-0 left-0">
                    02
                  </span>
                </div>
                <div className="w-3/5">
                  <a
                    href="blog-details.html"
                    className="w-full text-sm text-contentColor font-medium leading-7 dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                  >
                    23 December 2024
                  </a>
                  <h3 className="font-bold leading-22px mb-15px">
                    <a
                      className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                      href="blog-details.html"
                    >
                      Show at the University
                    </a>
                  </h3>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-2/5 pr-5 relative">
                  <a href="blog-details.html" className="w-full">
                    <img
                      src="assets/images/blog/blog_13.png"
                      alt=""
                      className="w-full"
                    />
                  </a>
                  <span className="text-xs font-medium text-whiteColor h-6 w-6 leading-6 text-center bg-primaryColor absolute top-0 left-0">
                    03
                  </span>
                </div>
                <div className="w-3/5">
                  <a
                    href="blog-details.html"
                    className="w-full text-sm text-contentColor font-medium leading-7 dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                  >
                    23 December 2024
                  </a>
                  <h3 className="font-bold leading-22px mb-15px">
                    <a
                      className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                      href="blog-details.html"
                    >
                      Show at the University
                    </a>
                  </h3>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-2/5 pr-5 relative">
                  <a href="blog-details.html" className="w-full">
                    <img
                      src="assets/images/blog/blog_14.png"
                      alt=""
                      className="w-full"
                    />
                  </a>
                  <span className="text-xs font-medium text-whiteColor h-6 w-6 leading-6 text-center bg-primaryColor absolute top-0 left-0">
                    04
                  </span>
                </div>
                <div className="w-3/5">
                  <a
                    href="blog-details.html"
                    className="w-full text-sm text-contentColor font-medium leading-7 dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                  >
                    23 December 2024
                  </a>
                  <h3 className="font-bold leading-22px mb-15px">
                    <a
                      className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                      href="blog-details.html"
                    >
                      Show at the University
                    </a>
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          
          {/* contact form */}
          <div
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
          </div>
         
          {/* social area */}
          <div
            className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
            data-aos="fade-up"
          >
            <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
              Follow Me
            </h4>
            <div>
              <ul className="flex gap-10px items-center">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}