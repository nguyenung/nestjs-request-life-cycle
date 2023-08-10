import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  Logger,
} from '@nestjs/common';

@Injectable()
export class GlobalPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    Logger.log('[Pipe] This is global pipe');
    return value;
  }
}
