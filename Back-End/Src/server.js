import express from 'express';
import notesRoutes from './Routes/notesRoutes.js'
import { ConnectDb } from './Config/db.js';
import dotenv from 'dotenv'
const app = express();

dotenv.config()

ConnectDb()
app.use("/api/notes", notesRoutes)


app.listen(5001, () =>{
    console.log("Server Side is running")
})

