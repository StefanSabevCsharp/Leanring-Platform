import { useContext, useEffect } from "react";
import AuthContext from "../../../../../context/authContext";
import useForm from "../../../../../hooks/useForm";
import toast, { Toaster } from "react-hot-toast";
import { updateUserProfile } from "../../../../../dataService/authService";
import { useNavigate } from "react-router-dom";


export default function ProfileSettings() {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const initialValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        phoneNumber: user?.phoneNumber || "",
        bio: user?.bio || "",
    };
    const submitHandler = async (values) => {

        //todo: Sanitize the data before sending to the server
        const response = await updateUserProfile(values);
        if (response) {
            setUser(response);
            toast.success("Profile updated successfully");
            navigate("/dashboard");
        }else{
            toast.error("Failed to update profile");
        }


    };

    const [values, onChange, onSubmit, loading, errors] = useForm(initialValues, submitHandler, "profile");

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const errorMsg = Object.values(errors).join(", ");
            toast.error(errorMsg || "Validation errors occurred.");
        }
    }, [errors]);

    return (
        <>
            <Toaster />
            <div className="transition-all duration-300">
                <form onSubmit={onSubmit}
                    className="text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
                    data-aos="fade-up"
                >
                    <div className="grid grid-cols-1 xl:grid-cols-2 mb-15px gap-y-15px gap-x-30px">
                        <div>
                            <label className="mb-3 block font-semibold">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={onChange}
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block font-semibold">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={onChange}
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block font-semibold">User Name</label>
                            <input
                                type="text"
                                name="userName"
                                value={values.userName}
                                onChange={onChange}
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block font-semibold">Phone Number</label>
                            <input
                                type="string"
                                name="phoneNumber"
                                placeholder="+1-202-555-0174"
                                value={values.phoneNumber}
                                onChange={onChange}
                                className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                            />
                        </div>
                    </div>
                    <div className="mb-15px">
                        <label className="mb-3 block font-semibold">Bio</label>
                        <textarea
                            name="bio"
                            value={values.bio}
                            onChange={onChange}
                            className="w-full py-10px px-5 text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                            cols={30}
                            rows={10}
                            placeholder="Write something about yourself"
                        />
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
        </>
    );
}