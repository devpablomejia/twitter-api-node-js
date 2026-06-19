const config = require('../../config/index');

function withErrorStack(error, stack) {
    if (config.dev) {
        return { ...error, stack };
    }
    return error;
}

module.exports = withErrorStack;