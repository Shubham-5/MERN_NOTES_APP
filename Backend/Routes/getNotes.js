const express = require("express");
const Notes = require("../Models/Notes");
const router = express.Router();

router.get("/notes", async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).send(notes);
  } catch (error) {
    console.log(error);
  }
});

router.post("/notes", async (req, res) => {
  try {
    const note = new Notes({
      desc: req.body.desc,
    });
    //save our record with the save method. Saving data is also asynchronous
    await note.save();
    res.status(200).send(note);
  } catch (error) {
    console.log(error);
  }
});

router.put("/notes/:id", async (req, res) => {
  let note = await Notes.findOne({ _id: req.params.id });
  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }
  try {
    if (req.body.desc) {
      post.desc = req.body.desc;
      await note.save();
      res.status(200).send(note);
    }
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  let note = await Notes.deleteOne({ _id: req.params.id });
  res.send(note);
});

module.exports = router;
