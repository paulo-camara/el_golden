const express = require('express');
const router = express.Router();

const _query = require('../../database');
const HandlerError = require('../HandlerError');

const _validateFields = (bodyFields) => {
    let allIsValidations = [];
    const fields = Object.keys(bodyFields);

    const validations = {
        color: () => {
            var regex = new RegExp("^[a-zA-Z ]*$");

            return bodyFields.color.length <= 16 && regex.test();
        }
    };

    fields.forEach(element => {
        if (validations[element]) {
            const isValid = validations[element]();

            allIsValidations.push(isValid);
        }
    });

    return !allIsValidations.includes(false);
};

router.post('/set_device', (req, resp) => {
    const isValid = _validateFields(req.body);

    if (!isValid) return resp.send(HandlerError(400));

    const callback = () => resp.send('success');

    const { category, color, part_number } = req.body;

    _query(`INSERT INTO tb_device(category, color, part_number) values($1, $2, $3)`, [category, color, part_number], callback);
});

module.exports = app => app.use('/management_device', router);
