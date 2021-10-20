const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

require('./Endpoints/ManagementCategory/getCategory')(app);
require('./Endpoints/ManagementCategory/setCategory')(app);
require('./Endpoints/ManagementCategory/deleteCategory')(app);

require('./Endpoints/ManagementDevice/getDevice')(app);
require('./Endpoints/ManagementDevice/setDevice')(app);
require('./Endpoints/ManagementDevice/deleteDevice')(app);

app.listen(8080, () => {
    console.log('API it\'s runing...');
});
