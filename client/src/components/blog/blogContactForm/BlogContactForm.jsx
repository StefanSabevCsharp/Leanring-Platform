import { useState } from "react"; // Import useState
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import useForm from "../../../hooks/useForm";

export default function BlogContactForm() {
    const [isButtonVisible, setButtonVisible] = useState(true);
    const [isSending, setSending] = useState(false);

    const initialValues = {
        name: "",
        email: "",
        message: ""
    };


    const submitHandler = async (values) => {
        const templateParams = {
            from_name: values.name,
            from_email: values.email,
            message: values.message,
        };

        setSending(true);
        setButtonVisible(true);

        try {
            await emailjs.send(
                `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
                `${import.meta.env.VITE_EMAILJS_CONTACT_FORM_TEMPLATE_ID}`,
                templateParams,
                `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
            );
            toast.success("Your message has been sent! I will get back to you as soon as possible. Thank you!");
            setButtonVisible(false);
        } catch (error) {
            toast.error("Failed to send confirmation email.");
            console.error("EmailJS error:", error);
        } finally {
            setSending(false);
        }
    };

    const [values, onChange, onSubmit] = useForm(initialValues, submitHandler, "contact");

    return (
        <>
            <Toaster />
            <div
                className="p-5 md:p-30px lg:p-5 2xl:p-30px mb-30px border border-borderColor2 dark:border-borderColor2-dark"
                data-aos="fade-up"
            >
                <h4 className="text-size-22 text-blackColor dark:text-blackColor-dark font-bold pl-2 before:w-0.5 relative before:h-[21px] before:bg-primaryColor before:absolute before:bottom-[5px] before:left-0 leading-30px mb-25px">
                    Get in Touch
                </h4>
                <form onSubmit={onSubmit} className="space-y-5">
                    <input
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        type="text"
                        placeholder="Enter Name*"
                        className="w-full text-contentColor leading-7 pb-10px bg-transparent focus:outline-none placeholder:text-placeholder placeholder:opacity-80 border-b border-borderColor2 dark:text-contentColor-dark dark:border-borderColor2-dark"
                    />
                    <input
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        type="email"
                        placeholder="Enter your mail*"
                        className="w-full text-contentColor leading-7 pb-10px bg-transparent focus:outline-none placeholder:text-placeholder placeholder:opacity-80 border-b border-borderColor2 dark:text-contentColor-dark dark:border-borderColor2-dark"
                    />
                    <input
                        name="message"
                        value={values.message}
                        onChange={onChange}
                        type="text"
                        placeholder="Message*"
                        className="w-full text-contentColor leading-7 pb-10px bg-transparent focus:outline-none placeholder:text-placeholder placeholder:opacity-80 border-b border-borderColor2 dark:text-contentColor-dark dark:border-borderColor2-dark"
                    />
                    {isButtonVisible && (
                        <button
                            type="submit"
                            disabled={isSending}
                            className={`text-size-15 text-whiteColor uppercase bg-primaryColor border border-primaryColor px-55px py-13px rounded inline-block dark:hover:bg-whiteColor-dark dark:hover:text-whiteColor ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:text-primaryColor hover:bg-whiteColor'
                                }`}
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </button>
                    )}
                </form>
            </div>
        </>
    );
}
