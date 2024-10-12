import { isLength, isMobilePhone, isIn, isURL, isNumeric, matches } from "validator";
import isEmail from "validator/lib/isEmail";



const validateRegisterForm = (values) => {
    console.log(values);
    let errors = {};
    const { firstName, lastName, email, userName, password, rePassword } = values;

    if (!isLength(firstName, { min: 3, max: 30 })) {
        errors.firstName = "First name must be between 3 and 30 characters";
    }
    if (!isLength(lastName, { min: 3, max: 30 })) {
        errors.lastName = "Last name must be between 3 and 30 characters";
    }
    if (!isLength(userName, { min: 3, max: 30 })) {
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
    if (!isLength(firstName, { min: 3, max: 30 })) {
        errors.firstName = "First name must be between 3 and 30 characters";
    }
    if (!isLength(lastName, { min: 3, max: 30 })) {
        errors.lastName = "Last name must be between 3 and 30 characters";
    }
    if (!isLength(userName, { min: 3, max: 30 })) {
        errors.userName = "Username must be between 3 and 30 characters";
    }
    if (phoneNumber != "" && !isMobilePhone(phoneNumber)) {
        errors.phoneNumber = "Invalid phone number";
    }
    if (!isLength(bio, { min: 0, max: 1000 })) {
        errors.bio = "Bio must be between 3 and 1000 characters";
    }
    return errors;

}
const validateChangePasswordForm = async (values) => {

    const { currentPassword, newPassword, retypePassword, _id } = values;
    let errors = {};

    if (!currentPassword) {
        errors.currentPassword = "Current password is required";
    }
    if (!newPassword) {
        errors.newPassword = "New password is required";
    } else if (newPassword.length < 5) {
        errors.newPassword = "New password must be at least 5 characters";
    }
    if (newPassword !== retypePassword) {
        errors.retypePassword = "Passwords do not match";
    }

    return errors;
}

const validateCreateCourseForm = (values) => {

    //TODO: ADD more strict validations !!!

    const { aboutCourse, category, courseImageUrl, courseTitle, description, discountedPrice, freeRegularPrice, language, startDate } = values;
    const allowedCategories = [
        "Web Design",
        "Graphic",
        "English",
        "Spoken English",
        "Art Painting",
        "App Development",
        "Web Application",
        "Php Development",

    ];


    const validateImage = (url) => {
        const validImageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp'];

        if (isURL(url) && validImageExtensions.some(ext => url.toLowerCase().endsWith(ext))) {
            return true;
        }
        return false;
    }
    const validateStartDate = (date) => {

        const datePattern = /^(0[1-9]|[12][0-9]|3[01])[./](0[1-9]|1[0-2])[./]\d{2}$/;

        return matches(date, datePattern);
    };

    let errors = {};
    if (!isLength(courseTitle, { min: 3, max: 100 })) {
        errors.courseTitle = "Course title must be between 3 and 100 characters";
    }
    if (!isLength(aboutCourse, { min: 10, max: 1000 })) {
        errors.aboutCourse = "About course must be between 3 and 100 characters";
    }
    if (!isLength(description, { min: 10, max: 1000 })) {
        errors.description = "Description must be between 3 and 100 characters";
    }
    if (!isLength(language, { min: 3, max: 30 })) {
        errors.language = "Language must be between 3 and 30 characters";
    }
    if (!isIn(category, allowedCategories)) {
        errors.category = "Invalid category";
    }

    if (!validateImage(courseImageUrl)) {
        errors.courseImageUrl = "Invalid image url";
    }
    const parsedDiscountedPrice = parseFloat(discountedPrice);
    const parsedFreeRegularPrice = parseFloat(freeRegularPrice);

    if (!validateStartDate(startDate)) {
        errors.startDate = "Invalid date format. Please use dd.mm.yy or dd/mm/yy.";
    }
    if (isNaN(parsedDiscountedPrice) || parsedDiscountedPrice < 0) {
        errors.discountedPrice = "Invalid discounted price";
    }
    if (isNaN(parsedFreeRegularPrice) || parsedFreeRegularPrice < 0) {
        errors.freeRegularPrice = "Invalid regular price";
    }
    if (parsedFreeRegularPrice < parsedDiscountedPrice) {
        errors.discountedPrice = "Discounted price must be less than regular price";
    }
    return errors;

}

const validateCommentForm = (values) => {
    let errors = {};
    const { text } = values;

    if (!isLength(text, { min: 2, max: 1000 })) {
        errors.text = "Text must be between 2 and 1000 characters";
    }
    return errors;

}


export {
    validateRegisterForm,
    validateLoginForm,
    validateProfileSettingsForm,
    validateChangePasswordForm,
    validateCreateCourseForm,
    validateCommentForm
}