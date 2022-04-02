import { HttpErrorFilter } from './util/handleException/http-exception.filter';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { FilmModule } from './modules/film/film.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
    AuthModule,
    FilmModule,
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpErrorFilter,
    // },
  ],
})
export class AppModule {}
