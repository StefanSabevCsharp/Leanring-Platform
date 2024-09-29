import { useContext } from "react";
import useForm  from "../../../../../hooks/useForm";
import AuthContext from "../../../../../context/authContext";
import { updateUserPassword } from "../../../../../dataService/authService";
import { useNavigate } from "react-router-dom";

export default function Password() {
    const { user , setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const initialValues = {
        currentPassword: '',
        newPassword: '',
        retypePassword: '',
        _id: user._id
    }

    const submitHandler = async (values) => {
        const response = await updateUserPassword(values);
        setUser(response);
        navigate('/dashboard');
    }

    const [ values, onChange, onSubmit ] = useForm(initialValues, submitHandler, "changePassword");
    return (
        <div className="transition-all duration-300">
            <form onSubmit={onSubmit}
                className="text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
                data-aos="fade-up"
            >
                <div className="grid grid-cols-1 mb-15px gap-y-15px gap-x-30px">
                    <div>
                        <label className="mb-3 block font-semibold">
                            Current Password
                        </label>
                        <input
                            name="currentPassword"
                            value={values.currentPassword}
                            onChange={onChange}
                            type="password"
                            placeholder="Current password"
                            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                        />
                    </div>
                    <div>
                        <label className="mb-3 block font-semibold">New Password</label>
                        <input
                            name="newPassword"
                            value={values.newPassword}
                            onChange={onChange}
                            type="password"
                            placeholder="New Password"
                            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                        />
                    </div>
                    <div>
                        <label className="mb-3 block font-semibold">
                            Re-Type New Password
                        </label>
                        <input
                            name="retypePassword"
                            value={values.retypePassword}
                            onChange={onChange}
                            type="password"
                            placeholder="Re-Type New Password"
                            className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                        />
                    </div>
                </div>
                <div className="mt-15px">
                    <button
                        type="submit"
                        className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                    >
                        Update Password
                    </button>
                </div>
            </form>
        </div>
    );
}