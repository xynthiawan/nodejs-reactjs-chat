const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {

    
  const { username } = req.body;

  try{
   const r = await axious.put (
    'https://api.chatengine.io/users/',
    {username:username, secret:username, first_name:username},
    {headers:{"private-key": "5f08d5e0-d29a-4fd0-a3e9-c44cb3f918d3 "}}
   )
   return res.status (r.status).json(r.data)
  }catch (e){
    return res.status(e.response.status).json(e.response.data)

  }
});

app.listen(3001); 