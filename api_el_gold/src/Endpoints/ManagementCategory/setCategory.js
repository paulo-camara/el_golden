const express = require('express');
const router = express.Router();

const _query = require('../../database');

router.post('/set_category', (req, resp) => {
    const callback = () => resp.send('success');

    const { name_category } = req.body;

    _query(`INSERT INTO tb_category(name_category) values($1)`, [name_category], callback);
});

module.exports = app => app.use('/management_category', router);
