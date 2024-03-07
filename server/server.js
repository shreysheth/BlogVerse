const express = require("express")
const connectDB = require("./config/database")
const dotenv = require("dotenv").config()

const userRoutes = require("./routes/user.routes")
const errorHandler = require("./middleware/errorHandler.middleware")
const validateUser = require("./middleware/userValidator.middleware")

connectDB()

const app = express()
const port = process.env.PORT

// json parser
app.use(express.json())

// api route for user
app.use("/blogverse/user", userRoutes)

// middlewares
app.use(errorHandler);
app.use(validateUser);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})