1) We have started our basic setup like npm init, body-parser, nodemon etc.
2) we have installed sequelize ,mysql2 and npm sequelize init to setup folders like migrations, seeders,models
3) In migration and model file we have used validator which checks whether the format is correct or not
4) We have made the same mvc architecture.
5) But the problem is when we create the user the password is also sent without encryption.
6) So we have used bcypt. We also made changes in model to initiate the process.
7) We have generated salt from serverconfig .
8) bcrypt internally compares the original password and hashed password you can see code in main index.js 
    // const incomingPassword='123456';
        // const user=await User.findByPk(1);
        // const response=bcrypt.compareSync(incomingPassword,user.password);
        // console.log(response);
        
9) We have made getuser by id in repo. Now we are ready for registration. When the user resister the jwt token will be generated. To generate that we have use jwt package.
10) In service layer we write bussiness logic that's why we are writing create and verifying token there.
11) We can see token is running good or not by console in index .js file 
    // const userService=new UserService();
        // const newToken=userService.createToken({email:"prathamd549@gmail.com",id:1});
        // console.log(newToken);
        // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYXRoYW1kNTQ5QGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MTY4OTUxMzEsImV4cCI6MTcxNjg5ODczMX0.1O6KXrlZrlZGOSgLu546T25nxj8CKhUHZlj_mIsIym4";
        // const response=userService.verifyToken(token);
        // console.log(response);
12) 