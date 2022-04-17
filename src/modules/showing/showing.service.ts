import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Showing } from 'src/@generated/prisma-nestjs-graphql/showing/showing.model';
const prisma = new PrismaClient();
@Injectable()
export class ShowingService {
  async connection(args): Promise<Showing[]> {
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
  async createOne(args): Promise<Showing> {
    const { data } = args;
    const showingCreate = await prisma.showing.create({
      data,
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
}
