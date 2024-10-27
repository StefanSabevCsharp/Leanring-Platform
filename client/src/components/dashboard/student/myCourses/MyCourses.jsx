import useFetchCourses from "../../../../hooks/useFetchMyCourses";
import useGetCourse from "../../../../hooks/useGetCourse";
import CourseCard from "../../../courseCard/CourseCard";
import EnrolledCoursesCard from "./card/Card";

export default function MyCourses({ user }) {
    const [courses, loading, error] = useFetchCourses(user.courses);
    
    return (
        <div className="lg:col-start-4 lg:col-span-9">
            {/* courses area */}
            <div className="p-10px md:px-10 md:py-50px mb-30px bg-whiteColor dark:bg-whiteColor-dark shadow-accordion dark:shadow-accordion-dark rounded-5">
                {/* heading */}
                <div className="mb-6 pb-5 border-b-2 border-borderColor dark:border-borderColor-dark">
                    <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                        My Profile
                    </h2>
                </div>
                <div className="tab">
                    <div className="tab-links flex flex-wrap mb-10px lg:mb-50px rounded gap-10px">

                        <button className="is-checked relative py-10px px-5 md:py-15px lg:px-10 font-bold uppercase text-sm lg:text-base text-blackColor bg-whiteColor shadow-overview-button dark:bg-whiteColor-dark dark:text-blackColor-dark before:w-0 before:h-0.5 before:absolute before:-bottom-0.5 lg:before:bottom-0 before:left-0 before:bg-primaryColor hover:before:w-full before:transition-all before:duration-300 whitespace-nowrap active">
                            SIGNED UP COURSES
                        </button>
                    </div>
                    <div className="tab-contents">
                        <div className="transition-all duration-300">
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-30px">
                                
                                {loading ? (
                                    <p>Loading...</p>
                                ) : error ? (
                                    <p>Error loading courses: {error}</p>
                                ) : courses.length === 0 ? (
                                    <h2 className="text-2xl font-bold text-blackColor dark:text-blackColor-dark">
                                        There are no signed up courses yet
                                    </h2>
                                ) : (
                                    courses.map((course) => (
                                        <CourseCard key={course._id} courseInfo={course} />
                                    ))
                                )}
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>

    );
}