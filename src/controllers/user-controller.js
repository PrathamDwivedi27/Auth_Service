const UserService=require('../services/user-service');

const userService=new UserService();

const create=async (req,res)=>{
    try {
        const user=await userService.create({
            email:req.body.email,
            password:req.body.password 
        });
        return res.status(201).json({
            message:"User created successfully",
            data:user,
            success:true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Something wrong at controller level",
            data:{},
            success:false,
            err:error
        })
    }
}

const signIn=async (req,res)=>{
    try {
        const token=await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            message:"User signed in successfully",
            data:{token},   
            success:true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Something went wrong in sign in",
            data:{},
            success:false,
            err:error
        })
    }
}

const isAuthenticated=async (req,res)=>{
    try {
        const token=req.headers['x-access-token'];      //hum headers mein token pass karenge
        const response=await userService.isAuthenticated(token);
        return res.status(200).json({
            message:"User is authenticated",
            data:response,
            success:true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Something went wrong in authentication",
            data:{},
            success:false,
            err:error
        })
    }
}

module.exports={
    create,
    signIn,
    isAuthenticated
}