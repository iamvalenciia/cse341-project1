/* eslint-disable no-unused-vars */
import { check, param } from 'express-validator';
import { validateResult } from '../helpers/validateHelper.js';

export const validatePost = [
  check('name').exists().not().isEmpty(),
  check('userName').exists().not().isEmpty(),
  check('email').exists().isEmail(),
  check('gender').exists().not().isEmpty(),
  check('password').exists(),
  check('followersCount').exists().isNumeric(),
  check('followingCount').exists().isNumeric(),

  (req, res, next) => {
    validateResult(req, res, next);
  }
];
export const validateGet = [
  check('name').optional().notEmpty(),
  check('userName').optional().notEmpty(),
  check('email').optional().isEmail(),
  check('gender').optional().notEmpty(),
  check('followersCount').optional().isNumeric(),
  check('followingCount').optional().isNumeric(),

  (req, res, next) => {
    validateResult(req, res, next);
  }
];
export const validateUpdate = [
  check('name').notEmpty(),
  check('userName').notEmpty(),
  check('email').isEmail(),
  check('gender').notEmpty(),
  check('password').notEmpty(),
  check('followersCount')
    .notEmpty()
    .isNumeric()
    .bail()
    .customSanitizer((value, { req }) => value || 0),
  check('followingCount')
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
