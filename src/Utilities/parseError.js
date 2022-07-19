module.exports = (data) => {
	const errors = data.errors;
	let cleanedError = [];
	try {
		errors.forEach((element) => {
			cleanedError.push({
				message: element.message,
				type: element.type,
				path: element.path,
			});
		});
	} finally {
		return cleanedError;
	}
};
