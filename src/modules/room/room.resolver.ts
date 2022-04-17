import { RoomService } from './room.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { Room } from 'src/@generated/prisma-nestjs-graphql/room/room.model';
import { FindManyRoomArgs } from 'src/@generated/prisma-nestjs-graphql/room/find-many-room.args';
import { CreateOneRoomArgs } from 'src/@generated/prisma-nestjs-graphql/room/create-one-room.args';
import { UpdateOneRoomArgs } from 'src/@generated/prisma-nestjs-graphql/room/update-one-room.args';
import { DeleteOneRoomArgs } from 'src/@generated/prisma-nestjs-graphql/room/delete-one-room.args';

@Resolver()
export class RoomResolver {
  constructor(private roomService: RoomService) {}
  // @UseGuards(GqlAuthGuard)
  @Query(() => [Room])
  async roomConnection(@Args() args: FindManyRoomArgs) {
    return this.roomService.connection(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Room)
  async createRoom(@Args() args: CreateOneRoomArgs) {
    return this.roomService.createOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Room)
  async updateRoom(@Args() args: UpdateOneRoomArgs) {
    return this.roomService.updateOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async deleteRoom(@Args() args: DeleteOneRoomArgs) {
    return this.roomService.deleteOne(args);
  }
}
