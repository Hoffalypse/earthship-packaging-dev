import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController.js'

// This is the api/users route


// Post to login

router.post("/login",authUser)



export default router;