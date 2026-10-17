import express from "express";
import pool from "./database.js";
import cors from "cors";


const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
})

app.listen(port, () => {
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


app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !title.trim() || !content || !content.trim()) {
    return res.status(400).send("Not a Proper Note");
  }
  try {
    const result = await pool.query("INSERT INTO notes(title,content) VALUES ($1,$2) RETURNING *", [title, content]);
    res.json(result.rows[0]);
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Failed to add note");
  }
});

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const checkNum = Number(id);
  if (!Number.isInteger(checkNum) || checkNum <= 0) {
    return res.status(400).send("NOT A PROPER ID ")
  }

  try {
    let countRow = await pool.query("DELETE FROM notes WHERE id=$1", [id]);
    // console.log(countRow.rowCount)
    if (countRow.rowCount === 0) {
      return res.status(404).send("No such note exists");
    }
    res.sendStatus(204);
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Failed to delete note")
  }
});

app.patch("/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
 if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
  return res.status(400).send("Invalid note id");
}

if (!title || !title.trim() || !content || !content.trim()) {
  return res.status(400).send("Title and content are required");
}
  try {
    const result = await pool.query(
      "UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [title, content, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).send("NO such note")
    }
    
  }
  catch(err){
      console.error(err);
      res.status(500).send("Failed");
    }
})
