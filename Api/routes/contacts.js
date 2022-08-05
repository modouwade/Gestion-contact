import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContact,
  updateContact,
} from "../controllers/contact.js";

const router = express.Router();
//CREATE
router.post("/", createContact);
//UPDATE
router.put("/:id", updateContact);
//DELETE
router.delete("/:id", deleteContact);
//GET
router.get("/find/:id", getContact);
//GET ALL
router.get("/", getAllContacts);

export default router;
