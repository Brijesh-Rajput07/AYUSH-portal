const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const database = require("./config/database");
const startupRoutes = require('./routes/startupRoutes');
const Admin = require("./routes/Admin")
const Government = require("./routes/governmentAgencies")
const Investor = require("./routes/Investor")
const PublicUser = require("./routes/PublicUser")
const Incubator = require("./routes/Incubator")
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp",
    })
)
//cloudinary connection
cloudinaryConnect();


// used to parse req.
const bodyParser = require("body-parser");
// parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

app.listen(8000, () => {
    console.log("Server Establish at 3000 Port");
});

// Routes
app.get("/", (req, res) => {
    res.send("Sender");
});

// Routes
app.use('api/vi/startups', startupRoutes);
app.use('api/vi/investors', Investor);
app.use('api/vi/public', PublicUser);
app.use('api/vi/incubators', Incubator);
app.use('api/vi/government', Government);
app.use('api/vi/admin', Admin);



app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})

