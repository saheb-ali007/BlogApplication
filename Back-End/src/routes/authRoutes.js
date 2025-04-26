import {Router} from 'express'
import {
    changePassword,
    forgotPassword,
    login,
    register,
    resendOtp,
    resetPasswordLink,
    verifyOtp
} from "../controllers/auth/authController.js";
import twoFactorAuthOtp from "../utils/twoFactorAuth.js";
const router = Router()

router
.post('/register',register)
.post('/login',login)
.post('/verify',verifyOtp)
.post('/two-factor-auth',twoFactorAuthOtp)
.post('/resend-otp',resendOtp)
.post('/reset-password-link',resetPasswordLink)
    .patch('/forgot-password',forgotPassword)
.patch('/change-password',changePassword)

export default  router