import { registerEnumType } from '@nestjs/graphql';

export enum BookingScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    UserId = "UserId",
    amount = "amount",
    price = "price",
    PromotionId = "PromotionId",
    isPayment = "isPayment"
}


registerEnumType(BookingScalarFieldEnum, { name: 'BookingScalarFieldEnum', description: undefined })
