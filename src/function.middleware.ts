import { Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function functionMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  Logger.log('[Middleware] This is global function middleware');
  next();
}
