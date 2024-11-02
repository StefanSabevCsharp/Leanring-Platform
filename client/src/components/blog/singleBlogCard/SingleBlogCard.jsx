export default function SingleBlogCard() {
  return (
    <div className="group shadow-blog2" data-aos="fade-up">
          {/* blog thumbnail */}
          <div className="overflow-hidden relative">
            <img
              src="assets/images/blog/blog_6.png"
              alt=""
              className="w-full"
            />
            <div className="text-size-22 leading-6 font-semibold text-white px-15px py-5px md:px-6 md:py-2 bg-primaryColor rounded text-center absolute top-5 right-5">
              <h3>
                24 <br />
                Feb
              </h3>
            </div>
          </div>
          {/* blog content */}
          <div className="pt-26px pb-5 px-30px">
            <h3 className="text-2xl md:text-size-32 lg:text-size-28 2xl:text-size-34 leading-34px md:leading-10 2xl:leading-13.5 font-bold text-blackColor2 hover:text-primaryColor dark:text-blackColor2-dark dark:hover:text-primaryColor">
              <a href="blog-details.html">
                Delivering What Consumers Really Value?
              </a>
            </h3>
            <div className="mb-14px pb-19px border-b border-borderColor dark:border-borderColor-dark">
              <ul className="flex flex-wrap items-center gap-x-15px">
                <li>
                  <a
                    href="blog-details.html"
                    className="text-contentColor text-sm hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                  >
                    <i className="icofont-business-man-alt-2" />
                    Mirnsdo.H
                  </a>
                </li>
                <li>
                  <a
                    href="blog-details.html"
                    className="text-contentColor text-sm hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                  >
                    <i className="icofont-speech-comments" /> 0 Comments
                  </a>
                </li>
                <li>
                  <a
                    href="blog-details.html"
                    className="text-contentColor text-sm hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                  >
                    <i className="icofont-eraser-alt" /> Association
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-base text-contentColor dark:text-contentColor-dark mb-15px !leading-30px">
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of On the other hand, organizations have
              the need for integrating in IT departments
            </p>
            <div className="flex justify-between items-center">
              <div>
                <a
                  href="blog-details.html"
                  className="uppercase text-secondaryColor hover:text-primaryColor"
                >
                  READ MORE <i className="icofont-double-right" />
                </a>
              </div>
              <div className="text-primaryColor hover:text-secondaryColor space-y-1">
                <a href="#">
                  <i className="icofont-share bg-whitegrey1 dark:bg-whitegrey1-dark hover:text-whiteColor hover:bg-primaryColor w-8 h-7 leading-7 text-center inline-block rounded transition-all duration-300" />
                </a>
                <a href="#">
                  <i className="icofont-heart bg-whitegrey1 dark:bg-whitegrey1-dark hover:text-whiteColor hover:bg-primaryColor w-8 h-7 leading-7 text-center inline-block rounded transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
  );
}