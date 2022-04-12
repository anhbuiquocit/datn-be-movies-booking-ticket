import { Injectable } from '@nestjs/common';
import { Seat } from 'src/@generated/prisma-nestjs-graphql/seat/seat.model';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class SeatService {
  async connection(args): Promise<Seat[]> {
    const { where, orderBy, cursor, take, skip, distinct } = args;
    const listConnection = await prisma.seat.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
      distinct,
    });
    return listConnection;
  }
  async createOne(args): Promise<Seat> {
    const { data } = args;
    const itemCreate = await prisma.seat.create({
      data,
    });
    return itemCreate;
  }
  async updateOne(args): Promise<Seat> {
    const { data, where } = args;
    const itemUpdate = await prisma.seat.update({
      where,
      data,
    });
    return itemUpdate;
  }
  async deleteOne(args): Promise<boolean> {
    const { where } = args;
    const itemDelete = await prisma.seat.delete({
      where,
    });
    return true;
  }
}
