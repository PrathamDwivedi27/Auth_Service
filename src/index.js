const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const {PORT}=require('./config/server-config');
const apiRoutes=require('./routes/index');

// const {User}=require('./models/index');
// const bcrypt=require('bcrypt');
const UserService=require('./services/user-service');

const prepareAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`Server is running on port ${PORT}`);
        // const incomingPassword='123456';
        // const user=await User.findByPk(1);
        // const response=bcrypt.compareSync(incomingPassword,user.password);
        // console.log(response);

        const userService=new UserService();
        const newToken=userService.createToken({email:"prathamd549@gmail.com",id:1});
        console.log(newToken);
        const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXRoYW1kNTQ5QGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MTY4OTUxMzEsImV4cCI6MTcxNjg5ODczMX0.1O6KXrlZrlZGOSgLu546T25nxj8CKhUHZlj_mIsIym4";
        const response=userService.verifyToken(token);
        console.log(response);
    })
}

prepareAndStartServer();