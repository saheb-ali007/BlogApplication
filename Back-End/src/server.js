import  APP from './app.js'
import {configDotenv} from  "dotenv"
import connectDB from "./config/database.config.js";
configDotenv()
const PORT = process.env._PORT || 5000
connectDB().then(()=>{
    APP.listen(PORT,()=>{
        console.log(`🚀 Server is running on port ${PORT}`)
    })
})
