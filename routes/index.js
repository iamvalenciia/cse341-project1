const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`cse341 | Juan Pablo Valencia | 
    <a href="https://cse341valencia.onrender.com/contacts">https://cse341valencia.onrender.com/contacts</a>`);
});

router.use("/contacts", require("./contacts"));

module.exports = router;
