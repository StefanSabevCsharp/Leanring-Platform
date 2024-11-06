import { useParams } from "react-router-dom";
import AbstractBanner from "../../abstractBanner/AbstractBanner";
import BlogSidebar from "./blogSidebar/BlogSidebar";
import useGetBlogDetails from "../../../hooks/useGetBlogDetails";
import Comments from "../../courses/courseDetails/comments/Comments";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/authContext";
import FormAddComment from "../../courses/courseDetails/formAddComment/FormAddComment";
import useGetBlogs from "../../../hooks/useGetBlogs";

export default function BlogDetails() {
    const { user } = useContext(AuthContext);
    const { _Id } = useParams();
    const [comments, setComments] = useState([]);
    const [blogs] = useGetBlogs(4);
    console.log(blogs);
    

    const [blog, loading, error] = useGetBlogDetails(_Id);

    useEffect(() => {
        if (blog && blog.comments) {
            setComments(blog.comments);
        }
    }, [blog]);

    if (blog && !loading && blogs) {

        return (
            <>
                <AbstractBanner name="Blog Details" path="Home" page="Blog Details" />
                <section>
                    <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
                            <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">
                                <div data-aos="fade-up">
                                    <div className="overflow-hidden relative mb-30px">
                                        <img
                                            src={blog.mainImageUrl}
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <h1
                                            className="text-size-40 font-bold text-blackColor dark:text-blackColor-dark mb-15px !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            {blog.title}
                                        </h1>
                                        <p
                                            className="text-lg text-darkdeep4 mb-5 !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            {blog.firstPartParagraph}
                                        </p>
                                        <p
                                            className="text-lg text-darkdeep4 mb-5 !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            {blog.secondPartParagraph}
                                        </p>
                                        <h4
                                            className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark mb-15px !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            {blog.heading}
                                        </h4>
                                        <p
                                            className="text-lg text-darkdeep4 mb-5 !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            {blog.thirdPartParagraph}
                                        </p>
                                        <p
                                            className="text-lg text-darkdeep4 mb-5 !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            {blog.fourthPartParagraph}
                                        </p>
                                        <div className="overflow-hidden relative mb-30px">
                                            <img
                                                src={blog.secondImageUrl}
                                                alt=""
                                                className="w-full"
                                            />
                                        </div>
                                        <p
                                            className="text-lg text-darkdeep4 mb-35px !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            {blog.fifthPartParagraph}
                                        </p>
                                        <p
                                            className="text-lg text-darkdeep4 mb-35px !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            {blog.sixthPartParagraph}
                                        </p>
                                        <h4
                                            className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark mb-15px !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            Additional Information
                                        </h4>
                                        <p
                                            className="text-lg text-darkdeep4 mb-30px !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            {blog.additionalText}
                                        </p>

                                        <Comments comments={comments} />
                                        {user && <FormAddComment comments={comments} setComments={setComments} entityId={_Id} user={user} entityType={"blog"} />}
                                    </div>
                                </div>
                            </div>
                            <BlogSidebar blogs={blogs} />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

