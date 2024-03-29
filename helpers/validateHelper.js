import { validationResult } from 'express-validator';

export const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    res.status(406);
    res.send({ errors: err.array() });
  }
};
