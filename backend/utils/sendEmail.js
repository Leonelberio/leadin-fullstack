const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			host: "smtp.googlemail.com",
			//port: Number(process.env.EMAIL_PORT),
			//secure: Boolean(process.env.SECURE),
			auth: {
				user: "leadin63@gmail.com",
				pass: "kzbgubylfwngvygv",
			},
		});
		await transporter.sendMail({
			from: "leadin63@gmail.com",
			to: email,
			subject: subject,
			text: text,
		});
		console.log("Email de confirmation a ete envoyer dans votre boite mail. Veuillez cliquer sur le lien pour activer votre      compte");
	} catch (error) {
		console.log("Verifiez vos informations");
		console.log(error);
		return error;
	}
};