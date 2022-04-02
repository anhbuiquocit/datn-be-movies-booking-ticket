import { registerEnumType } from '@nestjs/graphql';

export enum ShowingScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    deletedAt = "deletedAt",
    RoomId = "RoomId",
    FilmId = "FilmId",
    startDate = "startDate",
    endDate = "endDate"
}


registerEnumType(ShowingScalarFieldEnum, { name: 'ShowingScalarFieldEnum', description: undefined })
