import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class RouteInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    Logger.log('[Interceptor] This is pre route interceptor');

    return next
      .handle()
      .pipe(
        tap(() => Logger.log('[Interceptor] This is post route interceptor')),
      );
  }
}
