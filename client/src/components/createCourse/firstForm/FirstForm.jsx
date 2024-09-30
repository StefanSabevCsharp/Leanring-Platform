export default function FirstForm() {
  return (
    <div className="content-wrapper py-4 px-5">
    <div>
        <form
            className="p-10px md:p-10 lg:p-5 2xl:p-10 bg-darkdeep3 dark:bg-transparent text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
            data-aos="fade-up"
        >
            <div className="grid grid-cols-1 mb-15px gap-15px">
                <div>
                    <label className="mb-3 block font-semibold">
                        Course Title
                    </label>
                    <input
                        type="text"
                        placeholder="Course Title"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                    />
                </div>
                <div>
                    <label className="mb-3 block font-semibold">
                        Course Slug
                    </label>
                    <input
                        type="text"
                        placeholder="Course Slug"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                    />
                </div>
                <div>
                    <label className="mb-3 block font-semibold">
                        Free Regular Price ($)
                    </label>
                    <input
                        type="text"
                        placeholder="Free Regular Price ($)"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                    />
                </div>
                <div>
                    <p className="flex items-center gap-0.5">
                        <svg
                            className="feather feather-info w-14px h-14px"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx={12} cy={12} r={10} />
                            <line x1={12} y1={16} x2={12} y2={12} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                        </svg>
                        The Course Price Includes Your Author Fee.
                    </p>
                    <label className="mb-3 block font-semibold">
                        Discounted Price ($)
                    </label>
                    <input
                        type="text"
                        placeholder="Discounted Price ($)"
                        className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                    />
                </div>
                <div>
                    <p className="flex items-center gap-0.5">
                        <svg
                            className="feather feather-info w-14px h-14px"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx={12} cy={12} r={10} />
                            <line x1={12} y1={16} x2={12} y2={12} />
                            <line x1={12} y1={8} x2="12.01" y2={8} />
                        </svg>
                        The Course Price Includes Your Author Fee.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
                        <div>
                            <label className="text-xs uppercase text-placeholder block font-semibold text-opacity-50 leading-1.8">
                                COURSES
                            </label>
                            <div className="bg-whiteColor relative rounded-md">
                                <select className="text-base bg-transparent text-blackColor2 w-full p-13px pr-30px focus:outline-none block appearance-none relative z-20 focus:shadow-select rounded-md">
                                    <option selected="">All</option>
                                    <option value={1}>Web Design</option>
                                    <option value={2}>Graphic</option>
                                    <option value={3}>English</option>
                                    <option value={4}>Spoken English</option>
                                    <option value={5}>Art Painting</option>
                                    <option value={6}>App Development</option>
                                    <option value={7}>Web Application</option>
                                    <option value={7}>Php Development</option>
                                </select>
                                <i className="icofont-simple-down absolute top-1/2 right-3 -translate-y-1/2 block text-lg z-10" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs uppercase text-placeholder block font-semibold text-opacity-50 leading-1.8">
                                SHORT BY OFFER
                            </label>
                            <div className="bg-whiteColor relative rounded-md">
                                <select className="text-base bg-transparent text-blackColor2 w-full p-13px pr-30px focus:outline-none block appearance-none relative z-20 focus:shadow-select rounded-md">
                                    <option selected="">premium</option>
                                    <option value={1}>Free</option>
                                    <option value={2}>paid</option>
                                </select>
                                <i className="icofont-simple-down absolute top-1/2 right-3 -translate-y-1/2 block text-lg z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-15px">
                <label className="mb-3 block font-semibold">
                    About Course
                </label>
                <textarea
                    className="w-full py-10px px-5 text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                    cols={30}
                    rows={10}
                    defaultValue={"                              "}
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
</div>
  );
}