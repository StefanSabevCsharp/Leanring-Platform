import CourseComment from "../../../courseComment/CourseComment";

export default function Comments({ comments }) {
    //TODO : add pagination
    return (
        <div className="pt-50px pb-15px border-y border-borderColor2 dark:border-borderColor2-dark">
            <h4
                className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark mb-30px !leading-30px"
                data-aos="fade-up"
            >
                {comments.length == 0 ? "No Comments Yet" : `${comments.length} Comments` }
                
            </h4>
            <ul>

                {comments.map((comment) => (<CourseComment comment={comment} key={comment._id} />))}
            </ul>
        </div>
    );
}