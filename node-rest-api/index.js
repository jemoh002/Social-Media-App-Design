const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const multer = require("multer")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const conversationRoute = require("./routes/conversations")
const messageRoute = require("./routes/messages")
const path = require("path")
require("dotenv").config();
const cors = require("cors")

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "public/images")));
// This is how one can access the images thereof -- http://localhost:8800/images/person/3.jpeg

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+file.originalname)
    }
})

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json(req.file.filename)
    } catch (err) {
        console.log(err)
    }
})

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);


app.listen(8800, ()=>{
    console.log("Backend server is running!")
})