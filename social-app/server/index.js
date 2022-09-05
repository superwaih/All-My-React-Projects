const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const connectDB = require("./db/connect")
const multer = require("multer")
const path = require("path")

dotenv.config()
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth") 
const postRoute = require("./routes/post")





//Middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/images", express.static(path.join(__dirname, "public/images")))

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/post", postRoute)

const storage = multer.discStorage({
  destination: (req, file, cb) =>{
    cb(null, "public/images")
  },
  filename: (req, file, cb) =>{
    cb(null, req.body.name)
  }
})

const upload = multer({storage})
app.post("api/upload", upload.single("file"), (req, res) =>{
  try {
    return res.status(200).json("file uploaded successfully")
  } catch (error) {
   console.log(error) 
  }
})






const port = process.env.PORT || 9000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();