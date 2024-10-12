import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import upperCase from "../../utils/upperCase";

export default function CourseComment({comment}) {

    return (
        <li className="flex gap-30px mb-10" data-aos="fade-up">
            <div className="flex-shrink-0">
                <div>
                    <img
                        src="/assets/images/blog-details/blog-details__1.png"
                        alt=""
                        className="w-20 h-20 rounded-full"
                    />
                </div>
            </div>
            <div className="flex-grow">
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="text-lg font-semibold text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor leading-25px">
                               {upperCase(comment.creator)}
                           
                        </h4>
                        <p className="text-xs font-medium text-contentColor dark:text-contentColor-dark leading-29px uppercase mb-5px">
                            {formatDate(comment.createdAt)}
                        </p>
                    </div>
                    <div className="author__icon">
                        {/* <button className="group">
                            <svg
                                width={26}
                                height={19}
                                viewBox="0 0 26 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="group-hover:fill-primaryColor dark:fill-blackColor-dark dark:group-hover:fill-primaryColor block"
                                    d="M5.91943 10.2031L12.1694 16.4531C13.3413 17.625 15.3726 16.8047 15.3726 15.125V12.3516C19.9819 12.5469 20.0991 13.5625 19.4351 15.8672C18.9272 17.5469 20.8413 18.9141 22.2866 17.9375C24.2788 16.5703 25.3726 14.8516 25.3726 12.3516C25.3726 6.76562 20.3726 5.67188 15.3726 5.47656V2.66406C15.3726 0.984375 13.3413 0.164062 12.1694 1.33594L5.91943 7.58594C5.17725 8.28906 5.17725 9.5 5.91943 10.2031ZM7.24756 8.875L13.4976 2.625V7.3125C18.1851 7.3125 23.4976 7.58594 23.4976 12.3516C23.4976 14.5391 22.3647 15.6328 21.2319 16.375C22.8335 11.0625 18.8491 10.4375 13.4976 10.4375V15.125L7.24756 8.875ZM0.919434 7.58594C0.177246 8.28906 0.177246 9.5 0.919434 10.2031L7.16943 16.4531C7.95068 17.2734 9.12256 17.1562 9.82568 16.4531L2.24756 8.875L9.82568 1.33594C9.12256 0.632812 7.95068 0.515625 7.16943 1.33594L0.919434 7.58594Z"
                                    fill="#121416"
                                />
                            </svg>
                        </button> */}
                    </div>
                </div>
                <p className="text-sm text-contentColor dark:text-contentColor-dark leading-23px mb-15px">
                    {comment?.text}
                </p>
            </div>
        </li>
    );
}