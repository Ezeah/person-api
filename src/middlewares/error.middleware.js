const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.status(400).send({
        message: err.message,
        success: false
    })
}

module.exports = { errorHandler };
