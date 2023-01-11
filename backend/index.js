require("dotenv").config();
const path = require('path');
const express = require("express");
const app = express();
const cors = require("cors");
const { success } = require("consola");
const connection = require("./db");
const userRoutes = require("./user/newUsersRoute");
const authRoutes = require("./user/authRoute");
const courseRoutes = require('./course/courseRoute')
const catRoutes = require('./categories/categoriesRoute')
const chapRoutes = require('./chapter/chapterRoute')
const qzRoutes = require('./qz/qzRoute')

//memory leak detected
require("./leak")

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());


global.__basedir = __dirname + "/..";
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use('/videos',express.static(path.join(__dirname, 'videos')));
app.use('/Files',express.static(path.join(__dirname,'Files')));
// routes

app.get('/',(req,res) => {
    res.send("Bonjour Voyouuuuu!!!!")
});
app.use('/api/cat',catRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/publisher',courseRoutes);
app.use('/api/chapter',chapRoutes);
app.use('/api/qz',qzRoutes);

//console.log(chapRoutes)


const port = process.env.PORT || 8080;
app.listen(port, success({message:`Listening on port ${port}...`, badge: true}));
