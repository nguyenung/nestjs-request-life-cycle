import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class GlobalMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction): void {
    Logger.log('[Middleware] This is global middleware');
    next();
  }
}
