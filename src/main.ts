import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import * as http2 from 'http2';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const key = readFileSync(__dirname + '/key.pem');
  const cert = readFileSync(__dirname + '/cert.pem');

  await app.init();
  const server = http2.createSecureServer(
    { key, cert },
    app.getHttpAdapter().getInstance(),
  );

  server.listen(3000, () =>
    console.log('Application is running on: https://localhost:3000'),
  );
}
bootstrap();
