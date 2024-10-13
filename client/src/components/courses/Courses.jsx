import { useGetAllCourses } from "../../hooks/useGetAllCourses";
import CourseCard from "../courseCard/CourseCard";
import Spinner from "../spinner/Spinner";

export default function Courses() {
  //TODO : get latest 6 courses from the server to render them down
  const [courses, loading] = useGetAllCourses(6);

  if (loading) {
    return <Spinner />
  }

  if (!loading && courses) {
    console.log(courses);
    return (
      <section>
        <div className="pt-50px pb-10 md:pt-70px md:pb-50px lg:pt-20 2xl:pt-100px 2xl:pb-70px bg-whiteColor dark:bg-whiteColor-dark">
          <div className="filter-container container">
            <div className="flex gap-15px lg:gap-30px flex-wrap lg:flex-nowrap items-center">
              {/* courses Left */}
              <div className="basis-full lg:basis-[500px]" data-aos="fade-up">
                <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                  Course List
                </span>
                <h3
                  className="text-3xl md:text-[35px] lg:text-size-42 leading-[45px] 2xl:leading-[45px] md:leading-[50px] font-bold text-blackColor dark:text-blackColor-dark"
                  data-aos="fade-up"
                >
                  Perfect Online Course Your Carrer
                </h3>
              </div>
              {/* courses right */}
              <div className="basis-full lg:basis-[700px]">
                <ul
                  className="filter-controllers flex flex-wrap sm:flex-nowrap justify-start lg:justify-end button-group filters-button-group"
                  data-aos="fade-up"
                >
                  <li>
                    <button
                      data-filter="*"
                      className="is-checked dark:is-checked pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                    >
                      See All
                    </button>
                  </li>
                  <li>
                    <button
                      data-filter=".filter1"
                      className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                    >
                      Data science
                    </button>
                  </li>
                  <li>
                    <button
                      data-filter=".filter2"
                      className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                    >
                      Engineering
                    </button>
                  </li>
                  <li>
                    <button
                      data-filter=".filter3"
                      className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                    >
                      Featured
                    </button>
                  </li>
                  <li>
                    <button
                      data-filter=".filter4"
                      className="text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor"
                    >
                      Architecture
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* course cards */}
            <div
              className="container p-0 filter-contents flex flex-wrap sm:-mx-15px mt-7 lg:mt-10"
              data-aos="fade-up"
            >

              {courses.map((course, index) => <CourseCard key={index} courseInfo={course} />)}
             


            </div>
          </div>
        </div>
      </section>

    );
  }



}