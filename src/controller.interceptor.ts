import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ControllerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    Logger.log('[Interceptor] This is pre controller interceptor');

    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.log('[Interceptor] This is post controller interceptor'),
        ),
      );
  }
}
