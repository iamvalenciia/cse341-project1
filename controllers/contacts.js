const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


// const getAll = async (req, res, next) => {
//   console.log('Attempting to retrieve data from "contacts" collection...');
//   try {
//     const result = await mongodb.getDb().db().collection('contacts').find();
//     console.log('Successfully retrieved data from "contacts" collection.');
//     result.toArray().then((lists) => {
//       res.setHeader('Content-Type', 'application/json');
//       res.status(200).json(lists);
//     });
//   } catch (err) {
//     console.error('Error retrieving data from "contacts" collection:', err);
//     next(err);
//   }
// };

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  console.log(result); // log the result here
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};


const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAll, getSingle };