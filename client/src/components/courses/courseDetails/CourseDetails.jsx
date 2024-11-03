import { Link, useNavigate, useParams } from "react-router-dom";
import useGetCourse from "../../../hooks/useGetCourse";
import Spinner from "../../spinner/Spinner";
import { formatDate } from "../../../utils/formatDate";
import { princeDiscount } from "../../../utils/priceDiscout";
import AuthorMoreCourses from "./authorMoreCourses/AuthorMoreCourses";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/authContext";
import { DataContext } from "../../../context/dataContext";
import Comments from "./comments/Comments";
import FormAddComment from "./formAddComment/FormAddComment";
import Reviews from "./reviews/Reviews";
import upperCase from "../../../utils/upperCase";
import toast, { Toaster } from "react-hot-toast";
import SubscribeButton from "./subscribeButton/SubscribeButton";
import DeleteButton from "./deleteButton/DeleteButton";
import EditButton from "./editButton/EditButton";
import CourseCard from "../../courseCard/CourseCard";

export default function CourseDetails() {
    const [isDeleting, setIsDeleting] = useState(false);
    const [comments, setComments] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [enrolledStudentsCount, setEnrolledStudentsCount] = useState(0);
    const [activeTab, setActiveTab] = useState(1);
    const params = useParams();
    const courseId = params._Id;
    const navigate = useNavigate();
    const [course, loading, error] = useGetCourse(courseId);
    const { user } = useContext(AuthContext);
    const { userData } = useContext(DataContext);
    useEffect(() => {
        if (course) {
            setEnrolledStudentsCount(course.enrolledStudents);
        }
    }, [course]);

    const changeEnrolledStudentsCount = (isSubscribed) => {
        if (!isSubscribed) {
            setEnrolledStudentsCount(enrolledStudentsCount + 1);
        } else {
            setEnrolledStudentsCount(enrolledStudentsCount - 1);
        }
    }
    console.log(userData)

    useEffect(() => {
        if (course && course.comments) {
            setComments(course.comments);
        }
        if (course && course.reviews) {
            setReviews(course.reviews);
        }
    }, [course]);

    const noActiveTabStyle = "is-checked relative p-10px md:px-25px md:py-15px lg:py-3 2xl:py-15px 2xl:px-45px text-blackColor bg-whiteColor hover:bg-primaryColor hover:text-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark dark:hover:bg-primaryColor dark:hover:text-whiteColor flex items-center";
    const activeTabStyle = noActiveTabStyle + " active";


    if (!loading && error) {
        navigate("/404");
    }

    if (loading) {
        return <Spinner />
    }
    if (!loading && course) {

        const { _id, courseTitle, courseImageUrl, startDate, language, aboutCourse, category, courseStatus, createdAt, creator, description, discountedPrice, freeRegularPrice, instructor, sold, updatedAt, enrolledStudents } = course;
        const createdCourses = instructor.createdCourses;
        const otherCourses = createdCourses.filter(id => id !== _id).slice(0, 3);
        const isOwner = user?._id === instructor._id;
        const isAlreadySubscribed = userData?.courses.includes(courseId);
        console.log(course)
        return (
            <>
                <Toaster />
                <section>
                    <div className="container py-10 md:py-50px lg:py-60px 2xl:py-100px">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-30px">
                            <div className="lg:col-start-1 lg:col-span-8 space-y-[35px]">

                                <div data-aos="fade-up">
                                    {/* course thumbnail */}
                                    <div className="overflow-hidden relative mb-5">
                                        <img
                                            src={courseImageUrl}
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    {/* course content */}
                                    <div>
                                        <div
                                            className="flex items-center justify-between flex-wrap gap-6 mb-30px"
                                            data-aos="fade-up"
                                        >
                                            <div className="flex items-center gap-6">
                                                <button className="text-sm text-whiteColor bg-primaryColor border border-primaryColor px-26px py-0.5 leading-23px font-semibold hover:text-primaryColor hover:bg-whiteColor rounded inline-block dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor">
                                                    Featured
                                                </button>
                                                <button className="text-sm text-whiteColor bg-secondaryColor border border-secondaryColor px-22px py-0.5 leading-23px font-semibold hover:text-secondaryColor hover:bg-whiteColor rounded inline-block dark:hover:bg-whiteColor-dark dark:hover:text-secondaryColor">
                                                    {category}
                                                </button>
                                            </div>
                                            <div>
                                                <p className="text-sm text-contentColor dark:text-contentColor-dark font-medium">
                                                    Last Update:
                                                    <span className="text-blackColor dark:text-blackColor-dark">
                                                        {formatDate(updatedAt)}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        {/* title */}
                                        <h4
                                            className="text-size-32 md:text-4xl font-bold text-blackColor dark:text-blackColor-dark mb-15px leading-43px md:leading-14.5"
                                            data-aos="fade-up"
                                        >
                                            {courseTitle}
                                        </h4>
                                        {/* price and rating */}
                                        <div
                                            className="flex gap-5 flex-wrap items-center mb-30px"
                                            data-aos="fade-up"
                                        >
                                            <div className="text-size-21 font-medium text-primaryColor font-inter leading-25px">
                                                ${discountedPrice}.00
                                                <del className="text-sm text-lightGrey4 font-semibold">
                                                    / ${freeRegularPrice}.00
                                                </del>
                                            </div>

                                            {/* <div className="text-start md:text-end">
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <i className="icofont-star text-size-15 text-yellow" />
                                        <span className="text-xs text-lightGrey6">(44)</span>
                                    </div> */}
                                        </div>
                                        <p
                                            className="text-sm md:text-lg text-contentColor dark:contentColor-dark mb-25px !leading-30px"
                                            data-aos="fade-up"
                                        >
                                            {aboutCourse}
                                        </p>
                                        {/* details */}
                                        <div>
                                            <h4
                                                className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px"
                                                data-aos="fade-up"
                                            >
                                                Course Details
                                            </h4>
                                            <div
                                                className="bg-darkdeep3 dark:bg-darkdeep3-dark mb-30px grid grid-cols-1 md:grid-cols-2"
                                                data-aos="fade-up"
                                            >
                                                <ul className="p-10px md:py-55px md:pl-50px md:pr-70px lg:py-35px lg:px-30px 2xl:py-55px 2xl:pl-50px 2xl:pr-70px border-r-2 border-borderColor dark:border-borderColor-dark space-y-[10px]">
                                                    <li>
                                                        <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                            Instructor :
                                                            <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                                {creator}
                                                            </span>
                                                        </p>
                                                    </li>
                                                    {/* <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Lectures :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        120 sub
                                                    </span>
                                                </p>
                                            </li> */}
                                                    {/* <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Duration :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        20h 41m 32s
                                                    </span>
                                                </p>
                                            </li> */}
                                                    <li>
                                                        <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                            Enrolled :
                                                            <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                                {enrolledStudentsCount}
                                                            </span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                            Discounted Price :
                                                            <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                                ${discountedPrice}
                                                            </span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                            Regular Price :
                                                            <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                                ${freeRegularPrice}
                                                            </span>
                                                        </p>
                                                    </li>
                                                    {/* <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Total :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        222 students
                                                    </span>
                                                </p>
                                            </li> */}
                                                </ul>
                                                <ul className="p-10px md:py-55px md:pl-50px md:pr-70px lg:py-35px lg:px-30px 2xl:py-55px 2xl:pl-50px 2xl:pr-70px border-r-2 border-borderColor dark:border-borderColor-dark space-y-[10px]">
                                                    {/* <li>
                                                <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                    Course level :
                                                    <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                        Intermediate
                                                    </span>
                                                </p>
                                            </li> */}
                                                    <li>
                                                        <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                            Language :
                                                            <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                                {language}
                                                            </span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                            Price Discount :
                                                            <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                                {princeDiscount(freeRegularPrice, discountedPrice)}%
                                                            </span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                            Category :
                                                            <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                                {category}
                                                            </span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className="text-contentColor2 dark:text-contentColor2-dark flex justify-between items-center">
                                                            Course Status :
                                                            <span className="text-base lg:text-sm 2xl:text-base text-blackColor dark:text-deepgreen-dark font-medium text-opacity-100">
                                                                Available
                                                            </span>
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* course tab */}
                                        <div data-aos="fade-up" className="tab course-details-tab">
                                            <div className="tab-links flex flex-wrap md:flex-nowrap mb-30px rounded gap-0.5">
                                                <button onClick={() => setActiveTab(1)} className={activeTab == 1 ? activeTabStyle : noActiveTabStyle}>
                                                    <i className="icofont-paper mr-2" /> Description
                                                </button>
                                                <button onClick={() => setActiveTab(2)} className={activeTab == 2 ? activeTabStyle : noActiveTabStyle}>
                                                    <i className="icofont-star mr-2" /> Reviews
                                                </button>
                                                <button onClick={() => setActiveTab(3)} className={activeTab == 3 ? activeTabStyle : noActiveTabStyle}>
                                                    <i className="icofont-teacher mr-2" /> Instructor
                                                </button>
                                            </div>
                                            <div className="tab-contents">
                                                {/* curriculum */}

                                                {/* description */}
                                                <div className={activeTab == 1 ? "" : "hidden"}>
                                                    <h4
                                                        className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark mb-15px !leading-14"
                                                        data-aos="fade-up"
                                                    >
                                                        {courseTitle}
                                                    </h4>
                                                    <p
                                                        className="text-lg text-darkdeep4 mb-5 !leading-30px"
                                                        data-aos="fade-up"
                                                    >
                                                        {description}
                                                    </p>

                                                    {/* <p
                                                className="text-lg text-darkdeep4 mb-5 !leading-30px"
                                                data-aos="fade-up"
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                                                viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                                                erat elit eu lacus. Vestibulum non justo consectetur, cursus
                                                ante, tincidunt sapien. Nulla quis diam sit amet turpis
                                                interdum accumsan quis nec enim. Vivamus faucibus ex sed
                                                nibh egestas elementum. Mauris et bibendum dui. Aenean
                                                consequat pulvinar luctus.
                                            </p> */}
                                                </div>
                                                {/* reviews  */}
                                                <div className={activeTab == 2 ? "" : "hidden"}>
                                                    <Reviews reviews={reviews} setReviews={setReviews} courseId={courseId} user={user} />
                                                </div>
                                                <div className={activeTab == 3 ? "" : "hidden"}>
                                                    <div
                                                        className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px flex flex-col md:flex-row shadow-autor"
                                                        data-aos="fade-up"
                                                    >
                                                        {/* athor avatar */}
                                                        <div className="flex mb-30px mr-5 flex-shrink-0">
                                                            <img
                                                                src="/assets/images/blog/blog_10.png"
                                                                alt=""
                                                                className="w-24 h-24 rounded-full"
                                                            />
                                                        </div>
                                                        <div>
                                                            {/* author name */}
                                                            <div className="mb-3">
                                                                <h3 className="mb-7px">
                                                                    <Link
                                                                        to={`/users/${instructor._id}`}
                                                                        className="text-xl font-bold text-blackColor2 dark:text-blackColor2-dark hover:text-primaryColor dark:hover:text-primaryColor"
                                                                    >
                                                                        {upperCase(instructor.firstName)} {upperCase(instructor.lastName)}
                                                                    </Link>
                                                                </h3>
                                                                <p className="text-xs text-contentColor2 dark:text-contentColor2-dark">
                                                                    {instructor.role.charAt(0).toUpperCase() + instructor.role.slice(1)}
                                                                </p>
                                                            </div>
                                                            {/* description */}
                                                            <p className="text-sm text-contentColor dark:text-contentColor-dark mb-15px leading-26px">
                                                                {instructor.bio}
                                                            </p>
                                                            {/* social */}
                                                            {/* <div>
                                                        <ul className="flex gap-10px items-center">
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                                >
                                                                    <i className="icofont-facebook" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                                >
                                                                    <i className="icofont-youtube-play" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                                >
                                                                    <i className="icofont-instagram" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="w-35px h-35px leading-35px text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                                >
                                                                    <i className="icofont-twitter" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* tag and share  */}
                                        {/* <div
                                    className="flex justify-between items-center flex-wrap py-10 mb-10 border-y border-borderColor2 dark:border-borderColor2-dark gap-y-10px"
                                    data-aos="fade-up"
                                >
                                    <div>
                                        <ul className="flex flex-wrap gap-10px">
                                            <li>
                                                <p className="text-lg md:text-size-22 leading-7 md:leading-30px text-blackColor dark:text-blackColor-dark font-bold">
                                                    Tag
                                                </p>
                                            </li>
                                            <li>
                                                <a
                                                    href="blog-details.html"
                                                    className="px-2 py-5px md:px-3 md:py-9px text-contentColor text-size-11 md:text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor rounded"
                                                >
                                                    Business
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="blog-details.html"
                                                    className="px-2 py-5px md:px-3 md:py-9px text-contentColor text-size-11 md:text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor rounded"
                                                >
                                                    DESIGN
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="blog-details.html"
                                                    className="px-2 py-5px md:px-3 md:py-9px text-contentColor text-size-11 md:text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor rounded"
                                                >
                                                    APPS
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="blog-details.html"
                                                    className="px-2 py-5px md:px-3 md:py-9px text-contentColor text-size-11 md:text-xs font-medium uppercase border border-borderColor2 hover:text-whiteColor hover:bg-primaryColor hover:border-primaryColor dark:text-contentColor-dark dark:border-borderColor2-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:hover:border-primaryColor rounded"
                                                >
                                                    DATA
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        
                                        <div>
                                            <ul className="flex gap-10px justify-center items-center">
                                                <li>
                                                    <p className="text-lg md:text-size-22 leading-7 md:leading-30px text-blackColor dark:text-blackColor-dark font-bold">
                                                        Share
                                                    </p>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="h-35px w-35px leading-35px md:w-38px md:h-38px md:leading-38px text-size-11 md:text-xs text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                    >
                                                        <i className="icofont-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="h-35px w-35px leading-35px md:w-38px md:h-38px md:leading-38px text-size-11 md:text-xs text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                    >
                                                        <i className="icofont-facebook" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="h-35px w-35px leading-35px md:w-38px md:h-38px md:leading-38px text-size-11 md:text-xs text-center border border-borderColor2 text-contentColor hover:text-whiteColor hover:bg-primaryColor dark:text-contentColor-dark dark:hover:text-whiteColor dark:hover:bg-primaryColor dark:border-borderColor2-dark rounded"
                                                    >
                                                        <i className="icofont-instagram" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                        {/* other courses */}
                                        <div className="mt-50px mb-30px" data-aos="fade-up">
                                            {/* other courses heading */}
                                            <div className="flex items-center justify-between mb-10px">
                                                <h4 className="text-3xl font-bold text-blackColor dark:text-blackColor-dark leading-1.2">
                                                    Author More Courses
                                                </h4>
                                                <Link
                                                    to={`/courses`}
                                                    className="text-contentColor dark:text-contentColor-dark"
                                                >
                                                    More Courses...
                                                </Link>
                                            </div>
                                            <div data-aos="fade-up" className="sm:-mx-15px">
                                                {/* Swiper */}
                                                <div className="swiper other-courses">
                                                    <div className="swiper-wrapper">
                                                        {/* card 1 */}
                                                        {otherCourses.map((courseId, index) => (<AuthorMoreCourses key={index} courseId={courseId} />))}
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* previous comment area */}
                                        <Comments comments={comments} />
                                        {/* write comment area */}
                                        {user && (
                                            <FormAddComment courseId={courseId} user={user} comments={comments} setComments={setComments} />)}

                                    </div>
                                </div>
                            </div>
                            {/* course sidebar */}
                            <div className="lg:col-start-9 lg:col-span-4">
                                <div className="flex flex-col">
                                    {/* enroll section */}
                                    <div
                                        className="py-33px px-25px shadow-event mb-30px bg-whiteColor dark:bg-whiteColor-dark rounded-md"
                                        data-aos="fade-up"
                                    >

                                        <div className="flex justify-between mb-5">
                                            <div className="text-size-21 font-bold text-primaryColor font-inter leading-25px">
                                                ${discountedPrice}.00
                                                <del className="text-sm text-lightGrey4 font-semibold">
                                                    / ${freeRegularPrice}.00
                                                </del>
                                            </div>
                                            <div>
                                                <a

                                                    className="uppercase text-sm font-semibold text-secondaryColor2 leading-27px px-2 bg-whitegrey1 dark:bg-whitegrey1-dark"
                                                >
                                                    {princeDiscount(freeRegularPrice, discountedPrice)}% OFF
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mb-5" data-aos="fade-up">
                                            {user && (!isOwner ? (
                                                <>
                                                    {/* <button
                type="submit"
                className="w-full text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border mb-10px leading-1.8 border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
            >
                Add to Wishlist
            </button> */}
                                                    <SubscribeButton initialIsSubscribed={isAlreadySubscribed} courseId={courseId} changeEnrolledStudentsCount={changeEnrolledStudentsCount} />

                                                    {/* <span className="text-size-13 text-contentColor dark:text-contentColor-dark leading-1.8">
                <i className="icofont-ui-rotation" /> 45-Days Money-Back Guarantee
            </span> */}
                                                </>
                                            ) : (
                                                <>
                                                    <EditButton course={course} />
                                                    <DeleteButton course={course} />
                                                </>
                                            ))}
                                        </div>

                                        <ul>
                                            <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                                <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                                    Instructor:
                                                </p>
                                                <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                                    {instructor.firstName} {instructor.lastName}
                                                </p>
                                            </li>
                                            <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                                <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                                    Start Date
                                                </p>
                                                <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                                    {startDate}
                                                </p>
                                            </li>

                                            <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                                <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                                    Enrolled
                                                </p>
                                                <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                                    {enrolledStudentsCount}
                                                </p>
                                            </li>


                                            <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                                <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                                    Category
                                                </p>
                                                <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                                    {category}
                                                </p>
                                            </li>

                                            <li className="flex items-center justify-between py-10px border-b border-borderColor dark:border-borderColor-dark">
                                                <p className="text-sm font-medium text-contentColor dark:text-contentColor-dark leading-1.8">
                                                    Certificate
                                                </p>
                                                <p className="text-xs text-contentColor dark:text-contentColor-dark px-10px py-6px bg-borderColor dark:bg-borderColor-dark rounded-full leading-13px">
                                                    Yes
                                                </p>
                                            </li>
                                        </ul>

                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        );
    }
}