export default function InstructorDashboard({ user }) {
    return (
        <div className="lg:col-start-4 lg:col-span-9">
            {/* counter */}
            <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
                <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
                    <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                        Dashboard
                    </h2>
                </div>
                {/* counter area */}
                <div className="counter grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-30px gap-y-5 pb-5">
                    <div className="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
                        <div className="flex gap-4">
                            <div>
                                <img src="../../assets/images/counter/counter__1.png" alt="" />
                            </div>
                            <div>
                                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                                    <span> {user?.createdCourses.length}</span>
                                    
                                </p>
                                <p className="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                                    Created Courses
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
                        <div className="flex gap-4">
                            <div>
                                <img src="../../assets/images/counter/counter__2.png" alt="" />
                            </div>
                            <div>
                                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                                    <span >{user?.soldCourses.length}</span>
                                </p>
                                <p className="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                                    Sold Courses
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
                        <div className="flex gap-4">
                            <div>
                                <img src="../../assets/images/counter/counter__2.png" alt="" />
                            </div>
                            <div>
                                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                                    <span >{user?.signedUpStudents.length}</span>
                                </p>
                                <p className="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                                    Enrolled Students
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 md:px-10 md:py-50px bg-lightGrey5 dark:bg-whiteColor-dark rounded-lg2 shadow-accordion-dark">
                        <div className="flex gap-4">
                            <div>
                                <img src="../../assets/images/counter/counter__4.png" alt="" />
                            </div>
                            <div>
                                <p className="text-size-34 leading-[1.1] text-blackColor font-bold font-hind dark:text-blackColor-dark">
                                    <span>{user?.totalEarnings }</span>
                                </p>
                                <p className="text-blackColor font-medium leading-[18px] dark:text-blackColor-dark">
                                    Total Earning
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5 max-h-137.5 overflow-auto">
                <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark flex items-center justify-between gap-2 flex-wrap">
                    <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                        Total Feedbacks
                    </h2>
                    <a
                        href="../../course.html"
                        className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8"
                    >
                        See More...
                    </a>
                </div>
                <div className="overflow-auto">
                    <table className="w-full text-left text-nowrap">
                        <thead className="text-sm md:text-base text-blackColor dark:text-blackColor-dark bg-lightGrey5 dark:bg-whiteColor-dark leading-1.8 md:leading-1.8">
                            <tr>
                                <th className="px-5px py-10px md:px-5">Course Name</th>
                                <th className="px-5px py-10px md:px-5">Enrolled</th>
                                <th className="px-5px py-10px md:px-5">Rating</th>
                            </tr>
                        </thead>
                        <tbody className="text-size-13 md:text-base text-contentColor dark:text-contentColor-dark font-normal">
                            <tr className="leading-1.8 md:leading-1.8">
                                <th className="px-5px py-10px md:px-5 font-normal">
                                    <p>Javascript</p>
                                </th>
                                <td className="px-5px py-10px md:px-5">
                                    <p>1100</p>
                                </td>
                                <td className="px-5px py-10px md:px-5">
                                    <div className="text-primaryColor">
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star w-14px inline-block"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr className="leading-1.8 md:leading-1.8 bg-lightGrey5 dark:bg-whiteColor-dark">
                                <th className="px-5px py-10px md:px-5 font-normal">
                                    <p>PHP</p>
                                </th>
                                <td className="px-5px py-10px md:px-5">
                                    <p>700</p>
                                </td>
                                <td className="px-5px py-10px md:px-5">
                                    <div className="text-primaryColor">
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star w-14px inline-block"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr className="leading-1.8 md:leading-1.8">
                                <th className="px-5px py-10px md:px-5 font-normal">
                                    <p>HTML</p>
                                </th>
                                <td className="px-5px py-10px md:px-5">
                                    <p>1350</p>
                                </td>
                                <td className="px-5px py-10px md:px-5">
                                    <div className="text-primaryColor">
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star w-14px inline-block"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                            <tr className="leading-1.8 md:leading-1.8 bg-lightGrey5 dark:bg-whiteColor-dark">
                                <th className="px-5px py-10px md:px-5 font-normal">
                                    <p>Graphic</p>
                                </th>
                                <td className="px-5px py-10px md:px-5">
                                    <p>1266</p>
                                </td>
                                <td className="px-5px py-10px md:px-5">
                                    <div className="text-primaryColor">
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <i className="icofont-star" />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star w-14px inline-block"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>

    );
}