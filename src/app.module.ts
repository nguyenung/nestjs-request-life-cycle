import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalMiddleware } from './global.middleware';
import { ControllerMiddleware } from './controller.middleware';
import { CatsController } from './cats/cats.controller';
import { RouteMiddleware } from './route.middleware';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GlobalMiddleware).forRoutes('*');

    consumer.apply(ControllerMiddleware).forRoutes(CatsController);

    consumer
      .apply(RouteMiddleware)
      .forRoutes({ path: '/cats', method: RequestMethod.GET });
  }
}
