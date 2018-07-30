const express = require('express')
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

const app = express();

app.use(express.static(pathToSwaggerUi));

app.listen(4000, function () {
    console.log('Swauger app listening on port 4000!\n');
  });