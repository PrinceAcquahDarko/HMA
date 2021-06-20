import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import loginRouter from "./build/routes/staffLogin"
import registerRouter from './build/routes/registerStaff'
import patientRouter from './build/routes/registerPatient'
import patientDetails from './build/routes/patientDetails'



const app = express()

const db = mongoose.connect('mongodb://localhost:HMA', { useNewUrlParser: true, useUnifiedTopology: true  })
db.then(data => console.log('we connected'))
    .catch(err => console.log('could not connect to database'))

    
app.use(express.json())
app.use(cors())


app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/patient', patientRouter)
app.use('/details', patientDetails)



app.listen(3000, ()=> console.log('we working'))