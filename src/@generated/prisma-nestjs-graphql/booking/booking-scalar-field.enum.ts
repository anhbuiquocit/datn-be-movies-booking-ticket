import { registerEnumType } from '@nestjs/graphql';

export enum BookingScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    UserId = "UserId",
    ShowingId = "ShowingId",
    amount = "amount",
    price = "price",
    BookingItemId = "BookingItemId",
    PromotionId = "PromotionId"
}


registerEnumType(BookingScalarFieldEnum, { name: 'BookingScalarFieldEnum', description: undefined })
