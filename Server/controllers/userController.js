import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from '../utils/generateToken.js'


// auth user using email and password... get token ---- api/users/login----- public
const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

   const user = await User.findOne({email})

   if(user && (await user.matchPassword(password))) {
    res.json ({
        _id:user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)

    })
   }else {
    res.status(401)
    throw new Error ('Invalid email or password')
   }

})

//get user profile-- private access
const getUserProfile = asyncHandler(async (req, res) => {

    res.send('success')

//     const { email, password } = req.body

//    const user = await User.findById({req.user._id})

//    if(user && (await user.matchPassword(password))) {
//     res.json ({
//         _id:user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         token: generateToken(user._id)

//     })
//    }else {
//     res.status(401)
//     throw new Error ('Invalid email or password')
//    }

})

export {authUser, getUserProfile}