let _getObjectError = (statusCode, message) => {
    return {
        response: {
            message: message,
            code: statusCode,
        }
    }
};

const HandlerError = (code) => {
    const errors = {
        400: () => _getObjectError(400, 'Bad Request'),
        500: () => _getObjectError(500, 'Internal Server Error'),
    }

    return errors[code]();
};

module.exports = HandlerError;