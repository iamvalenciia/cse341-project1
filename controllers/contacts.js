import { getDb } from '../db/connect.js';
import { ObjectId } from 'mongodb';
import editContactForm from '../views/editContactForm.js';

const getAll = async (req, res, next) => {
  try {
    const result = await getDb().db().collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error('Error retrieving data from "contacts" collection:', err);
    next(err);
  }
};

const getSingle = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await getDb().db().collection('contacts').findOne({ _id: userId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error('Error retrieving data from "contacts" collection:', err);
    next(err);
  }
};

const createContact = async (req, res, next) => {
  try {
    const newContact = req.body;
    const result = await getDb().db().collection('contacts').insertOne(newContact);
    const insertedContact = await getDb()
      .db()
      .collection('contacts')
      .findOne({ _id: result.insertedId });
    res
      .status(201)
      .send(
        `The contact ${JSON.stringify(
          insertedContact.firstName + ' ' + insertedContact.lastName
        )} was created successfully`
      );
  } catch (err) {
    console.error('Error creating new contact:', err);
    next(err);
  }
};

export const getContacts = async () => {
  try {
    const result = await getDb().db().collection('contacts').find().toArray();
    return result;
  } catch (err) {
    console.error('Error retrieving data from "contacts" collection:', err);
    throw err;
  }
};

const editContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await getDb().db().collection('contacts').findOne({ _id: userId });
    res.send(editContactForm(result));
  } catch (err) {
    console.error('Error retrieving contact for editing:', err);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const updatedContact = req.body;
    const result = await getDb()
      .db()
      .collection('contacts')
      .updateOne({ _id: userId }, { $set: updatedContact });

    if (result.modifiedCount === 1) {
      req.session.successMessage = 'The contact was successfully updated.';
    } else {
      req.session.errorMessage = 'Failed to update the contact. Please try again.';
    }

    res.redirect('/');
  } catch (err) {
    console.error('Error updating contact:', err);
    next(err);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await getDb().db().collection('contacts').deleteOne({ _id: userId });

    if (result.deletedCount === 1) {
      req.session.successMessage = 'The contact was successfully deleted.';
    } else {
      req.session.errorMessage = 'Contact deletion failed.';
    }

    res.redirect('/');
  } catch (err) {
    console.error('Error deleting contact:', err);
    next(err);
  }
};

export default { getAll, getSingle, createContact, editContact, updateContact, deleteContact };
