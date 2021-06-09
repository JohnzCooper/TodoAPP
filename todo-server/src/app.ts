import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import path from "path"; 
import logger from './logger'

import todoRoutes from './routes'

const app: Express = express()
dotenv.config();

const PORT: string | number = process.env.PORT || 4000
const DBHOST: string = process.env.DBHOST || 'localhost'
const DBPORT: string | number = process.env.DBPORT || 27017
const DBNAME: string = process.env.DBNAME || 'todoDB'


app.use(bodyParser.json({ limit: '1mb' }));
app.use(cors())
app.use("/docs", express.static(path.join(__dirname,'../../docs')));
app.use('/api/v1/todos', todoRoutes)

const uri: string = `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            logger.info(`Server running on http://${DBHOST}:${PORT}`)
        )
    )
    .catch(error => {
        logger.error({hint: "Mongo Connection" , error: error}) 
    })