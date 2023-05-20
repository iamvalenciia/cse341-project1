import { getDb } from '../db/connect.js';
import { ObjectId } from 'mongodb';

const getAll = async (req, res, next) => {
  try {
    const result = await getDb().db('cse341-project1').collection('posts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error('Error retrieving data from "posts" collection:', err);
    res.status(500);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/posts'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.description = 'Get all posts'
    #swagger.responses[200] = {
      description: 'posts retrieved successfully',
      schema: {
        'user_id': 'juan',
        'content': 'juan2000',
        'timestamp': 'juan@gmail.com',
        'likes': 1,
        'views': 0
      },
    }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
};

const getSingle = async (req, res, next) => {
  try {
    const PostId = new ObjectId(req.params.id);
    const result = await getDb().db('cse341-project1').collection('posts').findOne({ _id: PostId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    console.error('Error retrieving data from "posts" collection:', err);
    next(err);
  }
  /*  
    #swagger.auto = false
    #swagger.path = '/posts/{id}'
    #swagger.method = 'get'
    #swagger.produces = ['application/json']
    #swagger.description = 'Get a single Post by ID'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Post ID',
      required: true,
      type: 'string',
    }
    #swagger.responses[200] = {
      description: 'Success',
      schema: {
        'user_id': 'juan',
        'content': 'juan2000',
        'timestamp': 'juan@gmail.com',
        'likes': 1,
        'views': 0
      },
    }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
};

const createPost = async (req, res, next) => {
  console.log('Received JSON data:', req.body);
  try {
    const newPost = req.body;
    const result = await getDb().db('cse341-project1').collection('posts').insertOne(newPost);
    res.status(201).json(result).end();
  } catch (err) {
    res.status(500);
    console.error('Error creating new Post:', err);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/posts'
    #swagger.method = 'post'
    #swagger.consumes = ['application/json']
    #swagger.produces = ['application/json']
    #swagger.description = 'Create a new Post'
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Post data',
      required: true,
      schema: {
        'user_id': 'juan',
        'content': 'juan2000',
        'timestamp': 'juan@gmail.com',
        'likes': 1,
        'views': 0
      },
      required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday']
    }
    #swagger.responses[201] = { description: 'Post created successfully' }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
};

const updatePost = async (req, res, next) => {
  console.log('Received JSON data to Update:', req.body);
  console.log('Received paramenter ID data to Update:', req.params.id);
  try {
    const PostId = new ObjectId(req.params.id);
    const updatedPost = req.body;
    const result = await getDb()
      .db('cse341-project1')
      .collection('posts')
      .updateOne({ _id: PostId }, { $set: updatedPost });
    res.status(200).json(result).end();
    console.log('result:' + { result });
  } catch (err) {
    res.status(500);
    console.error('Error updating Post:', err);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/posts/update/{id}'
    #swagger.method = 'put'
    #swagger.description = 'Update a Post'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID of the Post to update',
      required: true,
      type: 'string'
    }
    #swagger.parameters['obj'] = {
      in: 'body',
      description: 'Update the Post data',
      required: true,
      schema: {
        'user_id': 'juan',
        'content': 'juan2000',
        'timestamp': 'juan@gmail.com',
        'likes': 1,
        'views': 0
      },
      required: ['name', 'PostName', 'email', 'password', 'gender']
    }
    #swagger.responses[204] = { description: 'Post updated successfully' }
    #swagger.responses[500] = { description: 'Internal Server Error' }
  */
};

const deletePost = async (req, res, next) => {
  try {
    const PostId = new ObjectId(req.params.id);
    const result = await getDb()
      .db('cse341-project1')
      .collection('posts')
      .deleteOne({ _id: PostId });
    res.status(200).json(result).end();
  } catch (err) {
    res.status(500);
    console.error('Error deleting Post:', err);
    next(err);
  }
  /*
    #swagger.auto = false
    #swagger.path = '/posts/delete/{id}'
    #swagger.method = 'delete'
    #swagger.description = 'Delete a Post by ID'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID of the Post to delete',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = { description: 'The Post has been successfully deleted.' }
    #swagger.responses[500] = { description: 'Internal Server Error.' }
  */
};

export default { getAll, getSingle, createPost, updatePost, deletePost };
