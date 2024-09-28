import { isLength, isMobilePhone } from "validator";
import isEmail from "validator/lib/isEmail";


const validateRegisterForm = (values) => {
    let errors = {};
    const { firstName, lastName, email, username, password, rePassword } = values;

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
    if (!isLength(password, { min: 5, max: 30 })) {
        errors.password = "Password must be between 6 and 30 characters";
    }
    if (password !== rePassword) {
        errors.rePassword = "Passwords do not match";
    }

    return errors;

}

const validateLoginForm = (values) => {
    let errors = {};
    const { email, password } = values;

    if (!isLength(email, { min: 3, max: 30 })) {
        errors.email = "Email must be between 3 and 30 characters";
    }
    if (!isLength(password, { min: 3, max: 30 })) {
        errors.password = "Password must be between 6 and 30 characters";
    }

    return errors;

}

const validateProfileSettingsForm = (values) => {
    console.log(values);
    let errors = {};
    const { firstName, lastName, userName, phoneNumber, bio } = values;
    if(!isLength(firstName, { min: 3, max: 30 })) {
        errors.firstName = "First name must be between 3 and 30 characters";
    }
    if(!isLength(lastName, { min: 3, max: 30 })) {
        errors.lastName = "Last name must be between 3 and 30 characters";
    }
    if(!isLength(userName, { min: 3, max: 30 })) {
        errors.userName = "Username must be between 3 and 30 characters";
    }
    if(phoneNumber != "" && !isMobilePhone(phoneNumber)) {
        errors.phoneNumber = "Invalid phone number";
    }
    if(!isLength(bio, { min: 0, max: 1000 })) {
        errors.bio = "Bio must be between 3 and 1000 characters";
    }
    return errors;

}

export {
    validateRegisterForm,
    validateLoginForm,
    validateProfileSettingsForm
}