const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			host: "smtp.googlemail.com",
			//port: Number(process.env.EMAIL_PORT),
			//secure: Boolean(process.env.SECURE),
			auth: {
				user: "leadin32@gmail.com",
				pass: "ixeirpajeaxatngo",
			},
		});
		await transporter.sendMail({
			from: "leadin32@gmail.com",
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
