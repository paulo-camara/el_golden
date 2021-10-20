const express = require('express');
const router = express.Router();

const _query = require('../../database');

router.delete('/delete_device', (req, resp) => {
    const callback = () => resp.send('success');

    const { id } = req.body;

    _query(`DELETE FROM tb_device WHERE id=$1`, [id], callback);
});

module.exports = app => app.use('/management_device', router);