import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import AuthContext from "../../../context/authContext";
import { useContext } from "react";
import { createBlog } from "../../../dataService/blogService";
import toast, { Toaster } from 'react-hot-toast';
import AbstractBanner from "../../abstractBanner/AbstractBanner";

export default function FourthForm() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const initialValues = {
        title: "",
        heading: "",
        mainImageUrl: "",
        secondImageUrl: "",
        firstPartParagraph: "",
        secondPartParagraph: "",
        thirdPartParagraph: "",
        fourthPartParagraph: "",
        fifthPartParagraph: "",
        sixthPartParagraph: "",
        additionalText: "",
    };

    const submitHandler = async (values) => {
        console.log(values);
        try {
            const { message, blog } = await createBlog(values, user._id);
            toast.success(message);
            navigate(`/blog/${blog._id}`);
        } catch (error) {
            toast.error("Error creating blog post");
        }
    };

    const [values, onChange, onSubmit] = useForm(initialValues, submitHandler, "createBlog");

    return (
        <>
            <Toaster />
            <div className="p-30px border border-borderColor dark:border-borderColor-dark">
                <div className="content-wrapper py-4 px-5">
                    <form
                        onSubmit={onSubmit}
                        className="p-10px md:p-10 lg:p-5 2xl:p-10 bg-darkdeep3 dark:bg-transparent text-sm text-blackColor dark:text-blackColor-dark leading-1.8"
                        data-aos="fade-up"
                    >
                        <div className="grid grid-cols-1 xl:grid-cols-2 mb-15px gap-y-15px gap-x-30px">
                            <div>
                                <label className="mb-3 block font-semibold">Blog Title</label>
                                <input
                                    name="title"
                                    value={values.title}
                                    onChange={onChange}
                                    type="text"
                                    placeholder="Blog Title will appear above everything."
                                    className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                />
                            </div>
                            <div>
                                <label className="mb-3 block font-semibold">Heading</label>
                                <input
                                    name="heading"
                                    value={values.heading}
                                    onChange={onChange}
                                    type="text"
                                    placeholder="Heading will appear under the first Part Paragraph."
                                    className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block font-semibold">Main Image Url</label>
                                <input
                                    name="mainImageUrl"
                                    value={values.mainImageUrl}
                                    onChange={onChange}
                                    type="url"
                                    placeholder="Enter the main image url here. Only valid image urls will be accepted."
                                    className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                />
                            </div>
                            <div>
                                <label className="mb-3 block font-semibold">Second Image Url</label>
                                <input
                                    name="secondImageUrl"
                                    value={values.secondImageUrl}
                                    onChange={onChange}
                                    type="url"
                                    placeholder="Enter the second image url here. Only valid image urls will be accepted."
                                    className="w-full py-10px px-5 text-sm focus:outline-none text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md font-no"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-30px">
                            {["firstPartParagraph", "secondPartParagraph", "thirdPartParagraph", "fourthPartParagraph", "fifthPartParagraph", "sixthPartParagraph"].map((paragraph, index) => (
                                <div key={paragraph}>
                                    <label className="mb-3 block font-semibold">{`Paragraph ${index + 1}`}</label>
                                    <textarea
                                        name={paragraph}
                                        value={values[paragraph]}
                                        onChange={onChange}
                                        className="w-full py-10px px-5 mb-15px text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                                        cols={30}
                                        rows={10}
                                        placeholder={`This is Paragraph ${index + 1}.`}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mb-15px">
                            <label className="mb-3 block font-semibold">Additional Text</label>
                            <textarea
                                name="additionalText"
                                value={values.additionalText}
                                onChange={onChange}
                                className="w-full py-10px px-5 text-sm text-contentColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border-2 border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 leading-23px rounded-md"
                                cols={30}
                                rows={10}
                                placeholder="This will appear under the last paragraph. Add any additional text here."
                            />
                        </div>

                        <div className="mt-15px">
                            <button
                                type="submit"
                                className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                            >
                                Create Blog Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
