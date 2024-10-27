import { useContext } from "react";
import { createCourse } from "../../../dataService/courseService";
import useForm from "../../../hooks/useForm";
import AuthContext from "../../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function FirstForm() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    //TODO: Handle error messages and loading state 
    //TODO: When form is submitted have to change the restrictions for the date,because now it only accepts the format dd/mm/yy. have to add dd/mm/yyyy
 
    const initialValues = {
        courseTitle: "",
        courseImageUrl: "",
        startDate: "",
        language: "",
        freeRegularPrice: "",
        discountedPrice: "",
        description: "",
        category: "",
        aboutCourse: "",

    }

    const submitHandler = async (values) => {
        console.log("First Form Data", values);
        //TODO : send data to server
        const courseData = {
            ...values,
            freeRegularPrice: parseInt(values.freeRegularPrice),
            discountedPrice: parseInt(values.discountedPrice),
        }

        try {
            const {course, message} = await createCourse(courseData, user._id);
            navigate(`/courses/${course._id}`);
            
        } catch (err) {
            console.error("Error creating course", err);
        }
    };

    const [values, onChange, onSubmit, loading, errors] = useForm(initialValues, submitHandler, "firstForm");

    return (
        <div className="content-wrapper py-4 px-5">
            <div>
                <form onSubmit={onSubmit}
                    className="p-10px md:p-10 lg:p-5 2xl:p-10 bg-darkdeep3 dark:bg-transparent text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
                    data-aos="fade-up"
                >
                    <div className="grid grid-cols-1 mb-15px gap-15px">

                        <div>
                            <label className="mb-3 block font-semibold">
                                Course Title
                            </label>
                            <input
                                name="courseTitle"
                                value={values.courseTitle}
                                onChange={onChange}
                                type="text"
                                placeholder="Course Title"
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block font-semibold">
                                Course Image Url
                            </label>
                            <input
                                name="courseImageUrl"
                                value={values.courseImageUrl}
                                onChange={onChange}
                                type="text"
                                placeholder="Course Image Url"
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block font-semibold">
                                Start Date
                            </label>
                            <input
                                name="startDate"
                                value={values.startDate}
                                onChange={onChange}
                                type="text"
                                placeholder="mm/dd/yyy"
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block font-semibold">
                                Language
                            </label>
                            <input
                                name="language"
                                value={values.language}
                                onChange={onChange}
                                type="text"
                                placeholder="English"
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block font-semibold">
                                Free Regular Price ($)
                            </label>
                            <input
                                name="freeRegularPrice"
                                value={values.freeRegularPrice}
                                onChange={onChange}
                                type="number"
                                placeholder="Free Regular Price ($)"
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>

                        <div>

                            <label className="mb-3 block font-semibold">
                                Discounted Price ($)
                            </label>
                            <input
                                name="discountedPrice"
                                value={values.discountedPrice}
                                onChange={onChange}
                                type="number"
                                placeholder="Discounted Price ($)"
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                            />
                        </div>

                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
                                <div>
                                    <label className="mb-3 block font-semibold">Category</label>
                                    <div className="bg-whiteColor relative rounded-md">
                                        <select
                                            name="category"
                                            value={values.category}
                                            onChange={onChange}
                                            className="text-base bg-transparent text-blackColor2 w-full p-13px pr-30px focus:outline-none block appearance-none relative z-20 focus:shadow-select rounded-md"
                                        >

                                            <option value="Web Design">Web Design</option>
                                            <option value="Graphic">Graphic</option>
                                            <option value="English">English</option>
                                            <option value="Spoken English">Spoken English</option>
                                            <option value="Art Painting">Art Painting</option>
                                            <option value="App Development">App Development</option>
                                            <option value="Web Application">Web Application</option>
                                            <option value="Php Development">Php Development</option>
                                        </select>
                                        <i className="icofont-simple-down absolute top-1/2 right-3 -translate-y-1/2 block text-lg z-10" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <label className="mb-3 block font-semibold">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={values.description}
                                onChange={onChange}
                                placeholder="Add your course benefits here."
                                className="w-full py-10px px-5 mb-15px text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                                cols={30}
                                rows={10}

                            />

                        </div>

                        <div>
                            <label className="mb-3 block font-semibold">
                                About
                            </label>
                            <textarea
                                name="aboutCourse"
                                value={values.aboutCourse}
                                onChange={onChange}
                                placeholder="Add your course benefits here."
                                className="w-full py-10px px-5 mb-15px text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                                cols={30}
                                rows={10}
                            />

                        </div>

                    </div>

                    <div className="mt-10 leading-1.8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-30px gap-y-5">

                        {/* <button data-aos="fade-up" className="lg:col-start-1 lg:col-span-4">
                            <a

                                className="text-whiteColor bg-primaryColor w-full p-13px hover:text-whiteColor hover:bg-secondaryColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-secondaryColor text-center"
                            >
                                Preview
                            </a>
                        </button> */}

                        <button data-aos="fade-up" className="lg:col-start-5 lg:col-span-8">
                            <a

                                className="text-whiteColor bg-primaryColor w-full p-13px hover:text-whiteColor hover:bg-secondaryColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-secondaryColor text-center"
                            >
                                Create Course
                            </a>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}