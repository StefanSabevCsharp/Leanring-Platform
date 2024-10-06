export default function FourthForm() {
    return (
        <div className="content-wrapper py-4 px-5">
            <div>
                <form
                    className="p-10px md:p-10 lg:p-5 2xl:p-10 bg-darkdeep3 dark:bg-transparent text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
                    data-aos="fade-up"
                >
                    <div className="grid grid-cols-1 xl:grid-cols-2 mb-15px gap-y-15px gap-x-30px">
                        <div>
                            <label className="mb-3 block font-semibold">
                                Start Date
                            </label>
                            <input
                                type="text"
                                placeholder="mm/dd/yyy"
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block font-semibold">
                                Language
                            </label>
                            <input
                                type="text"
                                placeholder="English"
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-30px">
                        <div>
                            <label className="mb-3 block font-semibold">
                                Requirements
                            </label>
                            <textarea
                                className="w-full py-10px px-5 mb-15px text-sm text-contentColor dark:text-contentColor-dark text-start bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                                cols={30}
                                rows={10}
                                defaultValue={"Add your course benefits here."}
                            />
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
                                Enter for per line.
                            </p>
                        </div>
                        <div>
                            <label className="mb-3 block font-semibold">
                                Description
                            </label>
                            <textarea
                                className="w-full py-10px px-5 mb-15px text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                                cols={30}
                                rows={10}
                                defaultValue={
                                    "Add your course benefits here.\n                            "
                                }
                            />
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
                                Enter for per line.
                            </p>
                        </div>
                    </div>
                    <div className="mb-15px">
                        <label className="mb-3 block font-semibold">
                            Course Tags
                        </label>
                        <textarea
                            className="w-full py-10px px-5 text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                            cols={30}
                            rows={10}
                            defaultValue={""}
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