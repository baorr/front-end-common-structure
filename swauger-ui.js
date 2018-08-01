const express = require('express');

const app = express();

app.use(express.static('./swagger-ui/dist/'));

app.listen(4000, function () {
    console.log('Swauger app listening on port 4000!\n');
});