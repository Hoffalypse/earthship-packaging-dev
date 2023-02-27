import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'


// This is the api/users route


// Post to login
router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)



export default router;