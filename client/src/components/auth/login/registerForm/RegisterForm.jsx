import { Link, useNavigate } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../../../context/authContext";
import { Toaster, toast } from "react-hot-toast";
import { register } from "../../../../dataService/authService";
import { getErrorMessage } from "../../../../utils/errorParser";

export default function RegisterForm({ setIsLogin }) {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    let initialValues = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        rePassword: "",
    };

    const submitHandler = async (values) => {
        try{
            const newUser = await register(values);
            console.log(newUser);
            setUser(newUser);
            navigate("/dashboard");
        }catch(err){
            const errorMessage = getErrorMessage(err);
            console.log(errorMessage);
            toast.error(errorMessage);
        }
       
    }

    const [values, onChange, onSubmit, loading, errors] = useForm(initialValues, submitHandler, "register");

    return (
        <>
            <Toaster />
            <div className="block opacity-100 transition-opacity duration-150 ease-linear">
                {/* heading   */}
                <div className="text-center">
                    <h3 className="text-size-32 font-bold text-blackColor dark:text-blackColor-dark mb-2 leading-normal">
                        Register
                    </h3>
                    <p className=" text-contentColor dark:text-contentColor-dark mb-15px">
                        Already have an account?
                        <Link
                            to="/login"
                            onClick={() => setIsLogin(true)}
                            className="ml-5 hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Log In
                        </Link>
                    </p>
                </div>
                <form onSubmit={onSubmit} className="pt-25px" data-aos="fade-up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                        <div>
                            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                First Name
                            </label>

                            <input
                                name="firstName"
                                value={values.firstName}
                                onChange={onChange}
                                type="text"
                                placeholder="First Name"
                                className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                            />

                        </div>
                        <div>
                            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                Last Name
                            </label>
                            <input
                                name="lastName"
                                value={values.lastName}
                                onChange={onChange}
                                type="text"
                                placeholder="Last Name"
                                className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                        <div>
                            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                Username
                            </label>
                            <input
                                name="userName"
                                value={values.userName}
                                onChange={onChange}
                                type="text"
                                placeholder="Username"
                                className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                            />
                        </div>
                        <div>
                            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                Email
                            </label>
                            <input
                                name="email"
                                value={values.email}
                                onChange={onChange}
                                type="email"
                                placeholder="Your Email"
                                className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
                        <div>
                            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                Password
                            </label>
                            <input
                                name="password"
                                value={values.password}
                                onChange={onChange}
                                type="password"
                                placeholder="Password"
                                className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                            />
                        </div>
                        <div>
                            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                                Re-Enter Password
                            </label>
                            <input
                                name="rePassword"
                                value={values.rePassword}
                                onChange={onChange}
                                type="password"
                                placeholder="Re-Enter Password"
                                className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                            />
                        </div>
                    </div>
                    
                    <div className="mt-25px text-center">
                        <button

                            type="submit"
                            className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px w-full border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}