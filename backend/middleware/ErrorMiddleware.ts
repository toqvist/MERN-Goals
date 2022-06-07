//Override the default express error handler with out own middleware
//Middleware is called between request and response
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode)
    res.json({
        message: err.message,
        //Only stack trace if we are not in production
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}