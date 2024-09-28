import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../../context/authContext";

export default function StudentNavigation({user}) {
    // const {user} = useContext(AuthContext);
    return (
        <div className="p-30px pt-5 lg:p-5 2xl:p-30px 2xl:pt-5 rounded-lg2 shadow-accordion dark:shadow-accordion-dark bg-whiteColor dark:bg-whiteColor-dark">
            {/* greeting */}
            <h5 className="text-sm leading-1 font-semibold uppercase text-contentColor dark:text-contentColor-dark bg-lightGrey5 dark:bg-whiteColor-dark p-10px pb-7px mt-5 mb-10px">
            {user.username}
            </h5>
            <ul>

                <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                : "text-contentColor dark:text-contentColor-dark hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                        >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Dashboard
                    </NavLink>
                </li>

                {/* Profile Link */}
                <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                    <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                : "text-contentColor dark:text-contentColor-dark hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                        </svg>
                        My Profile
                    </NavLink>
                </li>
                {/* <li className="py-10px border-b border-borderColor dark:border-borderColor-dark flex justify-between items-center">
                    <a
                        href="student-message.html"
                        className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-book-open"
                        >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                        Message
                    </a>
                    <span className="text-size-10 font-medium text-whiteColor px-9px bg-primaryColor leading-14px rounded-2xl">
                        12
                    </span>
                </li> */}
                <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                    <NavLink
                        to="/dashboard/my-courses"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                : "text-contentColor dark:text-contentColor-dark hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                        </svg>
                        My Courses
                    </NavLink>
                </li>
                <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                    <NavLink
                        to="/dashboard/wishlist"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                : "text-contentColor dark:text-contentColor-dark hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                        </svg>
                        Wishlist
                    </NavLink>
                </li>
                <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                    <NavLink
                        to="/dashboard/reviews"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                : "text-contentColor dark:text-contentColor-dark hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                        </svg>
                        Reviews
                    </NavLink>
                </li>
                {/* <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                    <a
                        href="student-my-quiz-attempts.html"
                        className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-help-circle"
                        >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <line x1={12} y1={17} x2="12.01" y2={17} />
                        </svg>
                        My Quiz Attempts
                    </a>
                </li> */}
                {/* <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                    <a
                        href="student-assignments.html"
                        className="text-contentColor dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-volume-1"
                        >
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                        Assignments
                    </a>
                </li> */}
               <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                    <NavLink
                        to="/dashboard/settings"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                : "text-contentColor dark:text-contentColor-dark hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                        </svg>
                        Settings
                    </NavLink>
                </li>
                <li className="py-10px border-b border-borderColor dark:border-borderColor-dark">
                    <NavLink
                        to="/logout"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                                : "text-contentColor dark:text-contentColor-dark hover:text-primaryColor leading-1.8 flex gap-3 text-nowrap"
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                        </svg>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </div>

    );
}