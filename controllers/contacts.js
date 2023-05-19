import { getDb } from '../db/connect.js';
import { ObjectId } from 'mongodb';

const getAll = async (req, res, next) => {
  try {
    const result = await getDb().db().collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error('Error retrieving data from "contacts" collection:', err);
    res.status(500);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/contacts'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.description = 'Get all contacts'
    #swagger.responses[200] = {
      description: 'Contacts retrieved successfully',
      schema: {
        '_id': '645f1489181ef425e389115c',
        'firstName': 'Gabriel',
        'lastName': 'Angel',
        'email': 'gabriel@example.com',
        'favoriteColor': 'red',
        'birthday': '1995-10-09'
      }
    }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
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
  /*  
    #swagger.auto = false
    #swagger.path = '/contacts/{id}'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.description = 'Get a single contact by ID'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'User ID',
      required: true,
      type: 'string',
    }
    #swagger.responses[200] = {
      description: 'Success',
      schema: {
        'firstName': 'write_here',
        'lastName': 'write_here',
        'email': 'exmaple@example.com',
        'favoriteColor': 'blue_example',
        'birthday': 'year-mm-dd(2000-10-09)'
      },
    }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
};

const createContact = async (req, res, next) => {
  console.log('Received JSON data:', req.body);
  try {
    const newContact = req.body;
    const result = await getDb().db().collection('contacts').insertOne(newContact);

    if (result.acknowledged) {
      res.status(201).end();
    } else {
      res.status(500);
    }
  } catch (err) {
    console.error('Error creating new contact:', err);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/contacts/create'
    #swagger.method = 'post'
    #swagger.consumes = ['application/json']
    #swagger.produces = ['application/json']
    #swagger.description = 'Create a new contact'
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Contact data',
      required: true,
      schema: {
        'firstName': 'write_here',
        'lastName': 'write_here',
        'email': 'exmaple@example.com',
        'favoriteColor': 'blue_example',
        'birthday': 'year-mm-dd(2000-10-09)'
      },
      required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday']
    }
    #swagger.responses[201] = { description: 'Contact created successfully' }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
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
      res.status(204).end();
    } else {
      res.status(500);
    }
  } catch (err) {
    console.error('Error updating contact:', err);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/contacts/update/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Update a contact'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID of the contact to update',
      required: true,
      type: 'string'
    }
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Update the contact data',
      required: true,
      schema: {
        'firstName': 'update_name',
        'lastName': 'update_last_name',
        'email': 'update@email.com',
        'favoriteColor': 'update_color',
        'birthday': 'update_date(2000-10-09)'
      },
      required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday']
    }
    #swagger.responses[204] = { description: 'Contact updated successfully' }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
};

const deleteContact = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await getDb().db().collection('contacts').deleteOne({ _id: userId });

    if (result.deletedCount === 1) {
      res.status(200).end();
    } else {
      res.status(500);
    }
  } catch (err) {
    console.error('Error deleting contact:', err);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/contacts/delete/{id}'
    #swagger.method = 'delete'
    #swagger.description = 'Delete a contact by ID'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID of the contact to delete',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = { description: 'The contact has been successfully deleted.' }
    #swagger.responses[500] = { description: 'Internal Server Error.' }
  */
};

export default { getAll, getSingle, createContact, updateContact, deleteContact };
