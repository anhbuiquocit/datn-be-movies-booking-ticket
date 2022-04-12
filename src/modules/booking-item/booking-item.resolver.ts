import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookingItem } from 'src/@generated/prisma-nestjs-graphql/booking-item/booking-item.model';
import { CreateOneBookingItemArgs } from 'src/@generated/prisma-nestjs-graphql/booking-item/create-one-booking-item.args';
import { DeleteOneBookingItemArgs } from 'src/@generated/prisma-nestjs-graphql/booking-item/delete-one-booking-item.args';
import { FindManyBookingItemArgs } from 'src/@generated/prisma-nestjs-graphql/booking-item/find-many-booking-item.args';
import { UpdateOneBookingItemArgs } from 'src/@generated/prisma-nestjs-graphql/booking-item/update-one-booking-item.args';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { BookingItemService } from './booking-item.service';

@Resolver()
export class BookingItemResolver {
  constructor(private bookingItemService: BookingItemService) {}
  @UseGuards(GqlAuthGuard)
  @Query(() => [BookingItem])
  async bookingItemConnection(@Args() args: FindManyBookingItemArgs) {
    return this.bookingItemService.connection(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => BookingItem)
  async createBookingItem(@Args() args: CreateOneBookingItemArgs) {
    return this.bookingItemService.createOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => BookingItem)
  async updateBookingItem(@Args() args: UpdateOneBookingItemArgs) {
    return this.bookingItemService.updateOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async deleteBookingItem(@Args() args: DeleteOneBookingItemArgs) {
    return this.bookingItemService.deleteOne(args);
  }
}
