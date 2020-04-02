
const express = require("express")
const cors = require("cors")
const userRouter = require("./user/router")
const authRouter = require('./auth/router')
const locationRouter = require("./location/router")
const postRouter = require("./post/router")
const commentRouter = require("./comment/router")
const seedFunction = require('./seeds/usersAndLocations')

const app = express()
const corsMiddleware = cors();
const jsonParser = express.json();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// seedFunction()

app.use(corsMiddleware)
app.use(jsonParser)
app.use(userRouter)
app.use(authRouter)
app.use(locationRouter)
app.use(postRouter)
app.use(commentRouter)
