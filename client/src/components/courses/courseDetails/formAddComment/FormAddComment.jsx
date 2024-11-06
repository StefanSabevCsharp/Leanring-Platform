import toast from "react-hot-toast";
import { createComment } from "../../../../dataService/commentService";
import useForm from "../../../../hooks/useForm";

export default function FormAddComment({comments, setComments, entityId, user, entityType}) {

    const submitHandler = async (comment) => {
        const { text } = comment;
        try {
            const {message, comment : newComment} = await createComment(text, entityId, user._id, entityType);
            setComments([...comments, newComment]);

        } catch (error) {
            //TODO: add error handling
            toast.error("Error creating comment");
        }
    }

    const initialValues = { text: "" };
    const [values, onChange, onSubmit] = useForm(initialValues, submitHandler, "comment");
    return (
        <div className="pt-50px">
            <h4
                className="text-size-26 font-bold text-blackColor dark:text-blackColor-dark mb-30px !leading-30px"
                data-aos="fade-up"
            >
                Write your comment
            </h4>
            <form onSubmit={onSubmit} className="pt-5" data-aos="fade-up">

                <textarea
                    name="text"
                    value={values.text}
                    onChange={onChange}
                    className="w-full p-5 mb-2 bg-transparent text-sm text-contentColor dark:text-contentColor-dark border border-borderColor2 dark:border-borderColor2-dark rounded"
                    data-aos="fade-up"
                    cols={30}
                    rows={8}
                    placeholder="Enter your comment*"
                />

                <div className="mt-30px text-center" data-aos="fade-up">
                    <button type="submit"
                        className="text-size-15 text-whiteColor bg-primaryColor px-70px py-13px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
                    >
                        Post a Comment
                    </button>
                </div>
            </form>
        </div>
    );
}