import { HttpErrorFilter } from './util/handleException/http-exception.filter';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpErrorFilter());
  await app.listen(4000);
}
bootstrap();
