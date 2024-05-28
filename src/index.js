const express=require('express');
const app=express();
const {PORT}=require('./config/server-config');

const prepareAndStartServer=()=>{

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}

prepareAndStartServer();