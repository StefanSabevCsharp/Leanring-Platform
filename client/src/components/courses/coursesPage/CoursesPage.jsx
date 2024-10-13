import { useState, useEffect } from "react";
import AbstractBanner from "../../abstractBanner/AbstractBanner";
import Spinner from "../../spinner/Spinner";
import toast, { Toaster } from 'react-hot-toast';
import { useGetAllCourses } from "../../../hooks/useGetAllCourses";
import CourseCard from "../../courseCard/CourseCard";
import CourseCardList from "../../courseCard/courseCardList/CourseCardList";
import Pagination from "../../pagination/Pagination";

export default function CoursesPage() {
    const [isActive, setIsActive] = useState(false);
    const [courses, loading, error] = useGetAllCourses(0);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(9);
    const [totalPages, setTotalPages] = useState(0);

    const indexOfLastCourse = page * perPage;
    const indexOfFirstCourse = indexOfLastCourse - perPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

    useEffect(() => {
        if (courses.length > 0) {
            setTotalPages(Math.ceil(courses.length / perPage));
        }
    }, [courses, perPage]);

    if (error) {
        toast.error(error.message);
    }

    if (courses && courses.length === 0) {
        return (
            <div className="container tab py-10 md:py-50px lg:py-60px 2xl:py-100px">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-black dark:text-blackColor-dark mb-5">
                        No courses found
                    </h2>
                    <p className="text-base text-black dark:text-blackColor-dark">
                        Please check back later
                    </p>
                </div>
            </div>
        );
    }

    if (!loading && courses.length > 0) {
        return (
            <>
                <Toaster />
                {/* Banner section */}
                <AbstractBanner name="Courses List" path="Home" page="Courses List" />

                {/* Courses section */}
                <div>
                    <div className="container tab py-10 md:py-50px lg:py-60px 2xl:py-100px">
                        {/* Courses header */}
                        <div className="courses-header flex justify-between items-center flex-wrap px-13px py-10px border border-borderColor dark:border-borderColor-dark mb-30px gap-y-5" data-aos="fade-up">
                            <div>
                                <p className="text-blackColor dark:text-blackColor-dark">
                                    Showing {indexOfFirstCourse + 1}–{Math.min(indexOfLastCourse, courses.length)} of {courses.length} Results
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="tab-links transition-all duration-300 text-contentColor dark:text-contentColor-dark flex gap-11px">
                                    <button
                                        onClick={() => setIsActive(true)}
                                        className={isActive ? "inline-block hover:text-primaryColor active" : "inline-block hover:text-primaryColor"}
                                    >
                                        <i className="icofont-layout" />
                                    </button>
                                    <button
                                        onClick={() => setIsActive(false)}
                                        className={!isActive ? "inline-block hover:text-primaryColor active" : "inline-block hover:text-primaryColor"}
                                    >
                                        <i className="icofont-listine-dots" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Courses display */}
                        <div className="tab-contents">
                            {/* Grid view */}
                            {isActive && (
                                <div className="transition-all duration-300">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-30px">
                                        {currentCourses.map(course => (
                                            <CourseCard key={course._id} courseInfo={course} />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* List view */}
                            {!isActive && (
                                <div className="transition-all duration-300">
                                    <div className="flex flex-col gap-30px">
                                        {currentCourses.map(course => (
                                            <CourseCardList key={course._id} courseInfo={course} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
                    </div>
                </div>
            </>
        );
    }

    
}
