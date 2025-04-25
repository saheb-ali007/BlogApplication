import  express from  'express'
import cors  from 'cors'
import  morgan from  'morgan'
import authRoutes from "./routes/authRoutes.js";

// App Init

const APP = express()
APP.use(express.json())
APP.use(cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
APP.disable("x-powered-by")
APP.use(morgan(process.env.NODE_ENV==='production'?'combined':'dev'))

// Routes
APP.use('/api/v1/auth',authRoutes)

// APP.use('/api/v1/admin')




export  default  APP