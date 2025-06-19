class AppError extends Error {
  constructor(message, statusCode, status = "fail") {
    super(message);
    this.statusCode = statusCode;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports =  AppError;
