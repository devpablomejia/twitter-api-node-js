const boom = require('@hapi/boom');

function notFoundMiddleware(req, res, next) {
    next(boom.notFound());
}

module.exports = notFoundMiddleware;