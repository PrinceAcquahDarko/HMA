import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import loginRouter from "./build/routes/staffLogin"
import registerRouter from './build/routes/registerStaff'
import patientRouter from './build/routes/registerPatient'
import patientDetails from './build/routes/patientDetails'
require('dotenv').config();


const app = express()
const url = process.env.URL!
const port = process.env.PORT  || 3000


const db = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  })
db.then(data => console.log('we connected'))
    .catch(err => console.log('could not connect to database'))

    
app.use(express.json())
app.use(cors())


app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/patient', patientRouter)
app.use('/details', patientDetails)



app.listen(port, ()=> console.log('we working'))