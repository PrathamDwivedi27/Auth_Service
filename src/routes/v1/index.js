const express=require('express');

const UserController=require('../../controllers/user-controller');
const {AuthRequestValidator}=require('../../middlewares/index');

const router=express.Router();

router.post('/signup',AuthRequestValidator.validateAuthRequest,UserController.create);
router.post('/signin',AuthRequestValidator.validateAuthRequest,UserController.signIn);

router.get('/isAuthenticated',UserController.isAuthenticated);

module.exports=router;