export default function SecondForm() {
    return (
        <div className="content-wrapper py-4 px-5">
            <div>
                <form
                    className="p-10px md:p-10 lg:p-5 2xl:p-10 bg-darkdeep3 dark:bg-transparent text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
                    data-aos="fade-up"
                >
                    <div className="grid grid-cols-1 mb-15px gap-15px">
                        <div>
                            <input
                                type="text"
                                placeholder="Select Video searche"
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block font-semibold">
                                Add Your Video URL
                            </label>
                            <input
                                type="text"
                                placeholder="Add your Video URL here"
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>
                        <div>
                            <div className="mb-3 block">
                                Example:
                                <a
                                    className="hover:text-primaryColor"
                                    href="https://www.youtube.com/watch?v=yourvideoid"
                                >
                                    https://www.youtube.com/watch?v=yourvideoid
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}