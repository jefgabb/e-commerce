import express from 'express'
import {placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus, verifyStripe} from '../controller/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import userAuth from '../middleware/auth.js';
const orderRouter = express.Router();

// admin
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// fitur payment
orderRouter.post('/place', userAuth, placeOrder);
orderRouter.post('/stripe', userAuth, placeOrderStripe);
orderRouter.post('/razorpay', userAuth, placeOrderRazorpay);

//user
orderRouter.post('/userorders', userAuth, userOrders);

//Verify payment
orderRouter.post('/verifyStripe', userAuth, verifyStripe);

export default orderRouter;