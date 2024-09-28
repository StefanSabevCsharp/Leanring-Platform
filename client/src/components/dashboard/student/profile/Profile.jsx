import { Link } from "react-router-dom";
import dataParser from "../../../../utils/dataParser";

export default function Profile({ user }) {
    const { firstName, lastName, username, email, createdAt } = user;
    return (
        <div className="lg:col-start-4 lg:col-span-9">
            {/* profile details */}
            <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
                <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
                    <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                        My Profile
                    </h2>
                </div>
                <div>
                    <ul>
                        <li className="text-lg text-contentColor dark:text-contentColor-dark leading-1.67 grid grid-cols-1 md:grid-cols-12 gap-x-30px">
                            <div className="md:col-start-1 md:col-span-4">
                                <span className="inline-block">Registration Date</span>
                            </div>
                            <div className="md:col-start-5 md:col-span-8">
                                <span className="inline-block">{dataParser(user.createdAt)}</span>
                            </div>
                        </li>
                        <li className="text-lg text-contentColor dark:text-contentColor-dark leading-1.67 grid grid-cols-1 md:grid-cols-12 gap-x-30px mt-15px">
                            <div className="md:col-start-1 md:col-span-4">
                                <span className="inline-block">First Name</span>
                            </div>
                            <div className="md:col-start-5 md:col-span-8">
                                <span className="inline-block">{firstName}</span>
                            </div>
                        </li>
                        <li className="text-lg text-contentColor dark:text-contentColor-dark leading-1.67 grid grid-cols-1 md:grid-cols-12 gap-x-30px mt-15px">
                            <div className="md:col-start-1 md:col-span-4">
                                <span className="inline-block">Last Name</span>
                            </div>
                            <div className="md:col-start-5 md:col-span-8">
                                <span className="inline-block">{lastName}</span>
                            </div>
                        </li>
                        <li className="text-lg text-contentColor dark:text-contentColor-dark leading-1.67 grid grid-cols-1 md:grid-cols-12 gap-x-30px mt-15px">
                            <div className="md:col-start-1 md:col-span-4">
                                <span className="inline-block">Username</span>
                            </div>
                            <div className="md:col-start-5 md:col-span-8">
                                <span className="inline-block">{username}</span>
                            </div>
                        </li>
                        <li className="text-lg text-contentColor dark:text-contentColor-dark leading-1.67 grid grid-cols-1 md:grid-cols-12 gap-x-30px mt-15px">
                            <div className="md:col-start-1 md:col-span-4">
                                <span className="inline-block">Email</span>
                            </div>
                            <div className="md:col-start-5 md:col-span-8">
                                <span className="inline-block">{email}</span>
                            </div>
                        </li>
                        <li className="text-lg text-contentColor dark:text-contentColor-dark leading-1.67 grid grid-cols-1 md:grid-cols-12 gap-x-30px mt-15px">
                            <div className="md:col-start-1 md:col-span-4">
                                <span className="inline-block">Phone Number</span>
                            </div>
                            <div className="md:col-start-5 md:col-span-8">
                                <span className="inline-block">{user?.phoneNumber ? (`${user.phoneNumber}`) : (
                                    <Link to="/dashboard/settings">
                                        <button className="text-blue-500 underline">
                                            Add Phone Number
                                        </button>
                                    </Link>)}
                                </span>
                            </div>
                        </li>
                        {/* <li className="text-lg text-contentColor dark:text-contentColor-dark leading-1.67 grid grid-cols-1 md:grid-cols-12 gap-x-30px mt-15px">
                            <div className="md:col-start-1 md:col-span-4">
                                <span className="inline-block">Expert</span>
                            </div>
                            <div className="md:col-start-5 md:col-span-8">
                                <span className="inline-block">Graphics Design</span>
                            </div>
                        </li> */}
                        <li className="text-lg text-contentColor dark:text-contentColor-dark leading-1.67 grid grid-cols-1 md:grid-cols-12 gap-x-30px mt-15px">
                            <div className="md:col-start-1 md:col-span-4">
                                <span className="inline-block">Biography</span>
                            </div>
                            <div className="md:col-start-5 md:col-span-8">
                                <span className="inline-block">{user?.biography ? (`${user.biography}`) : (
                                    <Link to="/dashboard/settings">
                                        <button className="text-blue-500 underline">
                                            Add Biography
                                        </button>
                                    </Link>)
                                }
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}