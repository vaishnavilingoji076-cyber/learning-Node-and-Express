const express=require("express");

const app=express();

const PORT=3000;

//middleware

app.use(express.json());

//temporary database

let users=[
    {id:1, name:"vaishnav",age:23},
    {id:2, name:"bob", age:21}
];

//getting all users

app.get("/api/users",(req,res)=>{
    res.status(200).json(users);
});

//getting one users
app.get("/api/users/:id",(req,res)=>{
    const userId=number(req.params.id);

    const user=users.find((user)=>user.id===userId);

    if(!user){
        return res.status(404).json({
            message:"user not found",
        });
    }

    res.status(200).json(user);
});