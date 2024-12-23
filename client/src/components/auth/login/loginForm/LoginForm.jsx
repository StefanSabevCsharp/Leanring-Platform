import { Link, useNavigate } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import { login } from "../../../../dataService/authService";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import AuthContext from "../../../../context/authContext";

export default function LoginForm({ setIsLogin }) {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();


    let initialValues = {
        email: "",
        password: "",
    };


    const submitHandler = async (values) => {
        try {
            const newUser = await login(values);
          
            setUser(newUser);
            navigate("/dashboard");
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (err) {
            // toast.error(err.message);
            toast.error("Invalid email or password");
        }
    }

    const [values, onChange, onSubmit, loading, errors] = useForm(initialValues, submitHandler, "login");

    return (
        <>
        <Toaster />
            <div className="block opacity-100 transition-opacity duration-150 ease-linear">
                {/* heading   */}
                <div className="text-center">
                    <h3 className="text-size-32 font-bold text-blackColor dark:text-blackColor-dark mb-2 leading-normal">
                        Login
                    </h3>
                    <p className="text-contentColor dark:text-contentColor-dark mb-15px">
                        Don't have an account yet?
                        <Link
                            to="/login"
                            onClick={() => setIsLogin(false)}
                            className="ml-5 hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Sign up for free
                        </Link>
                    </p>
                </div>
                <form onSubmit={onSubmit} className="pt-25px" data-aos="fade-up">
                    <div className="mb-25px">
                        <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                            Email
                        </label>
                        <input
                            name="email"
                            value={values.email}
                            onChange={onChange}
                            type="text"
                            placeholder="Your email"
                            className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                    </div>
                    <div className="mb-25px">
                        <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
                            Password
                        </label>
                        <input
                            name="password"
                            value={values.password}
                            onChange={onChange}
                            type="password"
                            placeholder=" Password"
                            autoComplete="off"
                            className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
                        />
                    </div>
                    
                    <div className="my-25px text-center">
                        <button
                            type="submit"
                            className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px w-full border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                        >
                            Log in
                        </button>
                    </div>
                    {/* other login */}
                    {/* <div>
            <p className="text-contentColor dark:text-contentColor-dark text-center relative mb-15px before:w-2/5 before:h-1px before:bg-borderColor4 dark:before:bg-borderColor2-dark before:absolute before:left-0 before:top-4 after:w-2/5 after:h-1px after:bg-borderColor4 dark:after:bg-borderColor2-dark after:absolute after:right-0 after:top-4">
                or Log-in with
            </p>
        </div>
        <div className="text-center flex gap-x-1 md:gap-x-15px lg:gap-x-25px gap-y-5 items-center justify-center flex-wrap">
            <button
                type="submit"
                className="text-size-15 text-whiteColor bg-primaryColor px-11 py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
            >
                <i className="icofont-facebook" /> Facebook
            </button>
            <button
                type="submit"
                className="text-size-15 text-whiteColor bg-primaryColor px-11 py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
            >
                <i className="icofont-google-plus" /> Google
            </button>
        </div> */}
                </form>
            </div>
        </>
    );
}