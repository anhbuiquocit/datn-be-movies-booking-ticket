import { registerEnumType } from '@nestjs/graphql';

export enum ShowingScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    RoomId = "RoomId",
    FilmId = "FilmId",
    price = "price",
    startDate = "startDate",
    endDate = "endDate",
    startTime = "startTime",
    endTime = "endTime"
}


registerEnumType(ShowingScalarFieldEnum, { name: 'ShowingScalarFieldEnum', description: undefined })
