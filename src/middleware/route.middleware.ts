import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RouteMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    Logger.log('[Middleware] This is route middleware.');
    next();
  }
}
