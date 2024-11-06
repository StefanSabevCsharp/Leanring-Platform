import { Link } from "react-router-dom";
import { formatDate } from "../../../../../utils/formatDate";

export default function RecentPostCard( { blog, index } ) {
    
    return (
        <li className="flex items-center">
            <div className="w-2/5 pr-5 relative">
                <Link to={`/blog/${blog._id}`} className="w-full">
                    <img
                        src={blog.mainImageUrl}
                        alt=""
                        className="w-full"
                    />
                </Link>
                <span className="text-xs font-medium text-whiteColor h-6 w-6 leading-6 text-center bg-primaryColor absolute top-0 left-0">
                    0{index + 1}
                </span>
            </div>
            <div className="w-3/5">
                <Link
                    to={`/blog/${blog._id}`}
                    className="w-full text-sm text-contentColor font-medium leading-7 dark:text-contentColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                >
                    {formatDate(blog.createdAt)}
                </Link>
                <h3 className="font-bold leading-22px mb-15px">
                    <Link
                        className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor"
                        to={`/blog/${blog._id}`}

                    >
                        {blog.title}
                    </Link>
                </h3>
            </div>
        </li>
    );
}