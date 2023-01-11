const mongoose = require("mongoose");
const { success, error } = require("consola");


module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	/* try {
		mongoose.connect(process.env.DB, connectionParams);
		//console.log("Connected to database successfully");
		success({
			message: `Successfully connected with the Database \n`,
			badge: true
		  });
	}
	catch (error) {
		error({
			message: `Unable to connect with Database \n${error}`,
			badge: true
		  });
		console.log(error);
		console.log("Could not connect database!");
	} */
	mongoose.connect(process.env.DB, connectionParams)
	.then(()=>console.log('connected'))
	.catch(e=>console.log(e));
};
