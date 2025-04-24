import { compare, genSalt, hash } from "bcryptjs";
import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [2, "First name must be at least 2 characters long"],
    maxlength: [50, "First name cannot exceed 50 characters"],
    matches: [
      /^[a-zA-Z\s]*$/,
      "First name can only contain letters and spaces",
    ],
  },
  lastName: {
    types: String,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    match: [
      /^[a-z]+([.-]?[a-z]+)*@[a-z]+([.-]?[a-z]+)*(\.[a-z]{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  country: String,
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  role: {
    type: String,
    enum: ["user", "admin", "writer", "moderator"],
    default: "user",
  },
  otp: {
    type: String,
    default: null,
  },
  otpExpiry: {
    type: Date,
    default: null,
  },
  otpVerified: {
    type: Boolean,
    default: false,
  },
  otpSecret: { type: String },
  is2FAEnabled: { type: Boolean, default: false },
});
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await genSalt(10);
    this.password = hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});
UserSchema.method.comparePassword = async function (candidatePassword) {
  return await compare(candidatePassword, this.password);
};
const User = models.User || model("User", UserSchema);
export default User;
