import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9900);
  console.log('server start http://127.0.0.1:9900');
}
bootstrap();
