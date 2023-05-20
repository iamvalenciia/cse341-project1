import { getDb } from '../db/connect.js';
import { ObjectId } from 'mongodb';

const getAll = async (req, res, next) => {
  try {
    const result = await getDb().db('cse341-project1').collection('users').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error('Error retrieving data from "users" collection:', err);
    res.status(500);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/users'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.description = 'Get all users'
    #swagger.responses[200] = {
      description: 'users retrieved successfully',
      schema: {
        'name': 'juan',
        'userName': 'juan2000',
        'email': 'juan@gmail.com',
        'password': 'password',
        'gender': 'male',
        'followersCount': 10,
        'followingCount': 0
      },
    }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
};

const getSingle = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await getDb().db('cse341-project1').collection('users').findOne({ _id: userId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error('Error retrieving data from "users" collection:', err);
    next(err);
  }
  /*  
    #swagger.auto = false
    #swagger.path = '/users/{id}'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.description = 'Get a single User by ID'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'User ID',
      required: true,
      type: 'string',
    }
    #swagger.responses[200] = {
      description: 'Success',
      schema: {
        'name': 'juan',
        'userName': 'juan2000',
        'email': 'juan@gmail.com',
        'password': 'password',
        'gender': 'male',
        'followersCount': 10,
        'followingCount': 0
      },
    }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
};

const createUser = async (req, res, next) => {
  console.log('Received JSON data:', req.body);
  try {
    const newUser = req.body;
    const result = await getDb().db('cse341-project1').collection('users').insertOne(newUser);
    res.status(201).json(result).end();
  } catch (err) {
    res.status(500);
    console.error('Error creating new User:', err);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/users'
    #swagger.method = 'post'
    #swagger.consumes = ['application/json']
    #swagger.produces = ['application/json']
    #swagger.description = 'Create a new User'
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'User data',
      required: true,
      schema: {
        'name_text': 'juan',
        'userName': 'juan2000',
        'email': 'juan@gmail.com',
        'password': 'password',
        'gender': 'male',
        'followersCount': 10,
        'followingCount': 0
      },
      required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday']
    }
    #swagger.responses[201] = { description: 'User created successfully' }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
};

const updateUser = async (req, res, next) => {
  console.log('Received JSON data to Update:', req.body);
  console.log('Received paramenter ID data to Update:', req.params.id);
  try {
    const userId = new ObjectId(req.params.id);
    const updatedUser = req.body;
    const result = await getDb()
      .db('cse341-project1')
      .collection('users')
      .updateOne({ _id: userId }, { $set: updatedUser });
    res.status(200).json(result).end();
    console.log('result:' + { result });
  } catch (err) {
    res.status(500);
    console.error('Error updating User:', err);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/users/update/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Update a User'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID of the User to update',
      required: true,
      type: 'string'
    }
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Update the User data',
      required: true,
      schema: {
        'name': 'juan',
        'userName': 'juan2000',
        'email': 'juan@gmail.com',
        'password': 'password',
        'gender': 'male',
        'followersCount': 10,
        'followingCount': 0
      },
      required: ['name', 'userName', 'email', 'password', 'gender']
    }
    #swagger.responses[204] = { description: 'User updated successfully' }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
};

const deleteUser = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await getDb()
      .db('cse341-project1')
      .collection('users')
      .deleteOne({ _id: userId });
    res.status(200).json(result).end();
  } catch (err) {
    res.status(500);
    console.error('Error deleting User:', err);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/users/delete/{id}'
    #swagger.method = 'delete'
    #swagger.description = 'Delete a User by ID'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID of the User to delete',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = { description: 'The User has been successfully deleted.' }
    #swagger.responses[500] = { description: 'Internal Server Error.' }
  */
};

export default { getAll, getSingle, createUser, updateUser, deleteUser };
