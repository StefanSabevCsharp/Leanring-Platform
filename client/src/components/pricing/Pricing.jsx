export default function Pricing() {
  return (
    <section>
  <div className="container pt-90px pb-100px">
    {/* heading */}
    <div className="mb-5 md:mb-10">
      <div className="relative" data-aos="fade-up">
        <div>
          <div className="text-center">
            <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
              Pricing Plan
            </span>
          </div>
        </div>
        <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark text-center">
          Choose The Best Package <br />
          For your Learning
        </h3>
      </div>
    </div>
    {/* plans */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30px">
      {/* plan 1 */}
      <div
        className="p-10 pt-50px bg-lightGrey10 hover:bg-whiteColor hover:shadow-plan transition-all duration-300 rounded-lg dark:bg-lightGrey10-dark dark:hover:bg-whiteColor-dark"
        data-aos="fade-up"
      >
        {/* plan pricing */}
        <div className="relative mb-55px">
          <h3 className="text-size-28 font-semibold text-blackColor leading-45px mb-15px uppercase dark:text-blackColor-dark">
            Free
          </h3>
          <h6 className="text-5xl text-blackColor font-medium mb-15px dark:text-blackColor-dark">
            <span className="text-size-58 pr-1">$</span>0
            <span className="text-size-22 text-contentColor dark:text-contentColor-dark">
              / month
            </span>
          </h6>
          <p className="text-blackColor dark:text-blackColor-dark">
            Perfect for startup
          </p>
          <img
            className="absolute top-0 right-0 -translate-y-30px"
            src="assets/images/icon/price__1.png"
            alt=""
          />
        </div>
        {/* plan feature */}
        <div>
          <ul className="flex flex-col gap-y-30px">
            <li>
              <i className="icofont-check text-whiteColor bg-secondaryColor px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                2 user
              </span>
            </li>
            <li>
              <i className="icofont-check text-whiteColor bg-secondaryColor px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Learning Scope
              </span>
            </li>
            <li>
              <i className="icofont-close text-whiteColor bg-lightGrey6 px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Team collaboration
              </span>
            </li>
            <li>
              <i className="icofont-check text-whiteColor bg-lightGrey6 px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Export HTML code
              </span>
            </li>
            <li>
              <i className="icofont-check text-whiteColor bg-secondaryColor px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Upload Your Logo
              </span>
            </li>
          </ul>
        </div>
        {/* plan bottom */}
        <div>
          <a
            href="#"
            className="w-full py-10px px-25px text-size-15 text-center text-whiteColor bg-primaryColor border border-primaryColor hover:bg-whiteColor hover:text-primaryColor mb-25px mt-30px rounded dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
          >
            Get Started
          </a>
          <p className="text-size-15 text-contentColor dark:text-contentColor-dark">
            No creadit card required
          </p>
        </div>
      </div>
      {/* plan 2 */}
      <div
        className="p-10 pt-50px bg-lightGrey10 hover:bg-whiteColor hover:shadow-plan transition-all duration-300 rounded-lg dark:bg-lightGrey10-dark dark:hover:bg-whiteColor-dark"
        data-aos="fade-up"
      >
        {/* plan pricing */}
        <div className="relative mb-55px">
          <h3 className="text-size-28 font-semibold text-blackColor leading-45px mb-15px uppercase dark:text-blackColor-dark">
            BASIC
          </h3>
          <h6 className="text-5xl text-blackColor font-medium mb-15px dark:text-blackColor-dark">
            <span className="text-size-58 pr-1">$</span>29
            <span className="text-size-22 text-contentColor dark:text-contentColor-dark">
              / month
            </span>
          </h6>
          <p className="text-blackColor dark:text-blackColor-dark">
            Perfect for startup
          </p>
          <img
            className="absolute top-0 right-0 -translate-y-30px"
            src="assets/images/icon/price__2.png"
            alt=""
          />
        </div>
        {/* plan feature */}
        <div>
          <ul className="flex flex-col gap-y-30px">
            <li>
              <i className="icofont-check text-whiteColor bg-secondaryColor px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                5 user
              </span>
            </li>
            <li>
              <i className="icofont-check text-whiteColor bg-secondaryColor px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Learning Scope
              </span>
            </li>
            <li>
              <i className="icofont-close text-whiteColor bg-lightGrey6 px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Team collaboration
              </span>
            </li>
            <li>
              <i className="icofont-check text-whiteColor bg-lightGrey6 px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Export HTML code
              </span>
            </li>
            <li>
              <i className="icofont-check text-whiteColor bg-secondaryColor px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Upload Your Logo
              </span>
            </li>
          </ul>
        </div>
        {/* plan bottom */}
        <div>
          <a
            href="#"
            className="w-full py-10px px-25px text-size-15 text-center text-whiteColor bg-secondaryColor border border-secondaryColor hover:bg-whiteColor hover:text-secondaryColor mb-25px mt-30px rounded dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
          >
            Get Started
          </a>
          <p className="text-size-15 text-contentColor dark:text-contentColor-dark">
            No creadit card required
          </p>
        </div>
      </div>
      {/* plan 3 */}
      <div
        className="p-10 pt-50px bg-lightGrey10 hover:bg-whiteColor hover:shadow-plan transition-all duration-300 rounded-lg dark:bg-lightGrey10-dark dark:hover:bg-whiteColor-dark"
        data-aos="fade-up"
      >
        {/* plan pricing */}
        <div className="relative mb-55px">
          <h3 className="text-size-28 font-semibold text-blackColor leading-45px mb-15px uppercase dark:text-blackColor-dark">
            PRO
          </h3>
          <h6 className="text-5xl text-blackColor font-medium mb-15px dark:text-blackColor-dark">
            <span className="text-size-58 pr-1">$</span>59
            <span className="text-size-22 text-contentColor dark:text-contentColor-dark">
              / month
            </span>
          </h6>
          <p className="text-blackColor dark:text-blackColor-dark">
            Perfect for startup
          </p>
          <img
            className="absolute top-0 right-0 -translate-y-30px"
            src="assets/images/icon/price__3.png"
            alt=""
          />
        </div>
        {/* plan feature */}
        <div>
          <ul className="flex flex-col gap-y-30px">
            <li>
              <i className="icofont-check text-whiteColor bg-secondaryColor px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                2 user
              </span>
            </li>
            <li>
              <i className="icofont-check text-whiteColor bg-secondaryColor px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Learning Scope
              </span>
            </li>
            <li>
              <i className="icofont-close text-whiteColor bg-lightGrey6 px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Team collaboration
              </span>
            </li>
            <li>
              <i className="icofont-check text-whiteColor bg-lightGrey6 px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Export HTML code
              </span>
            </li>
            <li>
              <i className="icofont-check text-whiteColor bg-secondaryColor px-1 py-3px mr-15px rounded-full text-xs" />
              <span className="text-lg text-deepblue font-medium dark:text-deepblue-dark">
                Upload Your Logo
              </span>
            </li>
          </ul>
        </div>
        {/* plan bottom */}
        <div>
          <a
            href="#"
            className="w-full py-10px px-25px text-size-15 text-center text-whiteColor bg-primaryColor border border-primaryColor hover:bg-whiteColor hover:text-primaryColor mb-25px mt-30px rounded dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
          >
            Get Started
          </a>
          <p className="text-size-15 text-contentColor dark:text-contentColor-dark">
            No creadit card required
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}