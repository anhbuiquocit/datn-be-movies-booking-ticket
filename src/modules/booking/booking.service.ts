import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Booking } from 'src/@generated/prisma-nestjs-graphql/booking/booking.model';
const prisma = new PrismaClient();
@Injectable()
export class BookingService {
  async connection(args): Promise<Booking[]> {
    const { where, orderBy, cursor, take, skip, distinct } = args;
    const listConnection = await prisma.booking.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
      distinct,
    });
    return listConnection;
  }
  async createOne(args): Promise<Booking> {
    const { data } = args;
    const itemCreate = await prisma.booking.create({
      data,
    });
    return itemCreate;
  }
  async updateOne(args): Promise<Booking> {
    const { data, where } = args;
    const itemUpdate = await prisma.booking.update({
      where,
      data,
    });
    return itemUpdate;
  }
  async deleteOne(args): Promise<boolean> {
    const { where } = args;
    const itemDelete = await prisma.booking.delete({
      where,
    });
    return true;
  }
}
