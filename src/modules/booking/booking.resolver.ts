import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Booking } from 'src/@generated/prisma-nestjs-graphql/booking/booking.model';
import { CreateOneBookingArgs } from 'src/@generated/prisma-nestjs-graphql/booking/create-one-booking.args';
import { DeleteOneBookingArgs } from 'src/@generated/prisma-nestjs-graphql/booking/delete-one-booking.args';
import { FindManyBookingArgs } from 'src/@generated/prisma-nestjs-graphql/booking/find-many-booking.args';
import { UpdateOneBookingArgs } from 'src/@generated/prisma-nestjs-graphql/booking/update-one-booking.args';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { BookingService } from './booking.service';
import { BookingItemInput } from './dto/BookingItemDto.dto';

@Resolver()
export class BookingResolver {
  constructor(private bookingService: BookingService) {}
  @UseGuards(GqlAuthGuard)
  @Query(() => [Booking])
  async bookingConnection(
    @Args() args: FindManyBookingArgs,
  ): Promise<Booking[]> {
    return this.bookingService.connection(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Booking)
  async createBookingRecord(@Args() args: CreateOneBookingArgs) {
    return this.bookingService.createOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Booking)
  async updateBookingRecord(@Args() args: UpdateOneBookingArgs) {
    return this.bookingService.updateOne(args);
  }
  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async deleteBookingRecord(@Args() args: DeleteOneBookingArgs) {
    return this.bookingService.deleteOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async userBookingTicket(@Args('data') data: BookingItemInput) {
    console.log('dataainput: ', data);
    return this.bookingService.userBookingTicket(data);
  }
}
