const joi = require('joi');

function validate(schema, data) {
    const { error } = joi.object(schema).validate(data);
    return error;
}

module.exports = validate;