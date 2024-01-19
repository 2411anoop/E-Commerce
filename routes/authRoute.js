import express from 'express';
import {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController
} from '../controllers/authController.js'

// import middleware 
import { requireSignIn,isAdmin } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router();

//routing
//Register || method post
router.post('/register',registerController);

//LOGIN || post request
router.post('/login',loginController);

//Forgot Password ||POST
router.post('/forgot-password',forgotPasswordController);


//test routes
router.get('/test', requireSignIn , isAdmin , testController);// mw is inserted in bn route and controller i.e phle token check hoga fir admin check hoga

//protected user route auth
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

//protected admin route auth
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;