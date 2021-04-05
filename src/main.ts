import { NestFactory } from '@nestjs/core';
import { UserModule } from './modules/user-management/user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
