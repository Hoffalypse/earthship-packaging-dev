import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

// This is the api/users route


// Post to login

router.post("/login",authUser)
router.route('/profile').get(protect, getUserProfile)



export default router;