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
}

module.exports=UserService;