import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const port = config.get('API_PORT');
  await app.listen(port || 3000, () => {
    console.log(`App start on port: ${port}`);
  });
}
bootstrap();
