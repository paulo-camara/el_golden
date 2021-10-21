const express = require('express');
const router = express.Router();

const _query = require('../../database');

router.get('/get_device', (req, resp) => {
    const callback = (result) => resp.send(result);

    _query(`SELECT * FROM tb_device INNER JOIN tb_category ON tb_device.category = tb_category.id`, [], callback);
});

module.exports = app => app.use('/management_device', router);