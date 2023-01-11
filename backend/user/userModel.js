const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	isEtudiant: { type: Boolean, default: false },
	picture: {type: String, default: "/avatar.png",},
	role: { type: String, default: 'Users', enum: ['Users','Instructor','Support','Admin']},
	verified: { type: Boolean, default: false },
	resetPasswordToken: String,
	resetPasswordExpire: Date,
	createdAt: {type: Date, default: Date.now}
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		role: Joi.string().label("role"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
