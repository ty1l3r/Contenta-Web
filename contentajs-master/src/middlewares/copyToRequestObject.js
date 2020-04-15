// @flow

import type {
  $Request as Request,
  $Response as Response,
  NextFunction,
} from 'express';

import type { ObjectLiteral } from '../../flow/types/common';

/**
 * Returns a middleware that will copy all of the properties to the request.
 *
 * This is useful to store variables that will be used in any arbitrary
 * middleware down the process.
 */
module.exports = (args: ObjectLiteral) => (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  Object.keys(args).forEach(key => {
    req[key] = args[key];
  });
  next();
};
