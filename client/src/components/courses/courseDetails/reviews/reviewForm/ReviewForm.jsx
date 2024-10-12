import { useEffect, useState } from "react";
import useForm from "../../../../../hooks/useForm";
import { createReview } from "../../../../../dataService/reviewService";
import toast, { Toaster } from "react-hot-toast";

export default function ReviewForm({ setReviews, courseId, user }) {
    const [stars, setStars] = useState(5);

    const initialValues = {
        text: "",
        stars,
    };


    const submitHandler = async (values) => {
        const { text } = values;
        console.log("Review submitted", { text, stars });
        if (stars === 0) {
            toast.error("Please select a rating");
            return;
        }
        if (text.length < 5) {
            toast.error("Review must be at least 5 characters long");
            return;
        }
        const dataObj = { text, stars };
        try {
            const { message, review: newReview } = await createReview(dataObj, courseId, user._id);
            setReviews(oldReviews => [...oldReviews, newReview]);
            console.log("Review created", newReview);

        } catch (error) {
            //TODO: add error handling
            console.log("Error in submit review handler", error);
        }
    };
    const [values, onChange, onSubmit, errors] = useForm(initialValues, submitHandler,);



    return (
        <>
            <Toaster />
            <div className="p-5 md:p-50px mb-50px bg-lightGrey12 dark:bg-transparent dark:shadow-brand-dark">
                <h4
                    className="text-2xl font-bold text-blackColor dark:text-blackColor-dark mb-15px !leading-1.2"
                    data-aos="fade-up"
                >
                    Add a Review
                </h4>
                <div className="flex gap-15px items-center mb-30px">
                    <h6 className="font-bold text-blackColor dark:text-blackColor-dark !leading-[19.2px]">
                        Your Ratings:
                    </h6>
                    <div className="text-secondaryColor leading-1.8">
                        <i
                            onClick={() => setStars(1)}
                            className={`icofont-star ${stars >= 1 ? "text-primaryColor" : "hover:text-primaryColor"}`}
                        />
                        <i
                            onClick={() => setStars(2)}
                            className={`icofont-star ${stars >= 2 ? "text-primaryColor" : "hover:text-primaryColor"}`}
                        />
                        <i
                            onClick={() => setStars(3)}
                            className={`icofont-star ${stars >= 3 ? "text-primaryColor" : "hover:text-primaryColor"}`}
                        />
                        <i
                            onClick={() => setStars(4)}
                            className={`icofont-star ${stars >= 4 ? "text-primaryColor" : "hover:text-primaryColor"}`}
                        />
                        <i
                            onClick={() => setStars(5)}
                            className={`icofont-star ${stars >= 5 ? "text-primaryColor" : "hover:text-primaryColor"}`}
                        />
                    </div>
                </div>
                <form onSubmit={onSubmit} className="pt-5" data-aos="fade-up">
                    <textarea
                        name="text"
                        value={values.text}
                        onChange={onChange}
                        placeholder="Type you comments...."
                        className="w-full p-5 mb-8 bg-transparent text-sm text-blackColor dark:text-contentColor-dark bg-whiteColor dark:bg-whiteColor-dark border border-transparent dark:border-borderColor2-dark placeholder:text-placeholder k"
                        cols={30}
                        rows={6}
                    />
                    <div className="mt-30px">
                        <button
                            type="submit"
                            className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}