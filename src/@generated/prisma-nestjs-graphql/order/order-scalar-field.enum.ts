import { registerEnumType } from '@nestjs/graphql';

export enum OrderScalarFieldEnum {
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


registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
