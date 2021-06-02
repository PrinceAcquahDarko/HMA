import express from 'express';
import {Router} from './build/routes/registerStaff'
let router = Router()
import mongoose from 'mongoose'
const app = express()

const db = mongoose.connect('mongodb://localhost:HMA', { useNewUrlParser: true, useUnifiedTopology: true  })
db.then(data => console.log('we cook'))
app.use(express.json())

app.use('/register', router)
app.listen(3000, ()=> console.log('we working'))