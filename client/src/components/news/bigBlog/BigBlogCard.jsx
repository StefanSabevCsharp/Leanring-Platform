import { Link } from "react-router-dom";
import dataParser from "../../../utils/dataParser";
import { formatDate } from "../../../utils/formatDate";

export default function BigBlogCard( { blog } ) {
    return (
        <div
            className="lg:col-start-1 lg:col-span-8 group shadow-blog"
            data-aos="fade-up"
        >
            {/* blog thumbnail */}
            <div className="overflow-hidden relative">
                <img
                    src={blog?.mainImageUrl}
                    alt=""
                    className="w-full group-hover:scale-110 transition-all duration-300"
                />
                <div className="text-base md:text-3xl leading-5 md:leading-9 font-semibold text-white px-15px py-5px md:px-6 md:py-2 bg-primaryColor rounded text-center absolute top-5 left-5">
                   {formatDate(blog?.createdAt)}
                </div>
            </div>
            {/* blog content */}
            <div className="p-5 md:p-35px md:pt-10">
                <h3 className="text-2xl md:text-4xl leading-30px md:leading-45px font-bold text-blackColor hover:text-primaryColor pb-25px dark:text-blackColor-dark dark:hover:text-primaryColor">
                    <Link onClick={() => window.scrollTo({top:300, behavior:"smooth"})} to={`/blog/${blog._id}`}>
                      {blog?.title}
                    </Link>
                </h3>
                <p className="text-base text-contentColor dark:text-contentColor-dark mb-30px">
                   {blog?.firstPartParagraph}
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div>
                            <img
                                src="assets/images/blog/blog_2.png"
                                alt=""
                                className="w-11 h-11 rounded-full"
                            />
                        </div>
                        <div className="text-sm md:text-lg text-darkdeep5 dark:text-darkdeep5-dark">
                            By:
                            <span className="text-blackColor dark:text-blackColor-dark">
                                {blog?.creator}
                            </span>
                        </div>
                    </div>
                    {/* social */}
                   
                </div>
            </div>
        </div>
    );
}