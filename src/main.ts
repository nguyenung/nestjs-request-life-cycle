import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { functionMiddleware } from './function.middleware';
import { GlobalGuard } from './global.guard';
import { GlobalInterceptor } from './global.interceptor';
import { GlobalPipe } from './global.pipe';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalInterceptors(new GlobalInterceptor());

  app.useGlobalGuards(new GlobalGuard());

  app.useGlobalPipes(new GlobalPipe());

  app.use(functionMiddleware);

  await app.listen(3000);
}

bootstrap();
