import {
  ArgumentMetadata,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class RoutePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    Logger.log('[Pipe] This is route pipe');
    return value;
  }
}
