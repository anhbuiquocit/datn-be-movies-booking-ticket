import { ApolloError } from 'apollo-server-express';
import { ValidationError } from 'yup';

export interface MyError {
  code: string;
  message: string;
  errorCode: number | string;
  slackIgnore?: boolean;
  isValidationError?: boolean;
  validationErrors?: ValidationError;
}

export class MyApolloError extends ApolloError {
  constructor(args: MyError) {
    const isValidationError = args?.isValidationError ? true : false;
    super(args.message, args.code, {
      errorCode: args.errorCode,
      slackIgnore: args?.slackIgnore,
      isValidationError,
      validationErrors: args?.validationErrors,
    });
  }
}

export class WrongArgumentError extends MyApolloError {
  constructor() {
    const WRONG_ARG_ERROR: MyError = {
      errorCode: 80000,
      code: 'WRONG_ARG_ERROR',
      message: 'INVALID_ARG',
    };
    super(WRONG_ARG_ERROR);
  }
}
