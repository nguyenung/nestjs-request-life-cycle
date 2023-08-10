import {
  ArgumentMetadata,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ControllerPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    Logger.log('[Pipe] This is controller pipe');
    return value;
  }
}
