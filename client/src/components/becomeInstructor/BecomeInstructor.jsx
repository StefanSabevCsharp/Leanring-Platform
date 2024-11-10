
import AuthContext from "../../context/authContext"
import useForm from "../../hooks/useForm";
import { useContext, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { checkIsPasswordValid, updateUserToBecomeInstructor } from "../../dataService/authService";
import { useNavigate } from "react-router-dom";
import AbstractBanner from "../abstractBanner/AbstractBanner";


export default function BecomeInstructor() {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }

    const submitHandler = async ({ firstName, lastName, email, password }) => {

        if (firstName != user.firstName || lastName != user.lastName || email != user.email) {
            return toast.error("Your details do not match our records. Please try again.");
        }

        try {
            const responce = await checkIsPasswordValid(password);
            if (responce.message === "Password is valid") {
                toast.success("Updating info...");
            }
        }catch(err){
            return toast.error("Invalid password");
        }
        
        try{
            const newUserData = await updateUserToBecomeInstructor(user._id);
            if(newUserData.role === "instructor"){
                setUser(newUserData);
               toast.success("Info updated successfully");
                navigate("/dashboard");
            }
        }catch(err){
            return toast.error("Error updating info");
        }
        
        

    }

    const [values, onChange, onSubmit] = useForm(initialState, submitHandler);

    return (
        <>
            <AbstractBanner name="Become an Instructor" path="Home" page="Become an Instructor" />
            <Toaster />
            <section>
                <div className="container pt-100px pb-100px" data-aos="fade-up">
                    <h3 className="text-size-32 font-bold text-blackColor dark:text-blackColor-dark leading-1.2 pb-15px border-b border-borderColor dark:border-borderColor-dark mb-10">
                        Apply As Instructor
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
                        {/* apply left */}
                        <div data-aos="fade-up">
                            <h6 className="text-2xl font-semibold text-blackColor dark:text-blackColor-dark leading-1.8 mb-15px">
                                Become an Instructor
                            </h6>
                            <p className="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px mt-5">
                                Join our team of passionate instructors and help shape the future of learners. As an instructor, you'll have
                                the opportunity to share your knowledge, guide students, and contribute to an engaging learning environment.
                                To apply, simply confirm your personal details and agree to our instructor guidelines.
                            </p>
                            <h6 className="text-2xl font-semibold text-blackColor dark:text-blackColor-dark leading-1.8 mb-15px">
                                Instructor Rules
                            </h6>
                            <p className="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px mt-5">
                                Before applying, please review our instructor rules. These are set to ensure a productive, respectful, and
                                effective learning experience for all.
                            </p>
                            {/* rules list */}
                            <ul className="mb-30px space">
                                <li className="mt-5 flex items-center gap-5">
                                    <div className="h-25px w-25px">
                                        <img
                                            src="../../assets/images/dashbord/check__1.png"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                                        Instructors must have a solid understanding of the subjects they are teaching.
                                    </p>
                                </li>
                                <li className="mt-5 flex items-center gap-5">
                                    <div className="h-25px w-25px">
                                        <img
                                            src="../../assets/images/dashbord/check__1.png"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                                        Classes should be engaging, well-organized, and designed for student success.
                                    </p>
                                </li>
                                <li className="mt-5 flex items-center gap-5">
                                    <div className="h-25px w-25px">
                                        <img
                                            src="../../assets/images/dashbord/check__1.png"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                                        Communication with students should be timely, respectful, and encouraging.
                                    </p>
                                </li>
                                <li className="mt-5 flex items-center gap-5">
                                    <div className="h-25px w-25px">
                                        <img
                                            src="../../assets/images/dashbord/check__1.png"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                                        Follow all platform policies regarding course content and interactions.
                                    </p>
                                </li>
                                <li className="mt-5 flex items-center gap-5">
                                    <div className="h-25px w-25px">
                                        <img
                                            src="../../assets/images/dashbord/check__1.png"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                                        Maintain a high standard of professionalism in all interactions.
                                    </p>
                                </li>
                            </ul>
                            <h6 className="text-2xl font-semibold text-blackColor dark:text-blackColor-dark leading-1.8 mb-15px">
                                Start With Courses
                            </h6>
                            <p className="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px mt-5">
                                Once you’ve confirmed your details and agreed to the instructor rules, you’re ready to start creating courses!
                                Our platform supports a wide range of topics, so feel free to share your expertise with students from around the world.
                            </p>
                            {/* course steps list */}
                            <ul className="mb-30px space">
                                <li className="mt-5 flex items-center gap-5">
                                    <div className="h-25px w-25px">
                                        <img
                                            src="../../assets/images/dashbord/check__1.png"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                                        Start by creating a course outline with clear learning objectives.
                                    </p>
                                </li>
                                <li className="mt-5 flex items-center gap-5">
                                    <div className="h-25px w-25px">
                                        <img
                                            src="../../assets/images/dashbord/check__1.png"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                                        Develop engaging and informative course materials, including lectures and resources.
                                    </p>
                                </li>
                                <li className="mt-5 flex items-center gap-5">
                                    <div className="h-25px w-25px">
                                        <img
                                            src="../../assets/images/dashbord/check__1.png"
                                            alt=""
                                            className="w-full"
                                        />
                                    </div>
                                    <p className="text-contentColor dark:text-contentColor-dark leading-1.8">
                                        Review your course and make adjustments based on feedback to enhance student success.
                                    </p>
                                </li>
                            </ul>
                            <p className="text-contentColor dark:text-contentColor-dark leading-1.8 mb-15px mt-5">
                                Ready to begin? Let’s get started on creating impactful courses and growing your influence as an instructor.
                            </p>
                        </div>

                        {/* apply right*/}
                        <div data-aos="fade-up">
                            <h2 className="text-xl font-bold mb-6 text-center text-contentColor dark:text-contentColor-dark">
                                Please Confirm Your Details to Apply as an Instructor
                            </h2>
                            <form onSubmit={onSubmit}
                                className="p-10px md:p-10 lg:p-5 2xl:p-10 mb-50px bg-darkdeep3 dark:bg-darkdeep3-dark text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
                                data-aos="fade-up"
                            >
                                <div className="grid grid-cols-1 mb-15px gap-15px">
                                    <div>
                                        <label className="mb-3 block font-semibold">First Name</label>
                                        <input
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={onChange}
                                            type="text"
                                            placeholder="John"
                                            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-3 block font-semibold">Last Name</label>
                                        <input
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={onChange}
                                            type="text"
                                            placeholder="Due"
                                            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-3 block font-semibold">Email</label>
                                        <input
                                            name="email"
                                            value={values.email}
                                            onChange={onChange}
                                            type="email"
                                            placeholder="Email"
                                            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-3 block font-semibold">Password</label>
                                        <input
                                            name="password"
                                            value={values.password}
                                            onChange={onChange}
                                            type="password"
                                            placeholder="password"
                                            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                        />
                                    </div>
                                </div>
                                <div className="mt-15px">
                                    <button
                                        type="submit"
                                        className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                                    >
                                        Update Info
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}