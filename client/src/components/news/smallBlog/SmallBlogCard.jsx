import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";

export default function SmallBlogCard({ blog }) {
    return (
        <div className="group shadow-blog" data-aos="fade-up">
            {/* blog thumbnail */}
            <div className="overflow-hidden relative">
                <img
                    src={blog?.mainImageUrl}
                    alt=""
                    className="w-full group-hover:scale-110 transition-all duration-300"
                />
                <div className="text-base md:text-2xl leading-5 md:leading-30px font-semibold text-white px-15px py-5px md:px-22px md:py-7px bg-primaryColor rounded text-center absolute top-5 left-5">
                    {formatDate(blog?.createdAt)}
                </div>
            </div>
            {/* blog content */}
            <div className="px-5 py-25px">
                <h3 className="text-2xl md:text-size-28 leading-30px md:leading-35px font-bold text-blackColor hover:text-primaryColor dark:text-blackColor-dark dark:hover:text-primaryColor">
                    <Link onClick={() => window.scrollTo({top:300, behavior:"smooth"})} to={`/blog/${blog._id}`}>
                       {blog?.title}
                    </Link>
                </h3>
            </div>
        </div>
    );
}