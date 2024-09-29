export default function Password() {
    return (
        <div className="transition-all duration-300">
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
    );
}