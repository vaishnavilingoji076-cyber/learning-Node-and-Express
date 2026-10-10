const express=require("express");

const app=express();

const users=[
    {   id:1,
        name:"Laptop",
        price:90000},
    {
        id:2,
        name:"Smartwatch", 
        price:80000
    },
    {
        id:3,
        name:"TV",
        price:87000
    },
];


app.get("/api/users",(req,res)=>{
    res.json(users);
});

//get one user by id

app.get("/api/users/:id",(req,res)=>{
    const userid=Number(req.params.id);

    const user=users.find((user) =>user.id=== userid);

    if(!user){
        return res.status(404).json({
            message:"page not found",
        });
    }

    res.json(user);
});

//adding post 

app.post("/api/vaish",(req,res)=>{
    const newUser={
        id:vaish.length+1,
        name:req.body.name,
        age:req.body.age,
    };

    vaish.push(newUser);

    res.status(201).json(newUser);
})

//validation
app.post("api/vaish1",(req,res)=>{
    const {name,age}=req.body;

    if(!name || !age){
        return res.status(400).json({
            message:"name and age is required",
        });

    }
    const newUser={
    id:vaish1.length +1,
name,
age,
};

vaish1.push(newUser);

res.status(201).json(newUser);
});


app.listen(3000,()=>{
    console.log("server is running")
})