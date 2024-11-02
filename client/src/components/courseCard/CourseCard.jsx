import { Link } from "react-router-dom";
import { calculateStarsToShow } from "../../utils/calculateStarsToShow";
import upperCase from "../../utils/upperCase";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import WishlistButton from "../dashboard/student/wishlist/wishlistButton/WishlistButton";

export default function CourseCard({ courseInfo }) {
  const { user } = useContext(AuthContext);
  const stars = calculateStarsToShow(courseInfo);
  
  return (
    <div className="group">
      <div className="tab-content-wrapper" data-aos="fade-up">
        <div className="p-15px bg-whiteColor shadow-brand dark:bg-darkdeep3-dark dark:shadow-brand-dark">
          {/* card image */}
          <div className="relative mb-4">
            <Link
              to={`/courses/${courseInfo?._id}`}
              className="w-full overflow-hidden rounded"
            >
              <img
                src={courseInfo?.courseImageUrl}
                alt=""
                className="w-full transition-all duration-300 group-hover:scale-110"
              />
            </Link>
            <div className="absolute left-0 top-1 flex justify-between w-full items-center px-2">
              <div>
                <p className="text-xs text-whiteColor px-4 py-[3px] bg-blue rounded font-semibold">
                  {courseInfo?.category}
                </p>
              </div>

              {user && <WishlistButton courseId={courseInfo?._id} />}
            </div>
          </div>
          {/* card content */}
          <div>
            <div className="grid grid-cols-2 mb-15px">

              <div className="flex items-center">
                <div>
                  <i className="icofont-clock-time pr-5px text-primaryColor text-lg" />
                </div>
                <div>
                  <span className="text-sm text-black dark:text-blackColor-dark">
                    Begins: {courseInfo?.startDate}
                  </span>
                </div>
              </div>
            </div>
            <Link
              to={`/courses/${courseInfo?._id}`}
              className="text-lg font-semibold text-blackColor mb-10px font-hind dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
            >
              {courseInfo?.courseTitle}
            </Link>
            {/* price */}
            <div className="text-lg font-semibold text-primaryColor font-inter mb-4">
              ${courseInfo?.discountedPrice}
              <del className="text-sm text-lightGrey4 font-semibold">
                / ${courseInfo?.freeRegularPrice}
              </del>
              {/* <span className="ml-6">
                <del className="text-base font-semibold text-greencolor">
                  Free
                </del>
              </span> */}
            </div>
            {/* author and rating*/}
            <div className="grid grid-cols-1 md:grid-cols-2 pt-15px border-t border-borderColor">
              <div>
                <Link
                  to={`/users/${courseInfo?.instructor._id}`}
                  className="text-base font-bold font-hind flex items-center hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor"
                >
                  <img
                    className="w-[30px] h-[30px] rounded-full mr-15px"
                    src="../../assets/images/grid/grid_small_2.jpg"
                    alt=""
                  />
                  {upperCase(courseInfo.creator)}
                </Link>
              </div>
              <div className="text-start md:text-end">
                {stars === 0 ? (
                  [...Array(5)].map((_, index) => (
                    <i key={index} className="icofont-star text-size-15 text-yellow" />
                  ))
                ) : (

                  [...Array(stars)].map((_, index) => (
                    <i key={index} className="icofont-star text-size-15 text-yellow" />
                  ))
                )}
                <span className="text-xs text-lightGrey6">({courseInfo?.reviews.length})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}