const express = require("express");

const contactsController = require("../../modules/contacts/controller");
const validateData = require("../../modules/contacts/middleware")

const router = express.Router();

router.get("/", contactsController.listContacts);

router.get("/:contactId", contactsController.getContactById);

router.post("/", validateData, contactsController.addContact);

router.delete("/:contactId", contactsController.removeContact);

router.put("/:contactId", validateData, contactsController.updateContact);

router.patch("/:contactId/favorite", validateData, contactsController.updateStatusContact)

module.exports = router;