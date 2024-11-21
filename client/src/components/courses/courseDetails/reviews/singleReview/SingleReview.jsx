import { Link } from "react-router-dom";
import upperCase from "../../../../../utils/upperCase";
import dataParser from "../../../../../utils/dataParser";

export default function SingleReview({ review }) {

    return (
        <li className="flex gap-30px pt-35px border-t border-borderColor2 dark:border-borderColor2-dark">
            <div className="flex-shrink-0">
                <div>
                    <img
                        src="/assets/images/mypic.jpg"
                        alt=""
                        className="w-25 h-25 rounded-full"
                    />
                </div>
            </div>
            <div className="flex-grow">
                <div className="flex justify-between">
                    <div>
                        <h4>
                            <Link
                                to={`/users/${review.user}`}
                                className="text-lg font-semibold text-blackColor hover:text-secondaryColor dark:text-blackColor-dark dark:hover:text-condaryColor leading-1.2"
                            >
                                {upperCase(review.creator)}
                            </Link>
                        </h4>
                        <div className="text-secondaryColor leading-1.8">
                            {[...Array(review.stars)].map((star,index) =>
                                 (<i key={index} className="icofont-star" />))}
                        </div>
                    </div>
                    <div className="author__icon">
                        <p className="text-sm font-bold text-blackColor dark:text-blackColor-dark leading-9 px-25px mb-5px border-2 border-borderColor2 dark:border-borderColo2-dark hover:border-secondaryColor dark:hover:border-secondaryColor rounded-full transition-all duration-300">
                            {dataParser(review.createdAt)}
                        </p>
                    </div>
                </div>
                <p className="text-sm text-contentColor dark:text-contentColor-dark leading-23px mb-15px">
                    {review.text}
                </p>
            </div>
        </li>
    );
}