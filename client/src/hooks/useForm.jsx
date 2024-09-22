import { useState } from "react";
import { validateLoginForm, validateRegisterForm } from "../utils/validateForm";



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
        switch (formType) {
            case "register":
                var validationErrors = validateRegisterForm(values);
                break;
            case "login":
                var validationErrors = validateLoginForm(values);
                break;
            default:
                break;
        }
       
        if(Object.keys(validationErrors).length > 0) {
            console.log("Validation errors", validationErrors);
            return setErrors(validationErrors);
        }
        setLoading(true);
        await submitHandler(values);
        setLoading(false);
        resetForm();
    };


    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    }

    return [values, onChange, onSubmit, loading, errors];

}