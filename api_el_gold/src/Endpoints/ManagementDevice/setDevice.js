const express = require('express');
const router = express.Router();

const _query = require('../../database');

router.post('/set_device', (req, resp) => {
    const callback = () => resp.send('success');

    const { category, color, part_number } = req.body;

    _query(`INSERT INTO tb_device(category, color, part_number) values($1, $2, $3)`, [category, color, part_number], callback);
});

module.exports = app => app.use('/management_device', router);
