import { useState } from "react";
import CourseComment from "../../../courseComment/CourseComment";
import Pagination from "../../../pagination/Pagination";

export default function Comments({ comments }) {
    const [page, setPage] = useState(1);

    const commentsPerPage = 5;
    const indexOfLastComment = page * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
    const totalPages = Math.ceil(comments.length / commentsPerPage);
    
    return (
        <>
        <div className="pt-50px pb-15px border-y border-borderColor2 dark:border-borderColor2-dark">
            <h4
                className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark mb-30px !leading-30px"
                data-aos="fade-up"
            >
                {comments.length == 0 ? "No Comments Yet." : `${comments.length} Comments` }
                
            </h4>
            <ul>

                {currentComments.map((comment) => (<CourseComment comment={comment} key={comment._id} />))}
            </ul>
        </div>
        {currentComments > 1 && <Pagination setPage={setPage} totalPages={totalPages} page={page}/>}
        
        </>
    );
}