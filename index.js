require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 3001;
const corsOptions = require("./config/corsOptions");
const DBconnect = require("./config/dbConnection");
const registerUser = require("./Routes/registerUser");

//Database Connection
DBconnect();

//API security
app.use(helmet());

app.use(express.json());

//handle CORS error
app.use(cors(corsOptions));

//Routes
app.use('/api/register', registerUser)

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${port}`);
});