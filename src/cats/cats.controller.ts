import {
  Controller,
  Get,
  Logger,
  Param,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ControllerGuard } from 'src/guards/controller.guard';
import { ControllerInterceptor } from 'src/interceptors/controller.interceptor';
import { ControllerPipe } from 'src/pipes/controller.pipe';
import { RouteGuard } from 'src/guards/route.guard';
import { RouteInterceptor } from 'src/interceptors/route.interceptor';
import { RoutePipe } from 'src/pipes/route.pipe';

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
