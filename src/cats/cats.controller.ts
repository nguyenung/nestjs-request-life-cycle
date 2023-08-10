import {
  Controller,
  Get,
  Logger,
  Param,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ControllerGuard } from 'src/controller.guard';
import { ControllerInterceptor } from 'src/controller.interceptor';
import { ControllerPipe } from 'src/controller.pipe';
import { RouteGuard } from 'src/route.guard';
import { RouteInterceptor } from 'src/route.interceptor';
import { RoutePipe } from 'src/route.pipe';

@Controller('cats')
@UseGuards(ControllerGuard)
@UseInterceptors(ControllerInterceptor)
@UsePipes(new ControllerPipe())
export class CatsController {
  @Get(':id')
  @UseGuards(RouteGuard)
  @UseInterceptors(RouteInterceptor)
  @UsePipes(new RoutePipe())
  cats(@Param() params: any): string {
    Logger.log('CatsController > cats function');
    return 'Mew';
  }
}
