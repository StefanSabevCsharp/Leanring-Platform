import { useContext, useState } from "react";
import ReviewForm from "./reviewForm/ReviewForm";
import SingleReview from "./singleReview/SingleReview";
import AuthContext from "../../../../context/authContext";
import Pagination from "../../../pagination/Pagination";

export default function Reviews({reviews, setReviews, courseId, user}) {
  const [page, setPage] = useState(1);
  const reviewsPerPage = 5;
  const indexOfLastReview = page * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  console.log(reviews);
  const calculateAvarageRating = () => {
    if(reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.stars, 0);
    return totalRating / reviews.length;
  }  
  const getReviewsCountByStars = (star) => {

    return reviews.filter((review) => review.stars === star).length;
  };
  const getStarPercentage = (star) => {
    const starCount = getReviewsCountByStars(star);
    return (starCount / reviews.length) * 100; 
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-x-30px gap-y-5">
        <div className="lg:col-start-1 lg:col-span-4 px-10px py-30px bg-whiteColor dark:bg-whiteColor-dark shadow-review text-center">
          <p className="text-7xl font-extrabold text-blackColor dark:text-blackColor-dark leading-90px">
            {calculateAvarageRating().toFixed(1)}
          </p>
          <div className="text-secondaryColor">
            <i className="icofont-star" />
            <i className="icofont-star" />
            <i className="icofont-star" />
            <i className="icofont-star" />
            <i className="icofont-star" />
          </div>
          <p className="text-blackColor dark:text-blackColor-dark leading-26px font-medium">
            ({reviews.length} Reviews)
          </p>
        </div>
        {/* progress bar */}
        <div className="lg:col-start-5 lg:col-span-8 px-15px">
          <ul className="flex flex-col gap-y-3">
          {[5, 4, 3, 2, 1].map((star) => (
          <li key={star} className="flex items-center text-blackColor dark:text-blackColor-dark">
            <div>
              <span>{star}</span>
              <span>
                <i className="icofont-star text-secondaryColor" />
              </span>
            </div>
            <div className="flex-grow relative mx-10px md:mr-10 lg:mr-10px">
              <span className="h-10px w-full bg-borderColor dark:bg-borderColor-dark rounded-full block" />
              <span
                className="absolute left-0 top-0 h-10px bg-secondaryColor rounded-full"
                style={{ width: `${getStarPercentage(star)}%` }} 
              />
            </div>
            <div>
              <span>{getReviewsCountByStars(star)}</span>
            </div>
          </li>
        ))}
          </ul>
        </div>
      </div>
      {/* client reviews */}
      <div className="mt-60px mb-10">
        <h4 className="text-lg text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-secondaryColor before:absolute before:bottom-[5px] before:left-0 leading-1.2 mb-25px">
          Customer Reviews
        </h4>
        <ul>
          {currentReviews.map((review) => (<SingleReview key={review._id} review={review} />))}
          <Pagination setPage={setPage} totalPages={totalPages} page={page} />
        </ul>
      </div>
      {/* add reviews */}
     {user && <ReviewForm setReviews={setReviews} courseId={courseId} user={user} />}
    </>
  );
}