const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,20}$/;
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const dateOnlyRegExp = /^\d{4}-(0[1-9]|1[1-2])-(0[1-9]|[12][0-9]|3[01])$/;

const validatePassword = (password) => {
	return passwordRegExp.test(password) ? true : false;
};

const validateEmail = (email) => {
	return emailRegExp.test(email) ? true : false;
};

const validateDate = (date) => {
	return dateOnlyRegExp.test(date) ? true : false;
};

const validateSexe = (sexe) => {
	return (sexe==="Homme"||sexe==="Femme") ? true : false;
};
module.exports = {
	validateEmail,
		validateDate,
		validatePassword,
		validateSexe
	};
	