import { Request, Response } from 'express';

export function returnSuccess(
  _req: Request,
  res: Response,
  statusCode: number,
  message: string,
  data: unknown
) {
  const returnResponse = {
    meta: {
      status: statusCode,
      message,
    },
    data,
  };
  return res.status(statusCode).json(returnResponse);
}

export function returnNonSuccess(
  _req: Request,
  res: Response,
  statusCode: number,
  message: string
) {
  const returnResponse = {
    meta: {
      status: statusCode,
      message,
    },
    data: null,
  };
  return res.status(statusCode).json(returnResponse);
}
