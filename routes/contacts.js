const express = require("express");
const contactsController = require("../controllers/contacts");
const router = express.Router();

router.get("/", contactsController.getAll); // http://localhost:3000/contaacts/
router.get("/:id", contactsController.getSingle); // http://localhost:3000/contacts/id

module.exports = router;
