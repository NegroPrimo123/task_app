const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db/index')

const taskRouter = require('./Routes/taskRouter')
const userRouter = require('./Routes/userRouter')

const PORT = process.env.PORT || 3001

// Middleware
app.use(express.json())
app.use(cors())

app.use('/task', taskRouter)
app.use('/users', userRouter)

app.listen(PORT, () =>{
    console.log(`Hello, ${PORT}`)
})