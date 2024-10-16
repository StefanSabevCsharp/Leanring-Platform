import { useState } from "react";
import { deleteReview } from "../../../../../dataService/reviewService";

export default function ReviewTableRow({ review, setReviews, refreshReviews }) {


    const handleDeleteReview = async (reviewId) => {
        try {
            console.log("here")
            const response = await deleteReview(reviewId);
             refreshReviews();

        } catch (error) {
            console.error("Error in delete review function", error);
        }
    };

    return (
        <tr className="leading-1.8 md:leading-1.8">
            <th className="px-5px py-10px md:px-5 font-normal">
                <p className="text-blackColor dark:text-blackColor-dark">
                    Course: {review.course.courseTitle}
                </p>
            </th>
            <td className="px-5px py-10px md:px-5">
                <div>
                    {/* review */}
                    <div className="text-primaryColor">
                        {[...Array(review.stars)].map((star, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="blue"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-star w-4 inline-block"
                            >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        ))}
                        <p className="text-white font-bold">{review.text}</p>
                        <span className="md:text-sm text-blackColor dark:text-blackColor-dark font-bold">
                            ({review.course.reviews.length} Reviews)
                        </span>
                    </div>
                </div>
            </td>
            <td className="px-5px py-10px md:px-5">
                <div className="flex">
                    <a
                        className="flex items-center gap-1 md:text-sm font-bold text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor px-10px leading-1.8 relative before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300"
                        href="#"
                    >
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
                            className="feather feather-edit"
                        >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                    </a>
                    <button
                        className="flex items-center gap-1 md:text-sm font-bold text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor px-10px leading-1.8"
                        onClick={() => handleDeleteReview(review._id)}
                    >
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
                            className="feather feather-trash-2"
                        >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                        </svg>
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}