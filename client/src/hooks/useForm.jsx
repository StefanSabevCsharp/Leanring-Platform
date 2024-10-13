import { useState } from "react";
import { validateLoginForm, validateProfileSettingsForm, validateRegisterForm, validateChangePasswordForm, validateCreateCourseForm, validateCommentForm } from "../utils/validateForm";



export default function useForm(initialValues, submitHandler, formType) {

    const [values, setValues] = useState(initialValues);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

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