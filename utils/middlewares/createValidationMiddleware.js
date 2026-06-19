const validate = require("../validate");
const boom = require('@hapi/boom');

// @Param {Object} validationSchema - {[K in body | "query" | "params"]: JoiSchema}
function createValidationMiddleware(validationSchema) {
    const [[payloadKey, joiSchema]] = Object.entries(validationSchema);

    if (
        payloadKey !== "body" &&
        payloadKey !== "query" &&
        payloadKey !== "params"
    ) {
        throw new Error
        (
            "Invalid payload key. Must be 'body', 'query' or 'params'"

        );
    }

    return function validationMiddleware(req, res, next) {
        const error = validate(joiSchema, req[payloadKey]);
        error ? next(boom.badRequest(error)) : next();
    }
}

module.exports = createValidationMiddleware;