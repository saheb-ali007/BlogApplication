import  express from  'express'
import cors  from 'cors'
import  morgan from  'morgan'

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




export  default  APP