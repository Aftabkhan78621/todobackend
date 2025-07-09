// express and todo model import krna h
const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// create todo (add)
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    // tittle empty ho
   if (!title) {
  return res.status(400).json({ error: "Title is required" }); // ✅ correct
}


    // todo create karo
    const newTodo = await Todo.create({ title });
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "failed to create todo" });
  }
});
// get all todos(list show)

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 }); // latest first
    res.json(todos);
  } catch (error) {
    res.status(500).json({ eorror: "failed to get todos" });
  }
});

// dlete todo

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
   if (!todo) {
  return res.status(404).json({ error: "todo not found" });
}

    res.json({ mesage: "Todo deleted", todo });
  } catch (err) {
    res.status(500).json({ error: "failed to delete todo" });
  }
});

module.exports = router;
