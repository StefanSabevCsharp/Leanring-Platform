import { Link } from "react-router-dom";
import dataParser from "../../../utils/dataParser";
import { formatDate } from "../../../utils/formatDate";

export default function SingleBlogCard( { blog } ) {
  return (
    <div className="group shadow-blog2" data-aos="fade-up">
          {/* blog thumbnail */}
          <div className="overflow-hidden relative">
            <img
              src={blog.mainImageUrl}
              alt=""
              className="w-full"
            />
            <div className="text-size-22 leading-6 font-semibold text-white px-15px py-5px md:px-6 md:py-2 bg-primaryColor rounded text-center absolute top-5 right-5">
             
              <h3>
                {formatDate(blog.createdAt)}
              </h3>
            </div>
          </div>
          {/* blog content */}
          <div className="pt-26px pb-5 px-30px">
            <h3 className="text-2xl md:text-size-32 lg:text-size-28 2xl:text-size-34 leading-34px md:leading-10 2xl:leading-13.5 font-bold text-blackColor2 hover:text-primaryColor dark:text-blackColor2-dark dark:hover:text-primaryColor">
              <Link to={`/blog/${blog._id}`}>
                {blog.title}
              </Link>
            </h3>
            <div className="mb-14px pb-19px border-b border-borderColor dark:border-borderColor-dark">
             
            </div>
            <p className="text-base text-contentColor dark:text-contentColor-dark mb-15px !leading-30px">
            {blog.firstPartParagraph}
            </p>
            <div className="flex justify-between items-center">
              <div>
                <Link
                  to={`/blog/${blog._id}`}
                  className="uppercase text-secondaryColor hover:text-primaryColor"
                >
                  READ MORE <i className="icofont-double-right" />
                </Link>
              </div>
             
            </div>
          </div>
        </div>
  );
}