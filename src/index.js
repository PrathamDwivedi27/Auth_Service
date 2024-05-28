const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const {PORT}=require('./config/server-config');
const apiRoutes=require('./routes/index');

// const {User}=require('./models/index');
// const bcrypt=require('bcrypt');

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
    })
}

prepareAndStartServer();