const express = require('express');
const router = express.Router();

const _query = require('../../database');

router.post('/delete_category', (req, resp) => {
    const callback = () => resp.send('success');

    const { id } = req.body;

    _query(`DELETE FROM tb_category WHERE id=$1`, [id], callback);
});

module.exports = app => app.use('/management_category', router);
