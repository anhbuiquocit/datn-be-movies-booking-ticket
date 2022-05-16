import { ShowingError } from './showing.error';
import { MyApolloError } from './../../util/handleException/MyError';
import { ShowingAggregateArgs } from './../../@generated/prisma-nestjs-graphql/showing/showing-aggregate.args';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Showing } from 'src/@generated/prisma-nestjs-graphql/showing/showing.model';
import { CreateOneShowingArgs } from 'src/@generated/prisma-nestjs-graphql/showing/create-one-showing.args';
import moment from 'moment';
const prisma = new PrismaClient();
@Injectable()
export class ShowingService {
  async connection(args): Promise<Showing[]> {
    console.log('args: ', args);
    const { where, orderBy, cursor, take, skip, distinct } = args;
    const listShowing = await prisma.showing.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
      distinct,
      select: {
        BookingItem: true,
        FilmId: true,
        RoomId: true,
        _count: true,
        createdAt: true,
        deletedAt: true,
        endDate: true,
        film: true,
        id: true,
        price: true,
        room: true,
        startDate: true,
        updatedAt: true,
        startTime: true,
        endTime: true,
      },
    });
    return listShowing;
  }
  async createOne(args: CreateOneShowingArgs): Promise<Showing> {
    const {
      data: { film, room, startDate, price, startTime },
    } = args;
    // const { data } = args;
    // console.log('dataaa: ', data);
    const filmData = await prisma.film.findUnique({
      where: {
        id: film.connect.id,
      },
    });
    if (!filmData) {
      throw new MyApolloError(ShowingError.FILM_NOT_EXIST);
    }
    const roomData = await prisma.room.findUnique({
      where: {
        id: room.connect.id,
      },
    });
    if (!roomData) {
      throw new MyApolloError(ShowingError.ROOM_NOT_EXIST);
    }
    const now = moment();
    if (moment(startDate).isBefore(now)) {
      throw new MyApolloError(ShowingError.IMPOSSIBLE_DATE_IN_THE_PAST);
    }
    const endTime = moment(startTime)
      .add(filmData.time, 'minutes')
      .format('YYYY-MM-DD[T]HH:mm:ss');
    const showingCreate = await prisma.showing.create({
      data: {
        film,
        room,
        price,
        startDate,
        startTime,
        endTime,
      },
    });
    return showingCreate;
  }
  async updateOne(args): Promise<Showing> {
    const { data, where } = args;
    const showingUpdate = await prisma.showing.update({
      where,
      data,
    });
    return showingUpdate;
  }
  async deleteOne(args): Promise<boolean> {
    const { where } = args;
    const showingDelete = await prisma.showing.delete({
      where,
    });
    return true;
  }

  async showingAggregate(args: ShowingAggregateArgs) {
    const {
      where,
      orderBy,
      cursor,
      take,
      skip,
      _count,
      _avg,
      _sum,
      _min,
      _max,
    } = args;
    const aggregations = await prisma.showing.aggregate({
      where,
      orderBy,
      cursor,
      take,
      skip,
      _count,
      _avg,
      _sum,
      _min,
      _max,
    });
    return aggregations;
  }
}
