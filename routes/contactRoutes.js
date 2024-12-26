const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
