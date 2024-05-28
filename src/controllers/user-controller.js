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

module.exports={
    create,
}