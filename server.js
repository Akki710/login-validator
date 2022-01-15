const express=require('express');
const app=express();
const PORT=process.env.PORT || 5001;

app.use(express.json());

const users=[];

app.get("/users",(req,res)=>{
    res.json(users);
})


app.post("/users",(req,res)=>{
    const user={username:req.body.name, password:req.body.pass}
    if(user.username.length < 6 ){
        res.send("UserName to be between 6 to 12 Letters only!!")
    }
    else if(user.username.length > 12){
        res.send("UserName to be between 6 to 12 letters only!!")
    }
    else if(user.password.length<6){
        res.send("Password must be greater than 6 ")
    }
    else if(user.password.search(/[!@#$%^&*()]/)<0){
        res.send("Password must contain atleast 1 special character")
    }
    else if(user.password.search(/[a-zA-Z]/)<0){
        res.send("Password must have alphabets in it!")
    }
    else if(user.password.search(/[0-9]/)<0){
        res.send("Password must contain atleast 1 number in it!!")
    }
    else{
        users.push(user);
        res.status(200).send("All validation done you can login with username and password now!!");
    }



})

app.listen(PORT,()=>{
    console.log("Server running on port : ",PORT);
});