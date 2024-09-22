import { isLength } from "validator";
import isEmail from "validator/lib/isEmail";


const validateRegisterForm = (values) => {
    let errors = {};
    const {firstName, lastName, email, username, password, rePassword} = values;

    if (!isLength(firstName, { min: 3, max: 30 })) {
        errors.firstName = "First name must be between 3 and 30 characters";
    }
    if (!isLength(lastName, { min: 3, max: 30 })) {
        errors.lastName = "Last name must be between 3 and 30 characters";
    }
    if (!isLength(username, { min: 3, max: 30 })) {
        errors.username = "Username must be between 3 and 30 characters";
    }
    if (!isEmail(email)) {
        errors.email = "Invalid email";
    }
    if (!isLength(password, { min: 6, max: 30 })) {
        errors.password = "Password must be between 6 and 30 characters";
    }
    if (password !== rePassword) {
        errors.rePassword = "Passwords do not match";
    }

    return errors;

}

const validateLoginForm = (values) => {
    let errors = {};
    const {username, password} = values;

    if (!isLength(username, { min: 3, max: 30 })) {
        errors.username = "Username must be between 3 and 30 characters";
    }
    if (!isLength(password, { min: 6, max: 30 })) {
        errors.password = "Password must be between 6 and 30 characters";
    }

    return errors;

}

export {
    validateRegisterForm,
    validateLoginForm
}