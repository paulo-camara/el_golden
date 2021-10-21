const express = require('express');
const router = express.Router();

const _query = require('../../database');
const HandlerError = require('../HandlerError');

const _validateFields = (fields) => {
    const { name_category } = fields;

    if (name_category) !!name_category.lenght <= 128
};

router.post('/set_category', (req, resp) => {
    const { name_category } = req.body;

    const callback = () => {
        const isValid = _validateFields(req.body);

        if (!isValid) {
            resp.send(HandlerError(400));
        } else {
            resp.send('success');
        }
    }

    _query(`INSERT INTO tb_category(name_category) values($1)`, [name_category], callback);
});

module.exports = app => app.use('/management_category', router);
