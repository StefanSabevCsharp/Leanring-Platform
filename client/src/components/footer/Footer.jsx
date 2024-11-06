import { Link } from "react-router-dom";
import { useGetAllCourses } from "../../hooks/useGetAllCourses";
import { formatDate } from "../../utils/formatDate";
import EmailSection from "./emailSection/EmailSection";

export default function Footer() {
  const [courses, loading, error] = useGetAllCourses(3, "all");
  return (
    <footer className="bg-darkblack">
      <div className="container pt-65px pb-5 lg:pb-10">
        {/* footer top or subscription */}
        <EmailSection />
        {/* footer main */}
        <section>
          <div className="grid grid-cols-12 gap-30px md:gap-y-5 lg:gap-y-0 pt-60px pb-50px md:pt-30px md:pb-30px lg:pt-110px lg:pb-20">
            {/* left */}
            <div
              className="col-start-1 col-span-12 md:col-span-6 lg:col-span-4 mr-30px"
              data-aos="fade-up"
            >
              <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                About Us
              </h4>
              <p className="text-base lg:text-sm 2xl:text-base text-darkgray mb-30px leading-1.8 2xl:leading-1.8">
                Dedicated to creating impactful learning experiences, our platform blends innovative design with a deep commitment to user satisfaction. We focus on crafting intuitive interfaces that make learning accessible, engaging, and fulfilling for everyone.
              </p>

            </div>

            {/* middle 1 */}
            <div
              className="col-start-1 col-span-12 md:col-start-7 lg:col-start-5 md:col-span-6 lg:col-span-2"
              data-aos="fade-up"
            >
              <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                Usefull Links
              </h4>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <Link
                    to="/"
                    onClick={() => window.scrollTo({top: 0,behavior: "smooth"})}
                    className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => window.scrollTo({top: 0,behavior: "smooth"})}
                    className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => window.scrollTo({top: 0,behavior: "smooth"})}
                    className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                  >
                    Contact Us
                  </Link>
                </li>
                {/* <li>
              <a
                href="#"
                className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
              >
                Teachers
              </a>
            </li> */}
                <li>
                  <Link
                    to="/courses"
                    onClick={() => window.scrollTo({top: 0,behavior: "smooth"})}

                    className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                  >
                    Courses
                  </Link>
                </li>

              </ul>
            </div>
            {/* middle 2 */}
            <div
              className="col-start-1 col-span-12 md:col-start-1 lg:col-start-7 md:col-span-6 lg:col-span-3 pl-0 2xl:pl-60px"
              data-aos="fade-up"
            >
              <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                Categories
              </h4>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <Link
                    to={`/courses?category=Web Design`}
                    onClick={() => window.scrollTo({top: 500,behavior: "smooth"})}
                    className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/courses?category=Web Development`}
                    onClick={() => window.scrollTo({top: 500,behavior: "smooth"})}
                    className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/courses?category=App Development`}
                    onClick={() => window.scrollTo({top: 500,behavior: "smooth"})}
                    className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/courses?category=English`}
                    onClick={() => window.scrollTo({top: 500,behavior: "smooth"})}
                    className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                  >
                    English
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/courses?category=Spanish`}
                    onClick={() => window.scrollTo({top: 500,behavior: "smooth"})}
                    className="text-darkgray relative hover:text-primaryColor after:transition-all after:duration-300 after:w-0 after:h-2px after:absolute after:bg-primaryColor hover:after:w-full after:bottom-0 after:left-0"
                  >
                    Spanish
                  </Link>
                </li>
              </ul>
            </div>
            {/* right */}
            <div
              className="col-start-1 col-span-12 md:col-start-7 lg:col-start-10 md:col-span-6 lg:col-span-3 pl-0 2xl:pl-50px"
              data-aos="fade-up"
            >
              <h4 className="text-size-22 font-bold text-whiteColor mb-3">
                Recent Courses
              </h4>
              <ul className="flex flex-col gap-y-5">
                {courses && courses.map((course) => (
                  <li key={course._id} onClick={() => window.scrollTo({top: 0 , behavior:"smooth"})}>
                    <Link className="flex items-center gap-3 group cursor-pointer"
                      to={`/courses/${course._id}`}>
                       
                      <div>
                        <img
                          src={course.courseImageUrl}
                          alt=""
                          className="w-61px h-54px"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-darkgray mb-7px">{formatDate(course.createdAt)}</p>
                        <h6 className="text-size-15 text-whiteColor font-bold group-hover:text-primaryColor transition-all duration-300">
                          {course.courseTitle}
                        </h6>
                      </div>
                    </Link>
                  </li>))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </footer>

  );
}