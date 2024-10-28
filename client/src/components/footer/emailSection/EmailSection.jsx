import useForm from "../../../hooks/useForm"
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

export default function EmailSection() {
    const initialValues = {
        email: ""
    }
    const submitHandler = async (email) => {
        const templateParams = {
            email,  // recipient's email
        };
    
        try {
            await emailjs.send(
                `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
                `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
                templateParams,
                `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
            );
            toast.success("Confirmation email sent!");
        } catch (error) {
            toast.error("Failed to send confirmation email.");
            console.error("EmailJS error:", error);
        }
    }
    
    const [values, onChange, onSubmit, errors] = useForm(initialValues, submitHandler, "emailForm")
    if(errors.email) {
      toast.error("Email not submitted");
    }
    return (
        <>
            <Toaster />
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-30px md:gap-y-0 items-center pb-45px border-b border-darkcolor">
                    <div data-aos="fade-up">
                        <h4 className="text-4xl md:text-size-25 lg:text-size-40 font-bold text-whiteColor leading-50px md:leading-10 lg:leading-16">
                            Still You Need Our
                            <span className="text-primaryColor">Support</span> ?
                        </h4>
                        <p className="text-whiteColor text-opacity-65">
                            Don’t wait make a smart &amp; logical quote here. Its pretty easy.
                        </p>
                    </div>
                    <div data-aos="fade-up">
                        <form onSubmit={onSubmit} className="max-w-form-xl md:max-w-form-md lg:max-w-form-lg xl:max-w-form-xl 2xl:max-w-form-2xl bg-deepgray ml-auto rounded relative">
                            <input
                                name="email"
                                value={values.email}
                                onChange={onChange}
                                type="email"
                                placeholder="Enter your email here"
                                className="text-whiteColor h-62px pl-15px focus:outline-none border border-deepgray focus:border-whitegrey bg-transparent rounded w-full"
                            />
                            <button
                                type="submit"
                                className="px-3 md:px-10px lg:px-5 bg-primaryColor hover:bg-deepgray text-xs lg:text-size-15 text-whiteColor border border-primaryColor block rounded absolute right-0 top-0 h-full"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}