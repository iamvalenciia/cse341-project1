import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config();

let _db;

// function is used to connect to the database
export const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  // eslint-disable-next-line no-undef
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

//function is used to access the connection from other modules
export const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};
