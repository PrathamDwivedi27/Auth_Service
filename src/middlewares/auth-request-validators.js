const validateAuthRequest = (req, res, next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data:{},
            message:"Email and password are required",
            success:false
        })
    }   
    next();
}

module.exports={
    validateAuthRequest
}