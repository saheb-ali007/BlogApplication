import speakeasy from "speakeasy";
import User from "../../models/User.js";
import generateOtp from "../../utils/generateOtp.js";
import generateToken from "../../utils/generateToken.js";
import twoFactorAuthOtp from "../../utils/twoFactorAuth.js";
import { loginSchema, registerSchema } from "./authValidator.js";

const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const {
    firstName,
    lastName,
    email,
    password,
    country,
    role,
    bio,
    avatar,
    occupation,
  } = req.body;
  try {
    const userCheck = await User.findOne({ email });
    if (userCheck) return res.json({ message: "User already exists" });
    const otp = generateOtp(6);
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
    const otpSecret = speakeasy.generateSecret();
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      country,
      role,
      bio,
      avatar,
      otp,
      otpExpiry,
      otpSecret: otpSecret.base32,
      occupation,
    });
    await user.save();
    // await verifyOtpSend(email, otp);
    res.status(200).json({ message: "OTP sent. Please verify your email." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error?.message });
  }
};
const login = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid email or password" });
    if (user.is2FAEnabled) {
      const otp = speakeasy.totp({
        secret: user.otpSecret,
        encoding: "base32",
      });
      // await twoFactorAuthOtp(email, otp);
      res.status(202).json({ message: "OTP sent. Please verify your 2FA." });
    } else if (user.otpVerified) {
      const token = generateToken(user);
      res.cookie("token", token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        sameSite: "strict",
      });
      res.status(200).json({
        message: "Login successful",
        token,
        role: user.role,
        userId: user._id,
      });
    } else {
      res
        .status(401)
        .json({ message: "User not verified Please verify your email" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error?.message });
  }
};
export { login, register };
