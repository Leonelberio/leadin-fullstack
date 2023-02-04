// const nodemailer = require("nodemailer");

// module.exports = async (email, subject, text) => {
// 	try {
// 		const transporter = nodemailer.createTransport({
// 			host: process.env.HOST,
// 			service: process.env.SERVICE,
// 			port: Number(process.env.EMAIL_PORT),
// 			secure: Boolean(process.env.SECURE),
// 			auth: {
// 				user: process.env.USER,
// 				pass: process.env.PASS,
// 			},
// 		});
// 		await transporter.sendMail({
// 			from: process.env.USER,
// 			to: email,
// 			subject: subject,
// 			text: text,
// 		});
// 		console.log("email de confiramtion a ete envoyer avec success");
// 	} catch (error) {
// 		console.log("Verifiez vos informations");
// 		console.log(error);
// 		return error;
// 	}
// };



const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			host: "smtp.googlemail.com",
			//port: Number(process.env.EMAIL_PORT),
			//secure: Boolean(process.env.SECURE),
			auth: {
				user: "kkokou744@gmail.com",
				pass: "jumqcxilgdyunggr",
			},
		});
		await transporter.sendMail({
			from: "kkokou744@gmail.com",
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email de confiramtion a ete envoyer avec success");
	} catch (error) {
		console.log("Verifiez vos informations");
		console.log(error);
		return error;
	}
};
