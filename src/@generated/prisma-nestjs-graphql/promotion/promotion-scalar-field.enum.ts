import { registerEnumType } from '@nestjs/graphql';

export enum PromotionScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    code = "code",
    discount = "discount",
    maxDiscount = "maxDiscount",
    startDate = "startDate",
    endDate = "endDate",
    startTime = "startTime",
    endTime = "endTime"
}


registerEnumType(PromotionScalarFieldEnum, { name: 'PromotionScalarFieldEnum', description: undefined })
