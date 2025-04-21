import { Request, Response } from 'express';
import { returnSuccess, returnNonSuccess } from '../utils/helper.util';
import { userQuery } from '../queries/user.query';
import { ERROR_MESSAGES, USER_MESSAGES } from '../constants/message';

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await userQuery.getUsers();
    returnSuccess(req, res, 200, USER_MESSAGES.GET, users);
  } catch (error: unknown) {
    if (error instanceof Error) {
      returnNonSuccess(req, res, 500, error.message);
    } else {
      returnNonSuccess(req, res, 500, ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
    }
  }
}
