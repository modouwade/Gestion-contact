import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  const newContact = new Contact(req.body);
  try {
    const saveContact = await newContact.save();
    res.status(200).json(saveContact);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedContact);
  } catch (err) {
    next(err);
  }
};
export const deleteContact = async (req, res, next) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json("Contact has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (err) {
    next(err);
  }
};
export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};
