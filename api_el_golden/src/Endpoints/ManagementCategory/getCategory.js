const express = require('express');
const router = express.Router();

const _query = require('../../database');

router.get('/get_category', (req, resp) => {
    const callback = (result) => resp.send(result);

    _query(`SELECT * FROM tb_category`, [], callback);
});

module.exports = app => app.use('/management_category', router);
