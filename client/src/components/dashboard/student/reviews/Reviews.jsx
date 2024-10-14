import { useState } from "react";
import useGetReviews from "../../../../hooks/useGetReviews";
import ReviewTableRow from "./reviewTableRow/ReviewTableRow";

export default function Reviews({ user }) {
    

    const [refresh, setRefresh] = useState(false);
    const refreshReviews = () => {
        setRefresh(!refresh);
    }
    const [reviews, loading] = useGetReviews(user._id,refresh);
    if (!loading && reviews) {
        return (
            <div className="lg:col-start-4 lg:col-span-9">
                {/* review area */}
                <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
                    {/* heading */}
                    <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
                        <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                            Reviews
                        </h2>
                    </div>
                    <div className="tab">
                        {user.reviews.length == 0 ? (<h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">There are no reviews yet</h2>)
                            :
                            (<div className="tab-contents">
                                <div className="transition-all duration-300">
                                    <div className="overflow-auto">
                                        <table className="w-full text-left">
                                            <thead className="text-sm md:text-base text-blackColor dark:text-blackColor-dark bg-lightGrey5 dark:bg-whiteColor-dark leading-1.8 md:leading-1.8">
                                                <tr>
                                                    <th className="px-5px py-10px md:px-5">Course Title</th>
                                                    <th className="px-5px py-10px md:px-5">Review</th>
                                                    <th className="px-5px py-10px md:px-5" />
                                                </tr>
                                            </thead>
                                            <tbody className="text-size-13 md:text-base text-contentColor dark:text-contentColor-dark font-normal">
                                                {reviews.map((review) => (<ReviewTableRow key={review._id} review={review} refreshReviews={refreshReviews} />))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>)}


                    </div>
                </div>
            </div>

        );

    }
}