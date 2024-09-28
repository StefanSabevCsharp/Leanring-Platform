export default function Settings() {
  return (
    <div className="lg:col-start-4 lg:col-span-9">
  {/* setting area */}
  <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
    {/* heading */}
    <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
      <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
        My Profile
      </h2>
    </div>
    <div className="tab">
      <div className="tab-links flex flex-wrap mb-10px lg:mb-50px rounded gap-10px">
        <button className="is-checked relative py-10px px-5 md:py-15px lg:px-10 font-bold uppercase text-sm lg:text-base text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 whitespace-nowrap active">
          PROFILE
        </button>
        <button className="is-checked relative py-10px px-5 md:py-15px lg:px-10 font-bold uppercase text-sm lg:text-base text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 whitespace-nowrap">
          PASSWORD
        </button>
        <button className="is-checked relative py-10px px-5 md:py-15px lg:px-10 font-bold uppercase text-sm lg:text-base text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 whitespace-nowrap">
          SOCIAL ICON
        </button>
      </div>
      <div className="tab-contents">
        <div className="transition-all duration-300">
          <form
            className="text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 mb-15px gap-y-15px gap-x-30px">
              <div>
                <label className="mb-3 block font-semibold">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">Last Name</label>
                <input
                  type="text"
                  placeholder="Due"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">User Name</label>
                <input
                  type="text"
                  placeholder="Ntaden Mic"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">Phone Number</label>
                <input
                  type="text"
                  placeholder="+1-202-555-0174"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">
                  Skill/Occupation
                </label>
                <input
                  type="text"
                  placeholder="Full Stack Developer"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">
                  Display Name Publicly As
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
            </div>
            <div className="mb-15px">
              <label className="mb-3 block font-semibold">Bio</label>
              <textarea
                className="w-full py-10px px-5 text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                cols={30}
                rows={10}
                defaultValue={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n                     "
                }
              />
            </div>
            <div className="mt-15px">
              <button
                type="submit"
                className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
              >
                Update Info
              </button>
            </div>
          </form>
        </div>
        <div className="hidden transition-all duration-300">
          <form
            className="text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 mb-15px gap-y-15px gap-x-30px">
              <div>
                <label className="mb-3 block font-semibold">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="Current password"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">New Password</label>
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">
                  Re-Type New Password
                </label>
                <input
                  type="password"
                  placeholder="Re-Type New Password"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
            </div>
            <div className="mt-15px">
              <button
                type="submit"
                className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
        <div className="hidden transition-all duration-300">
          <form
            className="text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 mb-15px gap-y-15px gap-x-30px">
              <div>
                <label className="mb-3 block font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-facebook inline-block mr-1"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </label>
                <input
                  type="text"
                  placeholder="https://facebook.com/"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter inline-block mr-1"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  Twitter
                </label>
                <input
                  type="text"
                  placeholder="https://twitter.com/"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin inline-block mr-1"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x={2} y={9} width={4} height={12} />
                    <circle cx={4} cy={4} r={2} />
                  </svg>
                  Linkedin
                </label>
                <input
                  type="text"
                  placeholder="https://linkedin.com/"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-layout inline-block mr-1"
                  >
                    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                    <line x1={3} y1={9} x2={21} y2={9} />
                    <line x1={9} y1={21} x2={9} y2={9} />
                  </svg>
                  Website
                </label>
                <input
                  type="text"
                  placeholder="https://website.com/"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
              <div>
                <label className="mb-3 block font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github inline-block mr-1"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Github
                </label>
                <input
                  type="text"
                  placeholder="https://github.com/"
                  className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                />
              </div>
            </div>
            <div className="mt-15px">
              <button
                type="submit"
                className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
              >
                Update Social
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}