const validator = require('validator');

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{9,11}$/;
    return phoneRegex.test(phoneNumber);
  };
module.exports = {
    validateEmail,
    validatePhoneNumber
}