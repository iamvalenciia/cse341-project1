/* eslint-disable no-unused-vars */
import { check, param } from 'express-validator';
import { validateResult } from '../helpers/validateHelper.js';

export const validatePost = [
  check('user_id').exists().not().isEmpty(),
  check('content').exists().not().isEmpty(),
  check('timestam')
    .optional()
    .if((value) => !value)
    .customSanitizer(() => new Date().toISOString()),
  check('likes')
    .optional()
    .if((value) => !value)
    .customSanitizer((value, { req }) => value || 0),
  check('views')
    .optional()
    .if((value) => !value)
    .customSanitizer((value, { req }) => value || 0),

  (req, res, next) => {
    validateResult(req, res, next);
  }
];
export const validateGet = [
  check('user_id').optional().notEmpty(),
  check('content').optional().notEmpty(),
  check('timestam').optional().notEmpty(),
  check('likes').optional().isNumeric(),
  check('views').optional().isNumeric(),

  (req, res, next) => {
    validateResult(req, res, next);
  }
];

export const validateUpdate = [
  check('user_id').notEmpty(),
  check('content').notEmpty(),
  check('timestam')
    .optional()
    .if((value) => !value)
    .customSanitizer(() => new Date().toISOString()),
  check('likes')
    .notEmpty()
    .isNumeric()
    .bail()
    .customSanitizer((value, { req }) => value || 0),
  check('views')
    .notEmpty()
    .isNumeric()
    .bail()
    .customSanitizer((value, { req }) => value || 0),

  (req, res, next) => {
    validateResult(req, res, next);
  }
];
// export const validateDelete = [
//   param('id').exists().isString(),
//   (req, res, next) => {
//     validateResult(req, res, next);
//   }
// ];
