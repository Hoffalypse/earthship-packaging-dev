import express from 'express'
const router = express.Router()
import { addOrderItems } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'


// This is the api/users route


// Post to login
router.route('/').post(protect, addOrderItems)



export default router;