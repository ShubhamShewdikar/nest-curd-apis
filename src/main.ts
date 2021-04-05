import { NestFactory } from '@nestjs/core';
import { UserModule } from './modules/user-management/user.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.setGlobalPrefix('api/v1');
  const swagger_config = new DocumentBuilder()
  .setTitle('CURD APIs')
  .setDescription('A Simple CRUD API with NestJs, Postgres, Sequelize ORM')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, swagger_config);
  SwaggerModule.setup('api/v1/specs', app, document);

  await app.listen(3000);
}
bootstrap();
