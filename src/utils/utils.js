// Utility functions

// Validate an e-mail address
// Source: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
};

export default validateEmail;