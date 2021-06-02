import express from 'express';
import {Router} from './build/routes/registerStaff'
import mongoose from 'mongoose'


let registerRouter = Router()
let loginRouter = require('./build/routes/staffLogin')



const app = express()


const db = mongoose.connect('mongodb://localhost:HMA', { useNewUrlParser: true, useUnifiedTopology: true  })
db.then(data => console.log('we connected'))
app.use(express.json())

app.use('/register', registerRouter)
app.use('/login', loginRouter)


app.listen(3000, ()=> console.log('we working'))