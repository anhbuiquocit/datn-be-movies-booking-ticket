import { registerEnumType } from '@nestjs/graphql';

export enum BookingItemScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    SeatId = "SeatId",
    ShowingId = "ShowingId",
    price = "price"
}


registerEnumType(BookingItemScalarFieldEnum, { name: 'BookingItemScalarFieldEnum', description: undefined })
