import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import { mainRoutes } from './routes/main'

const app = express()
const routes = express.Router()

app.use(express.json())
app.use(cors())
app.use(routes)

mainRoutes(routes)

app.listen(3333)