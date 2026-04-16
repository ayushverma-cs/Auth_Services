const express= require('express');
const bodyParser=require('body-parser');
const {PORT}= require('./config/serverConfig');
const apiRoutes=require('./routes/index');
// const {User}= require('./models/index');
// const bcrypt = require('bcrypt');
// const  UserRepository = require('./repository/user-repository');
const UserService = require('./services/user-service');
const app = express();
const prepareAndStartServer=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(PORT,async ()=>{
        console.log(`Server is running on port ${PORT}`);
        // const repo=new UserRepository();
        // const response=await repo.getById(1);
        // console.log(response);
        // const incomingpassword="1844 ";
        // const user=await User.findByPk(3);
        // const response = bcrypt.compareSync(incomingpassword,user.password);
        // console.log(response);
        // const service= new UserService();
        // // const newToken=service.createToken({email:'ayush@admin.com',id :1}); 
        // // console.log("new token is ",newToken);
        // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5dXNoQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE3NzYzMjYwMTEsImV4cCI6MTc3NjMyOTYxMX0.N8PCvAsNMotMbIIGaNDf-DSdJoumOWqMf3iuVXq8h80'
        // const response=service.verifyToken(token);
        // console.log(response);
    });
}
    prepareAndStartServer();