import express from "express";
import pool from "./database.js"; 


const app=express();
const port = 3000;

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

// app.get("/test-db", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     res.send(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("DB connection failed");
//   }
// });

app.get("/notes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM notes ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch notes");
  }
});


app.post("/notes",async (req,res)=>{
  const {title,content}=req.body;
  try{
    const result=await pool.query("INSERT INTO notes(title,content) VALUES ($1,$2) RETURNING *",[title,content]);
    res.json(result.rows[0]);
  }
  catch(err){
    console.error(err);
    res.status(500).send("Failed to add note");
  }
});
