import joi from 'joi'

const registerSchema = joi.object({
    firstName:joi.string().required().regex(/^[a-zA-Z\s]*$/).min(2).max(50),
    lastName:joi.string(),
    email:joi.string().email().regex( /^[a-z]+([.-]?[a-z]+)*@[a-z]+([.-]?[a-z]+)*(\.[a-z]{2,3})+$/).required(),
    password:joi.string().required().min(6),
    confirmPassword:joi.ref('password'),
    country:joi.string().default('Bangladesh'),
    role:joi.string().default('user').valid("user", "admin", "writer", "moderator"),
    bio:joi.string().max(150),
    avatar:joi.string().default(''),
    occupation:joi.string().required()
})
const loginSchema = joi.object({
    email:joi.string().email().required().regex(/^[a-z]+([.-]?[a-z]+)*@[a-z]+([.-]?[a-z]+)*(\.[a-z]{2,3})+$/),
    password:joi.string().required().min(6)
})
export {registerSchema,loginSchema}