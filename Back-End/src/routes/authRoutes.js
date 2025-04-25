import {Router} from 'express'
import {login, register} from "../controllers/auth/authController.js";
const router = Router()

router
.post('/register',register)
.post('/login',login)
// .post('/verify')
// .post('/two-factor-auth')
// .post('/resend-otp')
// .patch('/forgot-password')
// .patch('/change-password')

export default  router