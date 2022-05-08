import { formatError } from './util/handleException/formatError';
import { HttpErrorFilter } from './util/handleException/http-exception.filter';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, raw } from 'body-parser'; // eslint-disable-line import/no-extraneous-dependencies
import '././util/prettyError';
import rateLimit from 'express-rate-limit';
import { graphqlUploadExpress } from 'graphql-upload';
import * as config from './config';

import 'dotenv/config';
import { AllExceptionsFilter } from './util/handleException/all-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpErrorFilter());
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // const httpAdapterHost = new HttpAdapterHost();
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));
  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? [
            /https\:\/\/alphamovies\.com$/,
            /https\:\/\/\w+\.alphamovies\.com$/,
            /wss\:\/\/\w+\.alphamovies\.com$/,
            'file://',
            'http://localhost:3000/',
          ]
        : [
            /http\:\/\/(\w+)?\.?localhost:3000$/,
            'file://',
            'http://127.0.0.1:3000',
            'https://studio.apollographql.com',
          ],
  });
  app.use(graphqlUploadExpress({ maxFileSize: 2 * 1000 * 1000 }));
  app.use(
    config.default.grapqlEndPoint,
    rateLimit({
      windowMs: 1000,
      max: 100,
    }),
  );
  app.use(config.default.grapqlEndPoint, json({ limit: '10mb' }));
  app.use(raw({ type: 'application/json' }));
  await app.listen(4000);
  console.log(`app is listening on ${config.default.appPort} port`);
}
bootstrap();
