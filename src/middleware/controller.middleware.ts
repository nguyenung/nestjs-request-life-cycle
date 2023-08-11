import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ControllerMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    Logger.log('[Middleware] This is controller middleware');
    next();
  }
}
