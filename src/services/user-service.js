const jwt=require('jsonwebtoken');
const {JWT_KEY}=require('../config/server-config');
const bcrypt=require('bcrypt');

const UserRepository=require('../repository/user-repository');

class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async create(data){
        try {
            const user=this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something wrong at service level");
            throw error;
        }
    }

    async destroy(userId){
        try {
            const user=this.userRepository.destroy(userId);
            return user;
        } catch (error) {
            console.log("Something wrong at service level");
            throw error;
        }
    }

    async signIn(email,plainPassword){
        try {
            //step 1-> get user by email
            const user=await this.userRepository.getByEmail(email);
            //step 2-> compare password
            const comparePassword=await this.checkPassword(plainPassword,user.password);
            if(!comparePassword){
                console.log("Password is not correct");
                throw {error:"Password doesn't match"};
            }

            //step 3-> create token
            const  newJWT=this.createToken({email:user.email,id:user.id});
            return newJWT;

        } catch (error) {
            console.log("Something went wrong in sign in",error);
            throw error;
        }
    }

    createToken(user){              //we are passing user object to create token
        try {
            const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response=jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation",error);
            throw error;
        }
    }

    checkPassword(userInputPassword,encryptedPassword){
        try {
            const response=bcrypt.compare(userInputPassword,encryptedPassword);
            return response;
        } catch (error) {
            console.log("Something went wrong in password comparison",error);
            throw error;
        }
    }
    
}

module.exports=UserService;