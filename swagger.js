import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API Contacts',
    description: 'Temple API Contacts'
  },
  host: 'cse341valencia.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
