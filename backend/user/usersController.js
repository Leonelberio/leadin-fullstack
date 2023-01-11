const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const { User, validate } = require("./userModel");
const Token = require("./tokenModel");
const Joi = require("joi");

// @desc      Get all users
// @route     GET /api/v1/auth/users
// @access    Private/Admin
const getUsers = async (res) => {
  res.status(200).json(res.advancedResults);
};

// @desc      Get single user
// @route     GET /api/v1/auth/users/:id
// @access    Private/Admin
const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user
  });
};


//Public

const register = async (req, res) =>{
  try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ errMessage: "Votre mot de passe doit contenir Au moin 6 caractere, Une lettre majiscule, une lettre miniscule, un chiffre et des caractere sperciaux" });

		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ errMessage: "L'utilisateur avec cet email donné existe déjà !" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user = await new User({ ...req.body, password: hashPassword }).save();

		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
		}).save();
		const url = `${process.env.BASE_URL}users/verify/${user._id}/${token.token}`;
		await sendEmail(user.email, "Vérifier l'email", url);
		res
			.status(201)
			.send({ message: "Un courriel a été envoyé à votre compte, veuillez vérifier" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ errMessage: "Something went wrong" });
	}
};



const verify = async(req, res) =>{
  try {
		const user = await User.findOne({ _id: req.body.id });
		if (!user) return res.status(400).send({ errMessage: "User doesn't exist" });
		
		const token = await Token.findOne({
			userId: user._id,
			token: req.body.token,
		});
		if (!token) return res.status(400).send({ errMessage: "Something went wrong" });

		await User.updateOne({_id:req.body.id}, { verified: true });
		await token.remove();
		
		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
		res.status(500).send({ errMessage: "Something went wrong" });
	}
}



const login = async(req, res) => {
  try {
		const { error } = validates(req.body);
		if (error)
			return res.status(400).send({ errMessage: "Ph" });

			const user = await User.findOne({ email: req.body.email });

		if (!user)
			return res.status(401).send({ errMessage: "Email ou mot de passe invalide" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ errMessage: "Email ou mot de passe invalide" });

	 	if (!user.verified) {
			let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString("hex"),
				}).save();
				const url = `${process.env.BASE_URL}users/verify/${user.id}/${token.token}`;
				await sendEmail(user.email, "Verify Email", url);
			}

			return res
				.status(400)
				.send({ message: "Un courriel a été envoyé à votre compte, veuillez vérifier" });
		} 

		const token = user.generateAuthToken();
		res.status(200).send({ user: {...user._doc, token}, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ errMessage: "Something went wrong" });
	}
};


const validates = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};


// @desc      Create user
// @route     POST /api/v1/auth/users
// @access    Private/Admin
const createUser = async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user
  });
};

// @desc      Update user
// @route     PUT /api/v1/auth/users/:id
// @access    Private/Admin
const updateUser = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: user
  });
};

// @desc      Delete user
// @route     DELETE /api/v1/auth/users/:id
// @access    Private/Admin
const deleteUser = async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {}
  });
};

module.exports = {
  register,
  verify,
  login,
  createUser,
  deleteUser,
  getUsers,
  getUser,
  updateUser
};