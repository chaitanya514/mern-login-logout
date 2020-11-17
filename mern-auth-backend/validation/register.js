const Validator = require("validator");
const isEmpty = require("is-empty");


module.export = function validateRegisterInput(data) {
    const errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //Name checks

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    //Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "e-mail field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "e-mail field is invalid";
    }

    //Password checks

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password = "Confirm Password field is required";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be atleast 6 characters";

    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Password must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }



}