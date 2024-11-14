import UpperSection from "./upperSection/UpperSection";
import useForm from "../../hooks/useForm";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

export default function Contact() {
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

    try {
      await emailjs.send(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_CONTACT_FORM_TEMPLATE_ID}`,
        templateParams,
        `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
      );
      toast.success("Your message has been sent! I will get back to you as soon as possible. Thank you!");
    } catch (error) {
      toast.error("Failed to send confirmation email.");
      console.error("EmailJS error:", error);
    }
  };

  const [values, onChange, onSubmit] = useForm(initialValues, submitHandler, "contact");

  return (
    <>
      <Toaster />
      <UpperSection />
      <section>
        <div className="container pb-100px">
          <form
            onSubmit={onSubmit}
            id="contact-form"
            className="contact-form p-5 md:p-70px md:pt-90px border border-borderColor2 dark:border-transparent dark:shadow-container"
            data-aos="fade-up"
          >
            {/* heading */}
            <div className="mb-10">
              <h4 className="text-size-23 md:text-size-44 font-bold leading-10 md:leading-70px text-blackColor dark:text-blackColor-dark" data-aos="fade-up">
                Drop Me a Line
              </h4>
              <p data-aos="fade-up" className="text-size-13 md:text-base leading-5 md:leading-30px text-contentColor dark:text-contentColor-dark">
                Your email address will not be published. Required fields are marked *
              </p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 mb-30px gap-30px">
              <div data-aos="fade-up" className="relative">
                <input
                  name="name"
                  onChange={onChange}
                  value={values.name}
                  id="con_name"
                  type="text"
                  placeholder="Enter your name*"
                  className="w-full pl-26px bg-transparent focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor2 dark:border-borderColor2-dark placeholder:text-placeholder placeholder:opacity-80 h-15 leading-15 font-medium rounded"
                />
                <div className="text-xl leading-23px text-primaryColor absolute right-6 top-1/2 -translate-y-1/2">
                  <i className="icofont-businessman" />
                </div>
              </div>
              <div data-aos="fade-up" className="relative">
                <input
                  name="email"
                  onChange={onChange}
                  value={values.email}
                  id="con_email"
                  type="email"
                  placeholder="Enter Email Address*"
                  className="w-full pl-26px bg-transparent focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor2 dark:border-borderColor2-dark placeholder:text-placeholder placeholder:opacity-80 h-15 leading-15 font-medium rounded"
                />
                <div className="text-xl leading-23px text-primaryColor absolute right-6 top-1/2 -translate-y-1/2">
                  <i className="icofont-envelope" />
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-up">
              <textarea
                name="message"
                onChange={onChange}
                value={values.message}
                id="con_message"
                placeholder="Enter your Message here"
                className="w-full pl-26px bg-transparent text-contentColor dark:text-contentColor-dark border border-borderColor2 dark:border-borderColor2-dark placeholder:text-placeholder placeholder:opacity-80 rounded"
                cols={30}
                rows={10}
              />
              <div className="text-xl leading-23px text-primaryColor absolute right-6 top-[17px]">
                <i className="icofont-pen-alt-2" />
              </div>
            </div>
            <div className="mt-30px" data-aos="fade-up">
              <button
                value="submit"
                name="submit"
                className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
              >
                Send Email
              </button>
              <p className="form-messege" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
