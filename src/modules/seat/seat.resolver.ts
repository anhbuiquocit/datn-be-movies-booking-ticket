import { DeleteOneSeatArgs } from './../../@generated/prisma-nestjs-graphql/seat/delete-one-seat.args';
import { CreateOneSeatArgs } from './../../@generated/prisma-nestjs-graphql/seat/create-one-seat.args';
import { GqlAuthGuard } from './../auth/gql-auth-guard';
import { UseGuards } from '@nestjs/common';
import { SeatService } from './seat.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Seat } from 'src/@generated/prisma-nestjs-graphql/seat/seat.model';
import { FindManySeatArgs } from 'src/@generated/prisma-nestjs-graphql/seat/find-many-seat.args';
import { UpdateOneSeatArgs } from 'src/@generated/prisma-nestjs-graphql/seat/update-one-seat.args';

@Resolver()
export class SeatResolver {
  constructor(private seatService: SeatService) {}
  @UseGuards(GqlAuthGuard)
  @Query(() => [Seat])
  async seatConnection(@Args() args: FindManySeatArgs) {
    return this.seatService.connection(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Seat)
  async createSeat(@Args() args: CreateOneSeatArgs) {
    return this.seatService.createOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Seat)
  async updateSeat(@Args() args: UpdateOneSeatArgs) {
    return this.seatService.updateOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async deleteSeat(@Args() args: DeleteOneSeatArgs) {
    return this.seatService.deleteOne(args);
  }
}
