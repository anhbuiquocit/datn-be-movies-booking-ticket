import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { BookingItem } from 'src/@generated/prisma-nestjs-graphql/booking-item/booking-item.model';
const prisma = new PrismaClient();
@Injectable()
export class BookingItemService {
  async connection(args): Promise<BookingItem[]> {
    const { where, orderBy, cursor, take, skip, distinct } = args;
    const listConnection = await prisma.bookingItem.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
      distinct,
      select: {
        Booking: true,
        SeatId: true,
        ShowingId: true,
        bookingId: true,
        createdAt: true,
        deletedAt: true,
        id: true,
        seat: true,
        showing: true,
        updatedAt: true,
      },
    });
    console.log('listConnection: ', listConnection);
    return listConnection;
  }
  async createOne(args): Promise<BookingItem> {
    const { data } = args;
    const itemCreate = await prisma.bookingItem.create({
      data,
    });
    return itemCreate;
  }
  async updateOne(args): Promise<BookingItem> {
    const { data, where } = args;
    const itemUpdate = await prisma.bookingItem.update({
      where,
      data,
    });
    return itemUpdate;
  }
  async deleteOne(args): Promise<boolean> {
    const { where } = args;
    const itemDelete = await prisma.bookingItem.delete({
      where,
    });
    return true;
  }
}
