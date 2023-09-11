const { HttpError } = require('../helpers');

const validateUserVerify = (schema) => {
  const fn = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, "Missing required field email"); 
    }
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };

  return fn;
};

module.exports = validateUserVerify;