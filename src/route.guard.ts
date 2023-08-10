import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RouteGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    Logger.log('[Guard] This is route guard');
    return true;
  }
}
