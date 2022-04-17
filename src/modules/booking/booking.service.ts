import { BookingItemMaxAggregate } from './../../@generated/prisma-nestjs-graphql/booking-item/booking-item-max-aggregate.output';
import { Seat } from './../../@generated/prisma-nestjs-graphql/seat/seat.model';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Booking } from 'src/@generated/prisma-nestjs-graphql/booking/booking.model';
import { MyApolloError } from 'src/util/handleException/MyError';
import { BookingError } from './booking.error';
import { BookingItemInput } from './dto/BookingItemDto.dto';
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
    console.log('args: ', args);
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
  getIDOfSeat(stringtify: string, listSeat: Array<Seat>) {
    const array = JSON.parse(stringtify);
    const arr0 = array[0];
    const arr1 = array[1];
    const arr2 = array[2];
    const arr3 = array[3];
    const arr4 = array[4];
    const arr5 = array[5];
    const arr6 = array[6];
    const arr7 = array[7];

    const result = [];
    for (let i = 0; i < arr0.length; i++) {
      if (arr0[i]) {
        result.push(`A${i + 1}`);
      }
      if (arr1[i]) {
        result.push(`B${i + 1}`);
      }
      if (arr2[i]) {
        result.push(`C${i + 1}`);
      }
      if (arr3[i]) {
        result.push(`D${i + 1}`);
      }
      if (arr4[i]) {
        result.push(`E${i + 1}`);
      }
      if (arr5[i]) {
        result.push(`F${i + 1}`);
      }
      if (arr6[i]) {
        result.push(`G${i + 1}`);
      }
      if (arr7[i]) {
        result.push(`H${i + 1}`);
      }
    }
    console.log('result', result);
    if (!result) return [];
    const listSeatId = [];
    for (let i = 0; i < listSeat.length; i++) {
      if (result.indexOf(listSeat[i].name) !== -1) {
        listSeatId.push(listSeat[i].id);
      }
    }
    return listSeatId;
  }

  async userBookingTicket(data: BookingItemInput): Promise<boolean> {
    console.log('data.listSeat', JSON.parse(data.listSeat));
    try {
      const userExist = await prisma.user.count({
        where: {
          id: data.userId,
        },
      });
      if (userExist === 0) {
        throw new MyApolloError(BookingError.USER_IS_NOT_EXIST);
      }
      const showingExist = await prisma.showing.count({
        where: {
          id: data.showingId,
        },
      });
      if (showingExist === 0) {
        throw new MyApolloError(BookingError.SHOWING_IS_NOT_EXIST);
      }
      const listSeatInRoom = await prisma.seat.findMany({
        where: {
          room: {
            id: data.roomId,
          },
        },
      });
      const listSeatId = this.getIDOfSeat(data.listSeat, listSeatInRoom);
      if (!listSeatId) {
        throw new MyApolloError(BookingError.NO_SEAT_SELECTED);
      }
      const TicketIsBooked = await prisma.booking.count({
        where: {
          bookingItem: {
            some: {
              SeatId: {
                in: listSeatId,
              },
              ShowingId: {
                equals: data.showingId,
              },
            },
          },
        },
      });
      console.log('TicketIsBoooked: ', TicketIsBooked);
      if (TicketIsBooked !== 0) {
        throw new MyApolloError(BookingError.SEAT_SHOWING_IS_BOOKED);
      }

      const arrayBookingItem = [];
      for (let i = 0; i < listSeatId.length; i++) {
        arrayBookingItem.push({
          SeatId: listSeatId[i],
          ShowingId: data.showingId,
        });
      }

      await prisma.booking.create({
        data: {
          user: {
            connect: {
              id: data.userId,
            },
          },
          amount: data.amount,
          price: data.price,
          bookingItem: {
            createMany: {
              data: arrayBookingItem,
            },
          },
          promotion: data.promotionId
            ? {
                connect: {
                  id: data.promotionId,
                },
              }
            : undefined,
        },
      });
      console.log('This is end');
      return true;
    } catch (err) {
      throw err;
    }
  }
}
