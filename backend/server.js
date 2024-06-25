const express = require('express')
const dp = require('./config/connection')
const router = require('./Routers/routers')
const cors = require('cors')
const app = express()
const port = 8080
app.use(cors({origin: '*'}))


app.listen(port, () => {
    console.log(`Server is started and listen on port ${port}`);
})
