import { isLength, isMobilePhone, isIn, isURL, isNumeric, matches } from "validator";
import isEmail from "validator/lib/isEmail";
import { validateImage } from "./validateImage";



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


  
    const validateStartDate = (date) => {

        const datePattern = /^(0[1-9]|[12][0-9]|3[01])[./](0[1-9]|1[0-2])[./](\d{2}|\d{4})$/;

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

const validateEmail = (values) => {
    let errors = {};
    const { email } = values;
    if (!isEmail(email)) {
        errors.email = "Invalid email";
    }
    return errors;
}

const validateContact = (values) => {
    const {name, email, message} = values;
    let errors = {};
    if(!name || !email || !message){
       errors.all = "All fields are required";
    }
    if(!isEmail(email)){
        errors.email = "Invalid email";
    }
    if(!isLength(name, {min: 3})){
        errors.name = "Name must be between 3 characters";
    }
    if(!isLength(message, {min: 10})){
        errors.message = "Message must be between 10 characters";
    }
    return errors;
}

const validateCreateBlogForm = (values) => {
    const errors = {};
    const { title, heading, mainImageUrl, secondImageUrl, additionalText } = values;

    if (!isLength(title, { min: 5, max: 35 })) {
        errors.title = "Title must be between 5 and 35 characters";
    }
    if (!isLength(heading, { min: 5, max: 40 })) {
        errors.heading = "Heading must be between 5 and 40 characters";
    }

    if (!validateImage(mainImageUrl)) {
        errors.mainImageUrl = "Invalid main image URL";
    }
    if (!validateImage(secondImageUrl)) {
        errors.secondImageUrl = "Invalid second image URL";
    }

    const paragraphs = [
        { name: "firstPartParagraph", value: values.firstPartParagraph },
        { name: "secondPartParagraph", value: values.secondPartParagraph },
        { name: "thirdPartParagraph", value: values.thirdPartParagraph },
        { name: "fourthPartParagraph", value: values.fourthPartParagraph },
        { name: "fifthPartParagraph", value: values.fifthPartParagraph },
        { name: "sixthPartParagraph", value: values.sixthPartParagraph },
        { name: "additionalText", value: additionalText }
    ];

    paragraphs.forEach(({ name, value }) => {
        if (!isLength(value, { min: 50, max: 2000 })) {
            errors[name] = `${name.replace(/([A-Z])/g, ' $1')} must be between 50 and 2000 characters`;
        }
    });

    return errors;
};


export {
    validateRegisterForm,
    validateLoginForm,
    validateProfileSettingsForm,
    validateChangePasswordForm,
    validateCreateCourseForm,
    validateCommentForm,
    validateEmail,
    validateContact,
    validateCreateBlogForm
}