import {Router} from 'express'
import { login, register, resetPasswordLink} from "../controllers/auth/authController.js";
const router = Router()

router
.post('/register',register)
.post('/login',login)
// .post('/verify')
// .post('/two-factor-auth')
// .post('/resend-otp')
.post('/reset-password-link',resetPasswordLink)
// .patch('/change-password')

export default  router