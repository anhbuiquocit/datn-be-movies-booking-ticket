import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Room } from 'src/@generated/prisma-nestjs-graphql/room/room.model';
const prisma = new PrismaClient();
@Injectable()
export class RoomService {
  async connection(args): Promise<Room[]> {
    const { where, orderBy, cursor, take, skip, distinct } = args;
    const listConnection = await prisma.room.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
      distinct,
    });
    return listConnection;
  }
  async createOne(args): Promise<Room> {
    const { data } = args;
    const itemCreate = await prisma.room.create({
      data,
    });
    return itemCreate;
  }
  async updateOne(args): Promise<Room> {
    const { data, where } = args;
    const itemUpdate = await prisma.room.update({
      where,
      data,
    });
    return itemUpdate;
  }
  async deleteOne(args): Promise<boolean> {
    const { where } = args;
    const itemDelete = await prisma.room.delete({
      where,
    });
    return true;
  }
}
