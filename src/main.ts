import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import * as http2 from 'http2';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const key = readFileSync(path.join(__dirname, 'assets', 'key.pem'));
  const cert = readFileSync(path.join(__dirname, 'assets', 'cert.pem'));

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
