import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API Contacts',
    description: 'Temple API Contacts'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
