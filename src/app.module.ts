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
import { RolesGuard } from './util/roles.guard';
import { ShowingModule } from './modules/showing/showing.module';
import { SeatModule } from './modules/seat/seat.module';
import { RoomModule } from './modules/room/room.module';
import { PromotionModule } from './modules/promotion/promotion.module';
import { BookingItemModule } from './modules/booking-item/booking-item.module';
import { BookingModule } from './modules/booking/booking.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
    AuthModule,
    FilmModule,
    ShowingModule,
    SeatModule,
    RoomModule,
    PromotionModule,
    BookingItemModule,
    BookingModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
