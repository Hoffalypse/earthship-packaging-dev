import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'


// This is the api/users route


// Post to login
router.route('/', registerUser).post(registerUser)
router.post("/login",authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)



export default router;