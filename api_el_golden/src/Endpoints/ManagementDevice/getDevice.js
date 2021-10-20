const express = require('express');
const router = express.Router();

const _query = require('../../database');

router.get('/get_device', (req, resp) => {
    const callback = (result) => resp.send(result);

    _query(`SELECT * FROM tb_device`, [], callback);
});

module.exports = app => app.use('/management_device', router);