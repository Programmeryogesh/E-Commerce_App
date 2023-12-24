const Validation = (value) => {
    let errors = {}
    const emailRegex = /^[^0-9][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!value.email) {
        errors.name = "please enter your email"
        console.log(errors.name);
    }
    else if (!emailRegex.test(value.email)) {
        errors.name = "Invalid email address"
        console.log(errors.name);
    }
    if (!value.password) {
        errors.password = "please enter your password"
        console.log(errors.password);
    }
    else if (value.password.length < 5) {
        errors.password = "password must be more than 5 char"
        console.log(errors.password);
    }
    return errors;
}

export default Validation;