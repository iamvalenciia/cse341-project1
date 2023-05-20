import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Social Media - API Documentation',
    description: 'Temple API Contacts'
  },
  host: 'cse341-project1-ue8w.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc);
