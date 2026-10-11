const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

let nextId = 4;

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

//post

app.post('/users', (req,res)=>{
    const {name,email}= req.body;

    if(!name || !email){
        return res.status(400).json({ message: "Name and Email is required"});
    }

    const newUser={id:nextId++, name, email};
    users.push(newUser);

    res.status(201).json(newUser);
});

//put

app.put('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const user=users.find(u=> u.id===id);

    if(!user) return res.status(404).json({message:'User not found' });

    const { name , email}= req.body;
    user.name=name?? user.name;
    user.email=email ?? user.email;

    res.json(user);

});

// delete

app.delete('users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index=users.findIndex(u=> u.id===id);

    if(index=== -1) return res.status(404).json({message: "user not found"});

    const deleted= users.splice(index, 1)[0];
    res.json({ message: 'Deleted', user:deleted});
});

const PORT = 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));