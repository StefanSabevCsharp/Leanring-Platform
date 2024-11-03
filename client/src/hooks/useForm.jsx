import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { validateLoginForm, validateProfileSettingsForm, validateRegisterForm, validateChangePasswordForm, validateCreateCourseForm, validateCommentForm, validateEmail, validateContact, validateCreateBlogForm } from "../utils/validateForm";



export default function useForm(initialValues, submitHandler, formType, options = { reinitializeValues: false }) {

    const [values, setValues] = useState(initialValues);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (options.reinitializeValues) {
            setValues(initialValues);
        }
    }, [initialValues, options.reinitializeValues])
    useEffect(() => {
        Object.values(errors).forEach(errorMessage => {
            if (errorMessage) {
                toast.error(errorMessage);
            }
        });
    }, [errors]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues(oldValues => ({
            ...oldValues,
            [name]: value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let validationErrors = "";
        switch (formType) {
            case "register":
                validationErrors = validateRegisterForm(values);
                break;
            case "login":
                validationErrors = validateLoginForm(values);
                break;
            case "profile":
                validationErrors = validateProfileSettingsForm(values);
                break;
            case "changePassword":
                validationErrors = validateChangePasswordForm(values);
                break;
            case "firstForm":
                validationErrors = validateCreateCourseForm(values);
                break;
            case "comment":
                validationErrors = validateCommentForm(values);
                break;
            case "emailForm":
                validationErrors = validateEmail(values);
                break;
            case "contact":
                validationErrors = validateContact(values);
                break;
            case "createBlog":
                validationErrors = validateCreateBlogForm(values);
                break;

            default:
                break;
        }
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            console.log("Validation errors", validationErrors);
            return;
        }
        setLoading(true);
        await submitHandler(values);
        setLoading(false);
        //Temporary reset form is disabled for testing purposes
        // resetForm();
    };


    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    }

    return [values, onChange, onSubmit, loading, errors];

}